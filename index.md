---
layout: homepage
---

<style>
  html { scroll-behavior: smooth; }
  section { padding-top: 1.6em !important; }
  .site-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    margin: 0 0 28px;
    padding-bottom: 14px;
    border-bottom: 1px solid #e6e6e6;
  }
  .site-nav a {
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    padding: 2px 4px;
    border-bottom: 2px solid transparent;
    transition: border-color .2s ease;
  }
  .site-nav a:hover { border-bottom-color: currentColor; }
  .site-nav a.active { border-bottom-color: currentColor; }
  .site-nav .nav-sep {
    padding: 0 10px;
    opacity: 0.35;
    font-weight: 400;
    user-select: none;
    pointer-events: none;
  }
  .view { transition: opacity .3s ease; }
  #blog-view { display: none; opacity: 0; }
  .blog-intro { margin-bottom: 32px; }
  .blog-article { margin-bottom: 28px; }
  .blog-article .article-title {
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0 0 2px;
  }
  .blog-article .article-date {
    display: block;
    font-size: 0.85rem;
    opacity: 0.65;
    margin-bottom: 6px;
  }
  .blog-empty { opacity: 0.7; font-style: italic; }
  .nowplaying {
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 18px 0 4px;
  }
  .nowplaying .np-art {
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    border-radius: 6px;
    background-color: #ececec;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    line-height: 1;
  }
  .nowplaying .np-text { margin: 0; line-height: 1.45; }
  .nowplaying .np-song { font-weight: 600; }
  .nowplaying .np-meta { opacity: 0.55; font-size: 0.9em; }
</style>

<nav class="site-nav">
  <a href="#" class="nav-link" id="nav-about" data-view="home">About</a>
  <span class="nav-sep">|</span>
  <a href="#" class="nav-link" id="nav-blog" data-view="blog">Blog</a>
</nav>

<div id="home-view" class="view" markdown="1">

Hello! I am a Ph.D. student at the [School of Computing and Information](https://www.sci.pitt.edu/), [University of Pittsburgh](https://pitt.edu/). I am grateful to be working under the guidance of [Prof. Yu-Ru Lin](http://www.yurulin.com/) within the [Computational Social Dynamics Lab](https://picsolab.github.io/).

My research aims to explore how socially-aware natural language processing systems can improve our understanding of human social behaviour and effectively accommodate diverse individual preferences and needs. I am also interested in assessing the ethical integrity of such technologies to ensure their safety and responsible use.

I have previously graduated with a master’s in AI from Stockholm University, where I worked with a machine learning engineer from Spotify to investigate how podcast comprehension can be improved using topic segmentation and text summarisation methods. I was advised by [Prof. Panagiotis Papapetrou](https://papapetrou.blogs.dsv.su.se/) and [Maria Movin](https://www.linkedin.com/in/mariamovin).

Before my move to Stockholm, I also completed my bachelor’s in AI at the University of Malta, where I worked with [Prof. Charlie Abela](https://www.um.edu.mt/profile/charlieabela) to explore the relationship between users’ psychological traits and the social connections they create on Twitter.

## Updates

* [April 2026] Excited to share that our workshop paper, ["Auditing Support Strategies in LLMs through Grounded Multi-Turn Social Simulation"](https://arxiv.org/abs/2604.17079), has been selected for an oral presentation at the SocialLLM Workshop at ICWSM 2026! 🎉 See you in LA!
* [May 2025] [Collaborated at SICSS-CMU](https://sicss.io/2025/cmu/people#:~:text=less%20impactful%20efforts.-,Andrew%20Aquilina,-Andrew%20Aquilina%20is) with an interdisciplinary team to analyse how political perceptions of AI shifted before and after ChatGPT's launch.
* [March 2025] Presented my first Ph.D. project as a poster at the [Johns Hopkins Data Science and AI Institute Spring 2025 Symposium](assets/img/poster.jpg)!

## Education

<div style="overflow: auto;">
    <div style="float: left; margin-right: 20px;">
        <img style="max-width: 100px; padding: 10px;" src="assets/img/pitt.png">
    </div>
    <div>
        <p><strong>Aug. 2024 - Apr. 2029 (Expected)</strong>, Department of Informatics and Networked Systems, <strong>University of Pittsburgh</strong>,</p>
        <p>Doctor of Philosophy in Information Science.</p>
    </div>
</div>

<div style="overflow: auto;">
    <div style="float: left; margin-right: 20px;">
        <img style="max-width: 100px; padding: 10px;" src="assets/img/su.png">
    </div>
    <div>
        <p><strong>Aug. 2021 - Jun. 2022</strong>, Department of Computer and Systems Sciences, <strong>Stockholm University</strong>,</p>
        <p>Master of Science in Computer and System Sciences, Artificial Intelligence.</p>
    </div>
</div>

<div style="overflow: auto;">
    <div style="float: left; margin-right: 20px;">
        <img style="max-width: 100px; padding: 10px;" src="assets/img/uom.jpg">
    </div>
    <div>
        <p><strong>Oct. 2018 - Jun. 2021</strong>, Department of Artificial Intelligence, <strong>University of Malta</strong>,</p>
        <p>Bachelor of Science in Information Technology, Artificial Intelligence (with First Class honours).</p>
    </div>
</div>

<!--
## Industry Experience

<div style="overflow: auto;">
    <div style="float: left; margin-right: 20px;">
        <img style="max-width: 100px; padding: 10px;" src="assets/img/loqus.png">
    </div>
    <div>
        <p><strong>Sep. 2023 - Jul. 2024</strong>, Backend Team, <strong>Loqus Business Intelligence</strong>,</p>
        <p>Artificial Intelligence Engineer.</p>
    </div>
</div>

<div style="overflow: auto;">
    <div style="float: left; margin-right: 20px;">
        <img style="max-width: 100px; padding: 10px;" src="assets/img/sambla.jpg">
    </div>
    <div>
        <p><strong>Nov. 2022 - May 2023</strong>, Data Team, <strong>Sambla</strong>,</p>
        <p>Data Scientist.</p>
    </div>
</div>

<div style="overflow: auto;">
    <div style="float: left; margin-right: 20px;">
        <img style="max-width: 100px; padding: 10px;" src="assets/img/ascent.jpg">
    </div>
    <div>
        <p><strong>Jul. 2019 - Apr. 2020, Jul. 2021 - Aug. 2021</strong>, Student Internship, <strong>Ascent</strong>,</p>
        <p>Junior Software Engineer / Junior Data Scientist.</p>
    </div>
</div>

<div style="overflow: auto;">
    <div style="float: left; margin-right: 20px;">
        <img style="max-width: 100px; padding: 10px;" src="assets/img/uom.jpg">
    </div>
    <div>
        <p><strong>Jul. 2020 - Sep. 2020</strong>, Department of Artificial Intelligence, <strong>University of Malta</strong>,</p>
        <p>Software Engineer Apprentice.</p>
    </div>
</div>
-->

## Papers

{% include_relative _includes/publications.md %}

## A bit about me

🏝️ I'm from a very small island in the Mediterranean called Malta. It's a beautiful country, you should come visit!

🕹️ My all-time favourite video game has to be the original Deus Ex. One of the best stories ever told in a game. I served as a beta tester for an overhaul mod called [Deus Ex: Revision](https://store.steampowered.com/app/397550/Deus_Ex_Revision/), which I highly recommend.

👁️ I have red-green colour blindness.

🐧 I used to have a blog about Club Penguin when I was 12. I had even convinced my mum to buy me a .com domain for it! It was a simpler time.

🍫 A hill I'd die on? Mint chocolate is humanity's greatest mistake.

<div id="nowplaying" class="nowplaying">
  <div id="np-art" class="np-art" role="img" aria-label="Album art">🎵</div>
  <p class="np-text">Favourite song right now? <span id="np-song">…</span> <span class="np-meta">(from my Spotify)</span></p>
</div>

</div>

<div id="blog-view" class="view">
  <h2>Blog</h2>
  <p class="blog-intro">
    This is a space for my thoughts, research notes, and things I've been learning. Most importantly, it is a no AI zone - meaning I cannot use it to draft, write, or proofread for me. It is organic! 🌱
  </p>
  <div class="articles">
    <p class="blog-empty">No articles yet — check back soon!</p>
  </div>
</div>

<script>
  (function () {
    var aboutBtn = document.getElementById('nav-about');
    var blogBtn  = document.getElementById('nav-blog');
    var homeView = document.getElementById('home-view');
    var blogView = document.getElementById('blog-view');
    var FADE_MS  = 300;

    function setActive(link) {
      [aboutBtn, blogBtn].forEach(function (l) { l.classList.remove('active'); });
      if (link) link.classList.add('active');
    }

    function isBlogVisible() {
      return blogView.style.display === 'block';
    }

    function fadeOut(el, cb) {
      el.style.opacity = '0';
      setTimeout(function () { el.style.display = 'none'; if (cb) cb(); }, FADE_MS);
    }

    function fadeIn(el) {
      el.style.display = 'block';
      el.style.opacity = '0';
      void el.offsetWidth;
      el.style.opacity = '1';
    }

    aboutBtn.addEventListener('click', function (e) {
      e.preventDefault();
      if (isBlogVisible()) {
        setActive(aboutBtn);
        fadeOut(blogView, function () { fadeIn(homeView); });
      }
    });

    blogBtn.addEventListener('click', function (e) {
      e.preventDefault();
      if (!isBlogVisible()) {
        setActive(blogBtn);
        fadeOut(homeView, function () { fadeIn(blogView); });
      }
    });
  })();

  (function () {
    var wrap = document.getElementById('nowplaying');
    var artEl = document.getElementById('np-art');
    var songEl = document.getElementById('np-song');
    if (!wrap || !artEl || !songEl) return;

    function escapeHtml(s) {
      return String(s).replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
      });
    }

    // Data is refreshed periodically by .github/workflows/nowplaying.yml,
    // which writes assets/nowplaying.json from the Spotify API.
    fetch('assets/nowplaying.json?cb=' + Date.now())
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || !d.name) { wrap.style.display = 'none'; return; }
        songEl.innerHTML = '<a class="np-song" href="' + escapeHtml(d.url || '#') +
          '" target="_blank" rel="noopener">' + escapeHtml(d.name) + '</a> by ' +
          escapeHtml(d.artist || '');
        if (d.image) {
          artEl.style.backgroundImage = 'url("' + d.image + '")';
          artEl.textContent = '';
        }
      })
      .catch(function () { wrap.style.display = 'none'; });
  })();
</script>
