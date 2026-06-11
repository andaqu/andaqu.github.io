---
layout: homepage
---

<style>
  html { scroll-behavior: smooth; }
  section { padding-top: 1.6em !important; }
  .site-nav {
    position: relative;
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
  .blog-list, .blog-single { transition: opacity .3s ease; }
  .blog-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .blog-list-item { margin: 0 0 18px; }
  .blog-list-link {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  .blog-list-link:hover .blog-list-title { text-decoration: underline; }
  .blog-list-title {
    display: block;
    font-size: 1.15rem;
    font-weight: 700;
  }
  .blog-list-date {
    display: block;
    font-size: 0.85rem;
    opacity: 0.65;
    margin-top: 2px;
  }
  .blog-single { display: none; }
  .blog-single .blog-article { display: none; }
  .blog-single .blog-article.active { display: block; }
  .blog-back {
    display: inline-block;
    margin-bottom: 18px;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.8;
  }
  .blog-back:hover { opacity: 1; text-decoration: underline; }
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

  /* Light / dark mode toggle (sun rises, moon sets) ------------------ */
  .theme-toggle {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: 0;
    margin: 0;
    padding: 4px 5px;
    line-height: 0;
    cursor: pointer;
    color: #39c;
    border-radius: 8px;
    transition: color .7s ease, background-color .2s ease;
    -webkit-tap-highlight-color: transparent;
  }
  .theme-toggle:hover { background-color: rgba(51, 153, 204, .1); }
  .theme-toggle:focus-visible { outline: 2px solid currentColor; outline-offset: 2px; }
  .tt-svg { display: block; overflow: visible; }
  /* Celestial bodies glide vertically; the clip mask hides them below
     the horizon, so the sun reads as a dome and only "sets" out of view. */
  .tt-sun,
  .tt-moon {
    transition: transform .85s cubic-bezier(.34, .14, .2, 1);
    will-change: transform;
  }
  .tt-rays { transition: opacity .5s ease; }
  .tt-moon { transform: translateY(34px); }      /* light mode: moon hidden below */
  html.dark .tt-sun { transform: translateY(30px); }   /* dark mode: sun has set */
  html.dark .tt-moon { transform: translateY(0); }     /* dark mode: moon has risen */
  html.dark .tt-rays { opacity: 0; }
  html.dark .theme-toggle { color: #e6edf5; }
  html.dark .theme-toggle:hover { background-color: rgba(230, 237, 245, .12); }

  /* Dark theme colours + smooth fade -------------------------------- */
  /* The content panel ships as a near-white card; darken it so light
     text is readable (otherwise dark mode just looks "still white"). */
  html.dark .wrapper { background-color: rgba(13, 18, 28, .82); }
  html.dark body,
  html.dark autocolor,
  html.dark position,
  html.dark email { color: #c7d2e0; }
  html.dark .site-nav { border-bottom-color: rgba(255, 255, 255, .18); }
  html.dark section { border-color: rgba(255, 255, 255, .14); }
  html.dark .site-nav a { color: #e6edf5; }
  html.dark h1, html.dark h2, html.dark h3,
  html.dark h4, html.dark h5, html.dark h6 { color: #9ec5ff; }
  html.dark strong { color: #f0f0f0; }
  html.dark a { color: #6cb6ff; }
  html.dark a:hover { color: #9ed0ff; }
  html.dark hr { background: rgba(255, 255, 255, .14); }
  html.dark blockquote { border-left-color: rgba(255, 255, 255, .2); }
  html.dark pre,
  html.dark code { color: #d7deea; }
  html.dark pre { background: rgba(255, 255, 255, .06); border-color: rgba(255, 255, 255, .14); }
  html.dark th, html.dark td { border-bottom-color: rgba(255, 255, 255, .14); }
  html.dark th, html.dark dt { color: #e6edf5; }
  html.dark .social-icons a { color: #9ec5ff !important; }
  html.dark .social-icons a:hover {
    background-color: rgba(255, 255, 255, .12) !important;
    color: #c8e0ff !important;
  }
  html.dark .publications ol.bibliography li .links a.btn {
    color: #e6edf5 !important;
    border-color: rgba(255, 255, 255, .55) !important;
  }
  html.dark .publications ol.bibliography li .links a.btn:hover {
    color: #9ed0ff !important;
    border-color: #9ed0ff !important;
    background-color: transparent;
  }

  .wrapper,
  body, autocolor, position, email,
  .site-nav, .site-nav a,
  section,
  h1, h2, h3, h4, h5, h6, strong, a, p, li, td {
    transition: color .7s ease, border-color .7s ease, background-color .7s ease;
  }
</style>

<nav class="site-nav">
  <a href="#" class="nav-link" id="nav-about" data-view="home">About</a>
  <span class="nav-sep">|</span>
  <a href="#" class="nav-link" id="nav-blog" data-view="blog">Blog</a>
  <button type="button" class="theme-toggle" id="theme-toggle" aria-label="Toggle light and dark mode" aria-pressed="false">
    <svg class="tt-svg" viewBox="0 0 72 44" width="56" height="34" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="tt-horizon-clip"><rect x="-6" y="0" width="84" height="30"/></clipPath>
      </defs>
      <g clip-path="url(#tt-horizon-clip)">
        <g class="tt-sun">
          <circle cx="36" cy="30" r="9" fill="currentColor"/>
          <g class="tt-rays" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
            <line x1="36" y1="11" x2="36" y2="3"/>
            <line x1="27" y1="13" x2="24" y2="6"/>
            <line x1="45" y1="13" x2="48" y2="6"/>
            <line x1="20" y1="18" x2="14" y2="12"/>
            <line x1="52" y1="18" x2="58" y2="12"/>
            <line x1="16" y1="26" x2="9"  y2="23"/>
            <line x1="56" y1="26" x2="63" y2="23"/>
          </g>
        </g>
        <g class="tt-moon">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" transform="translate(21.6 4.8) scale(1.2)"/>
        </g>
      </g>
      <line class="tt-horizon" x1="4" y1="30" x2="68" y2="30" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
    </svg>
  </button>
</nav>

<div id="home-view" class="view" markdown="1">

Hey! 👋 I'm Andrew. I am a Ph.D. student at the [School of Computing and Information](https://www.sci.pitt.edu/), [University of Pittsburgh](https://pitt.edu/). I am grateful to be working under the guidance of [Yu-Ru Lin](http://www.yurulin.com/).

My research examines how socially-aware NLP systems assess and affect users' mental well-being. I've been studying this by investigating the [socially situated nature of psychological distress](https://osf.io/3wnyz/overview), the way language models [support users over multi-turn conversations](https://arxiv.org/abs/2604.17079), and the [risk scenarios that make chatbots harmful](https://arxiv.org/abs/2606.00975).

Outside of research, I'm into [music](#what-am-i-listening-to), cooking, exploring new places... and anything creative to be honest (I've been trying out [pastel painting](assets/img/painting.jpg) lately)! I'm also from Malta, a small island in the Mediterranean. <a href="https://en.wikipedia.org/wiki/Malta"><img src="assets/img/flag.svg" alt="Maltese flag" style="height: 0.85em; vertical-align: -0.1em; border-radius: 2px;"></a>

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

#### Favourite song right now? {#what-am-i-listening-to}

<div id="nowplaying" class="nowplaying">
  <div id="np-art" class="np-art" role="img" aria-label="Album art">🎵</div>
  <p class="np-text">Lately I've been listening to <span id="np-song">…</span> <span class="np-meta">(from my Spotify)</span></p>
</div>

</div>

<div id="blog-view" class="view">
  <h2>Blog</h2>
  <p class="blog-intro">
    This is a space for my thoughts, research notes, and things I've been learning. Most importantly, it is a no AI zone 🚫 - meaning I cannot use it to ideate, draft, write, or proofread for me. It is organic! 🌱
  </p>
  <div class="articles">
    {% assign posts = site.blog | sort: 'date' | reverse %}
    {% if posts.size > 0 %}
      <ul class="blog-list" id="blog-list">
        {% for post in posts %}
        <li class="blog-list-item">
          <a href="#" class="blog-list-link" data-index="{{ forloop.index0 }}">
            <span class="blog-list-title">{{ post.title }}</span>
            {% if post.date %}<time class="blog-list-date">{{ post.date | date: "%B %-d, %Y" }}</time>{% endif %}
          </a>
        </li>
        {% endfor %}
      </ul>
      <div class="blog-single" id="blog-single">
        <a href="#" class="blog-back" id="blog-back">&larr; All posts</a>
        {% for post in posts %}
        <article class="blog-article" data-index="{{ forloop.index0 }}">
          <h3 class="article-title">{{ post.title }}</h3>
          {% if post.date %}<time class="article-date">{{ post.date | date: "%B %-d, %Y" }}</time>{% endif %}
          {{ post.content }}
        </article>
        {% endfor %}
      </div>
    {% else %}
      <p class="blog-empty">No articles yet — check back soon!</p>
    {% endif %}
  </div>
</div>

<script>
  (function () {
    var root = document.documentElement;
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function sync() { btn.setAttribute('aria-pressed', root.classList.contains('dark') ? 'true' : 'false'); }
    sync();

    btn.addEventListener('click', function () {
      var dark = root.classList.toggle('dark');
      try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
      sync();
    });
  })();

  (function () {
    var aboutBtn = document.getElementById('nav-about');
    var blogBtn  = document.getElementById('nav-blog');
    var homeView = document.getElementById('home-view');
    var blogView = document.getElementById('blog-view');
    var blogIntro = blogView.querySelector('.blog-intro');
    var blogList = document.getElementById('blog-list');
    var blogSingle = document.getElementById('blog-single');
    var blogBack = document.getElementById('blog-back');
    var articles = blogSingle ? blogSingle.querySelectorAll('.blog-article') : [];
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

    function fadeIn(el, display) {
      el.style.display = display || 'block';
      el.style.opacity = '0';
      void el.offsetWidth;
      el.style.opacity = '1';
    }

    function showArticle(index) {
      Array.prototype.forEach.call(articles, function (a) {
        a.classList.toggle('active', a.getAttribute('data-index') === String(index));
      });
      fadeOut(blogList, function () {
        if (blogIntro) blogIntro.style.display = 'none';
        fadeIn(blogSingle);
      });
    }

    function showList() {
      fadeOut(blogSingle, function () {
        Array.prototype.forEach.call(articles, function (a) { a.classList.remove('active'); });
        if (blogIntro) blogIntro.style.display = '';
        fadeIn(blogList);
      });
    }

    // Reset the blog back to the list view (used when (re)entering the Blog tab).
    function resetBlog() {
      if (!blogSingle || !blogList) return;
      Array.prototype.forEach.call(articles, function (a) { a.classList.remove('active'); });
      blogSingle.style.display = 'none';
      blogSingle.style.opacity = '0';
      if (blogIntro) blogIntro.style.display = '';
      blogList.style.display = 'block';
      blogList.style.opacity = '1';
    }

    if (blogList) {
      blogList.addEventListener('click', function (e) {
        var link = e.target.closest('.blog-list-link');
        if (!link) return;
        e.preventDefault();
        showArticle(link.getAttribute('data-index'));
      });
    }

    if (blogBack) {
      blogBack.addEventListener('click', function (e) {
        e.preventDefault();
        showList();
      });
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
        resetBlog();
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
