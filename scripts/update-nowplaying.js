/**
 * Reads the most recently added track from a public Spotify playlist ("featured")
 * and writes assets/nowplaying.json. Runs in CI via .github/workflows/nowplaying.yml.
 *
 * Note: this app's access to the /playlists/{id}/tracks sub-endpoint is restricted,
 * so we read the items embedded in the base /playlists/{id} response, which requires
 * a user-authorized token (hence the refresh token rather than client-credentials).
 *
 * Required env vars (provided as GitHub Actions secrets):
 *   SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN
 */
const fs = require('fs');
const path = require('path');

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const PLAYLIST_ID = '45cbFL3DElcsC7ATDxTKpJ';
const OUT = path.join(__dirname, '..', 'assets', 'nowplaying.json');

async function getAccessToken() {
  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    }),
  });
  if (!res.ok) throw new Error(`Token request failed (${res.status}): ${await res.text()}`);
  return (await res.json()).access_token;
}

function pickImage(images) {
  if (!images || !images.length) return '';
  const medium = images.find((i) => i.width === 300);
  return (medium || images[0]).url || '';
}

async function main() {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    throw new Error('Missing SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET / SPOTIFY_REFRESH_TOKEN');
  }

  const token = await getAccessToken();
  const res = await fetch(
    `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}?market=US`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok) throw new Error(`Playlist request failed (${res.status}): ${await res.text()}`);

  const data = await res.json();
  // The track paging object is returned as `tracks` or `items` depending on the
  // response shape; normalise to a flat array of entries.
  const paging = data.tracks || data.items;
  const entries = Array.isArray(paging) ? paging : (paging && paging.items) || [];

  // Each entry's track lives under `track` (standard) or `item` (this app's shape).
  const withTrack = entries
    .map((e) => ({ added_at: e.added_at, track: e.track || e.item }))
    .filter((e) => e.track && e.track.name);

  if (!withTrack.length) {
    console.log('Playlist has no readable tracks; leaving existing file untouched.');
    return;
  }

  withTrack.sort((a, b) => new Date(b.added_at) - new Date(a.added_at));
  const track = withTrack[0].track;

  const payload = {
    name: track.name,
    artist: (track.artists || []).map((a) => a.name).join(', '),
    url: (track.external_urls && track.external_urls.spotify) || '',
    image: pickImage(track.album && track.album.images),
    updated: new Date().toISOString(),
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(payload, null, 2) + '\n');
  console.log('Wrote', OUT);
  console.log(payload);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
