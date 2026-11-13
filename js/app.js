/* DATA ONLY: add a new article by adding one object to this array.
   content blocks: { h: "subheading", p: ["paragraph", ...], ul: ["list item", ...] } */
/* =====================================================================
   HOW TO ADD AN ARTICLE: copy this template, paste it as the LAST item
   (after the final article, before the closing "];"), and add a comma
   after the previous article's closing "}".

  {
    id: 7,                              // unique number, never reuse
    title: "Your title", category: "Programming",   // must match CATEGORIES
    author: "Name", date: "2026-11-01", readTime: 5, hue: 120, featured: false,
    // image: "assets/images/name.jpg", imageAlt: "...", imageCredit: "...",
    // source: "Publication, date", sourceUrl: "https://...",
    description: "Short summary shown on cards.",
    keywords: ["keyword1", "keyword2"],
    intro: "Opening paragraph.",
    content: [ { h: "Subheading", p: ["Paragraph."], ul: ["Optional item"] } ]
  }
   ===================================================================== */

const CATEGORIES = ["Artificial Intelligence", "Programming", "Software Engineering", "Web Development", "Technology Trends"];

const ARTICLES = [
  {
    id: 1, title: "An Overview of Artificial Intelligence Ethics",
    category: "Artificial Intelligence",
    author: "Summary of Huang, Zhang, Mao & Yao (2023)",
    date: "2023-08-01", readTime: 5, hue: 220, featured: true,
    image: "assets/images/ai-ethics.jpg",
    imageAlt: "A human with justice ",
    imageCredit: "AI ethics",
    source: "IEEE Transactions on Artificial Intelligence, Vol. 4, No. 4, pp. 799-819, Aug 2023",
    sourceUrl: "https://ieeexplore.ieee.org/document/9844014",
    description: "A beginner-friendly summary of a survey paper on the ethical risks of AI, the guidelines written to address them, and the open challenges.",
    keywords: ["ai ethics", "ethics", "privacy", "bias", "discrimination", "responsible ai", "guidelines", "survey"],
    intro: "AI now helps drive cars, support doctors, filter media, manage money and run factories. A recent survey paper asks a question that grows more important with every new use: what ethical problems come with this technology, and how do we deal with them?",
    content: [
      { h: "Why AI ethics matters", p: ["AI brings real benefits, mainly higher efficiency across the economy and society. But as it becomes part of daily life, it also disturbs existing social arrangements and raises moral questions that technical skill alone cannot answer.", "For this reason, AI ethics is no longer only an academic subject. Individuals, companies, governments and society as a whole have a stake in it."] },
      { h: "The main ethical risks", p: ["The survey groups the problems AI systems can cause for people into a few recurring themes:"], ul: ["Privacy leakage: personal data being exposed or misused", "Discrimination: unfair treatment of certain groups", "Unemployment: jobs lost to automation", "Security risks: harm caused by attacks on or failures of AI systems"] },
      { h: "What the survey covers", p: ["Rather than proposing one new method, the paper maps the whole field. It looks at the ethical issues AI raises, the guidelines and principles that different organisations have published, the approaches for addressing those issues, and the ways of evaluating whether an AI system behaves ethically."] },
      { h: "Challenges ahead", p: ["Writing principles is easier than putting them into practice. The authors point to the difficulty of actually implementing ethics in AI systems and outline directions for future research. The paper is aimed at researchers and especially beginners who want a first overview of the field."] },
      { h: "Takeaway for developers", p: ["Ethics is part of engineering, not an afterthought. Questions about data privacy, fairness and security should be asked when a system is designed, not after it is deployed.", "Summary based on: C. Huang, Z. Zhang, B. Mao and X. Yao, An Overview of Artificial Intelligence Ethics, IEEE Transactions on Artificial Intelligence, vol. 4, no. 4, pp. 799-819, Aug. 2023."] }
    ]
  },
  {
    id: 2, title: "Should Robotics Engineering Education Include Software Engineering Education?", category: "Software Engineering",
    author: "Milda Zizyte; Trenton Tabor", date: "09 May 2022", readTime: 7, hue: 160, featured: true,
    image: "assets/images/software-engineering.jpg",
    imageAlt: "Programming",
    imageCredit: "Photo by Jake Widmer",
    /* To credit an original source, uncomment:
    source: "Publication name, date",
    sourceUrl: "https://ieeexplore.ieee.org/document/9814834", */
    description: "How AI assistants, automation and new practices are reshaping the daily work of developers.",
    keywords: ["software", "engineering", "future", "automation", "careers", "devops"],
    intro: "Software engineering is more than writing code. It is the discipline of building reliable systems with a team over a long time, and that core is not going away.",
    content: [
      { h: "Tools are changing", p: ["AI code assistants now draft functions, tests and documentation. The engineer's role shifts toward specifying problems clearly, reviewing output critically and designing the overall system."] },
      { h: "Skills that stay valuable", p: ["Tools change quickly, fundamentals do not."], ul: ["Data structures, algorithms and complexity", "System design and trade-off analysis", "Testing, debugging and reading code", "Communication and collaboration"] },
      { h: "Practices to watch", p: ["Continuous integration, infrastructure as code and observability are becoming standard. Engineers who understand the whole delivery pipeline, from commit to production, are increasingly in demand."] }
    ]
  },
  {
    id: 3, title: "Python Programming for Beginners", category: "Programming",
    author: "Sofia Alvarez", date: "2026-09-15", readTime: 7, hue: 40, featured: true,
    /* To use a real image, uncomment and add the file:
    image: "assets/images/python.jpg",
    imageAlt: "Describe the image here",
    imageCredit: "Photo by NAME on Unsplash", */
    /* To credit an original source, uncomment:
    source: "Publication name, date",
    sourceUrl: "https://...", */
    description: "Variables, loops, functions and a first small project: everything you need to start with Python.",
    keywords: ["python", "beginner", "programming", "code", "learn", "functions"],
    intro: "Python is popular with beginners because its syntax reads almost like English, yet it is powerful enough for data science, web backends and automation.",
    content: [
      { h: "The building blocks", p: ["A variable stores a value, for example age = 21. Python figures out the type automatically. Conditions use if / elif / else, and loops use for and while."], ul: ["Numbers, strings and booleans", "Lists and dictionaries for collections", "Indentation defines code blocks"] },
      { h: "Functions", p: ["A function packages reusable logic: def greet(name): return 'Hello ' + name. Writing small functions that do one thing makes programs easier to test and understand."] },
      { h: "Your first project", p: ["Build a number-guessing game. It needs random numbers, a loop, user input and conditions, which practises nearly every basic concept at once."] }
    ]
  },
  {
    id: 4, title: "Understanding Machine Learning", category: "Artificial Intelligence",
    author: "Dr. Lena Fischer", date: "2026-09-05", readTime: 8, hue: 280, featured: false,
    /* To use a real image, uncomment and add the file:
    image: "assets/images/machine-learning.jpg",
    imageAlt: "Describe the image here",
    imageCredit: "Photo by NAME on Unsplash", */
    /* To credit an original source, uncomment:
    source: "Publication name, date",
    sourceUrl: "https://...", */
    description: "Supervised, unsupervised and reinforcement learning explained, with the training loop demystified.",
    keywords: ["machine learning", "ml", "training", "supervised", "model", "data"],
    intro: "Machine learning replaces hand-written rules with models that learn patterns from examples.",
    content: [
      { h: "Three learning styles", p: ["Supervised learning uses labelled examples, such as emails marked spam or not spam. Unsupervised learning finds structure in unlabelled data, such as customer groups. Reinforcement learning learns by trial and reward."] },
      { h: "The training loop", p: ["A model makes predictions, a loss function measures the error, and an optimiser such as gradient descent adjusts the parameters to reduce it. Repeating this many times is 'training'."] },
      { h: "Overfitting", p: ["A model that memorises training data performs badly on new data. We detect this by keeping a separate test set and prevent it with more data, simpler models or regularisation."] }
    ]
  },
  {
    id: 5, title: "Modern Web Development Technologies", category: "Web Development",
    author: "Marcus Weber", date: "2026-08-28", readTime: 6, hue: 190, featured: false,
    /* To use a real image, uncomment and add the file:
    image: "assets/images/web-development.jpg",
    imageAlt: "Describe the image here",
    imageCredit: "Photo by NAME on Unsplash", */
    /* To credit an original source, uncomment:
    source: "Publication name, date",
    sourceUrl: "https://...", */
    description: "From semantic HTML to CSS Grid and modules: the platform features every web developer should know.",
    keywords: ["web", "html", "css", "javascript", "frontend", "responsive", "grid"],
    intro: "The web platform has matured enormously. Many things that once required libraries are now built into browsers.",
    content: [
      { h: "The core trio", p: ["HTML gives structure, CSS gives presentation and JavaScript gives behaviour. Semantic elements like header, nav, main and article improve accessibility and search visibility."] },
      { h: "Modern CSS", p: ["Flexbox handles one-dimensional layouts and Grid handles two-dimensional ones. Custom properties (variables) make theming, such as dark mode, simple."] },
      { h: "Modern JavaScript", p: ["ES6+ brought let/const, arrow functions, modules, promises and async/await. The Fetch API and localStorage cover most small-app needs without any framework."] }
    ]
  },
  {
    id: 6, title: "How Large Language Models Work", category: "Artificial Intelligence",
    author: "Sofia Alvarez", date: "2026-08-18", readTime: 9, hue: 340, featured: false,
    /* To use a real image, uncomment and add the file:
    image: "assets/images/llm.jpg",
    imageAlt: "Describe the image here",
    imageCredit: "Photo by NAME on Unsplash", */
    /* To credit an original source, uncomment:
    source: "Publication name, date",
    sourceUrl: "https://...", */
    description: "Tokens, embeddings and attention: a plain-English look inside the models behind modern chatbots.",
    keywords: ["llm", "language model", "transformer", "gpt", "tokens", "attention", "chatbot"],
    intro: "A large language model (LLM) is a neural network trained to predict the next piece of text. From that simple goal, surprisingly general abilities emerge.",
    content: [
      { h: "Tokens and embeddings", p: ["Text is split into tokens, small chunks of words. Each token becomes a vector of numbers (an embedding) that captures aspects of its meaning."] },
      { h: "The transformer and attention", p: ["The transformer architecture uses attention to let every token weigh the relevance of every other token in the context. This is how a model links a pronoun back to the right noun."] },
      { h: "Training and limits", p: ["Models are first pre-trained on huge text collections, then fine-tuned to follow instructions. They can state falsehoods fluently, so important claims should always be verified."], ul: ["Pre-training: learn language patterns", "Fine-tuning: learn to be helpful", "Verification: still the human's job"] }
    ]
  }
];

/* main.js: shared logic for all pages (theme, nav, footer, bookmarks, cards, search, forms) 
(() => 
  'use strict';
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ---------- localStorage helpers (always wrapped: storage can be blocked) ---------- */
  const store = {
    get(key, fallback) { try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); } catch { return fallback; } },
    set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore */ } }
  };

  /* ---------- Theme ---------- */
  const preferred = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';


  const applyTheme = () => {
    document.documentElement.dataset.theme = theme;
    const btn = $('#theme-toggle');
    if (btn) { btn.textContent = theme === 'dark' ? '☀️' : '🌙'; btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'); }
  };
  applyTheme();

  /* ---------- Bookmarks ---------- */
  const getBookmarks = () => { const b = store.get('ts-bookmarks', []); return Array.isArray(b) ? b : []; };
  const isBookmarked = (id) => getBookmarks().includes(id);
  const toggleBookmark = (id) => {
    const list = getBookmarks();
    const next = list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
    store.set('ts-bookmarks', next);
  };
  const bookmarkButton = (id) => {
    const on = isBookmarked(id);
    return `<button class="bookmark" type="button" data-bookmark="${id}" aria-pressed="${on}">${on ? '★ Saved' : '☆ Save'}</button>`;
  };

  /* ---------- Article helpers ---------- */
  const thumb = (a) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${a.hue},70%,45%)"/><stop offset="1" stop-color="hsl(${(a.hue + 50) % 360},70%,30%)"/></linearGradient></defs><rect width="640" height="360" fill="url(#g)"/><circle cx="520" cy="80" r="120" fill="#fff" opacity=".1"/><circle cx="90" cy="320" r="90" fill="#fff" opacity=".1"/><text x="40" y="320" font-family="sans-serif" font-size="30" font-weight="700" fill="#fff" opacity=".9">${esc(a.category)}</text></svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  };
  const fmtDate = (iso) => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const articleUrl = (a) => `article.html?id=${a.id}`;
  const altText = (a) => `Illustration for the article ${a.title}`;
  const imgSrc = (a) => a.image || thumb(a);
  const imgAlt = (a) => a.imageAlt || altText(a);

  const cardHTML = (a, { full = true } = {}) => `
    <article class="card">
      <img src="${esc(imgSrc(a))}" alt="${esc(imgAlt(a))}" width="640" height="360" loading="lazy">
      <div class="card-body">
        <span class="tag">${esc(a.category)}</span>
        <h3><a href="${articleUrl(a)}">${esc(a.title)}</a></h3>
        <p>${esc(full ? a.description : a.description)}</p>
        <div class="meta">${full ? esc(a.author) + ' · ' : ''}${fmtDate(a.date)} · ${a.readTime} min read</div>
        ${full ? bookmarkButton(a.id) : ''}
      </div>
    </article>`;

  window.TS = { $, esc, thumb, fmtDate, cardHTML, bookmarkButton, isBookmarked, altText, imgSrc, imgAlt };

  /* ---------- Header & footer (injected so they're written only once) ---------- */
  const page = location.pathname.split('/').pop() || 'index.html';
  const catLink = (c) => `index.html?category=${encodeURIComponent(c)}#latest`;
  const navItems = [
    ['Home', 'index.html'],
    ['Artificial Intelligence', catLink('Artificial Intelligence')],
    ['Programming', catLink('Programming')],
    ['Software Engineering', catLink('Software Engineering')],
    ['About', 'about.html']
  ];
  const header = $('#site-header');
  if (header) {
    header.outerHTML = `
    <header class="site-header">
      <div class="container nav">
        <a class="logo" href="index.html">Tech<span>Web</span></a>
        <ul class="nav-links" id="nav-links">
          ${navItems.map(([label, href]) => `<li><a href="${href}"${href === page ? ' aria-current="page"' : ''}>${label}</a></li>`).join('')}
        </ul>
        <button class="icon-btn" id="search-toggle" type="button" aria-label="Search articles" aria-expanded="false" aria-controls="search-bar">🔍</button>
        <button class="icon-btn" id="theme-toggle" type="button"></button>
        <button class="icon-btn burger" id="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">☰</button>
      </div>
      <div class="search-bar" id="search-bar" hidden>
        <form class="container" id="search-form" role="search">
          <label class="sr" for="search-input">Search articles</label>
          <input id="search-input" type="search" placeholder="Search by title, topic or keyword…" autocomplete="off">
        </form>
      </div>
    </header>`;
  }
  const footer = $('#site-footer');
  if (footer) {
    footer.outerHTML = `
    <footer class="site-footer"><div class="container">
      <div class="footer-grid">
        <div><a class="logo" href="index.html">Tech<span>Web</span></a><p class="muted">A technology blog explaining AI, programming and software engineering in plain language.</p></div>
        <div><h3>Navigate</h3><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li><li><a href="contact.html">Contact</a></li></ul></div>
        <div><h3>Categories</h3><ul>${CATEGORIES.map((c) => `<li><a href="${catLink(c)}">${esc(c)}</a></li>`).join('')}</ul></div>

      </div>
      <p class="copy">© ${new Date().getFullYear()} TechWeb. Demo project.</p>
    </div></footer>`;
  }

  /* ---------- Header interactions ---------- */
  $('#theme-toggle')?.addEventListener('click', () => { theme = theme === 'dark' ? 'light' : 'dark'; store.set('ts-theme', theme); applyTheme(); });
  applyTheme();

  const burger = $('#burger'), links = $('#nav-links');
  burger?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    burger.textContent = open ? '✕' : '☰';
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && links?.classList.contains('open')) burger.click(); });

  const sToggle = $('#search-toggle'), sBar = $('#search-bar'), sInput = $('#search-input');
  sToggle?.addEventListener('click', () => {
    sBar.hidden = !sBar.hidden;
    sToggle.setAttribute('aria-expanded', !sBar.hidden);
    if (!sBar.hidden) sInput.focus();
  });

  /* ---------- Bookmark clicks (event delegation: one listener for all buttons) ---------- */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-bookmark]');
    if (!btn) return;
    toggleBookmark(Number(btn.dataset.bookmark));
    document.dispatchEvent(new CustomEvent('bookmarks-changed'));
    document.querySelectorAll(`[data-bookmark="${btn.dataset.bookmark}"]`).forEach((b) => {
      const on = isBookmarked(Number(b.dataset.bookmark));
      b.setAttribute('aria-pressed', on);
      b.textContent = on ? '★ Saved' : '☆ Save';
    });
  });

  /* ---------- Form helpers ---------- */
  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  const setMsg = (el, text, ok) => { el.textContent = text; el.className = 'form-msg ' + (ok ? 'ok' : 'bad'); };

  /* ---------- Newsletter ---------- */
  const nlForm = $('#newsletter-form');
  nlForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $('#nl-email'), msg = $('#nl-msg');
    const ok = emailOk(input.value.trim());
    input.setAttribute('aria-invalid', !ok);
    ok ? setMsg(msg, 'Thanks! (Demo only: nothing was sent or saved.)', true) : setMsg(msg, 'Please enter a valid email address.', false);
    if (ok) nlForm.reset();
  });

  /* ---------- Contact form ---------- */
  const cForm = $('#contact-form');
  cForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const rules = {
      name: (v) => (v.length < 2 ? 'Please enter your name (at least 2 characters).' : ''),
      email: (v) => (emailOk(v) ? '' : 'Please enter a valid email address.'),
      subject: (v) => (v.length < 3 ? 'Please enter a subject (at least 3 characters).' : ''),
      message: (v) => (v.length < 10 ? 'Your message must be at least 10 characters.' : '')
    };
    let valid = true;
    for (const [field, check] of Object.entries(rules)) {
      const input = cForm.elements[field], err = $(`#${field}-error`);
      const problem = check(input.value.trim());
      err.textContent = problem;
      input.setAttribute('aria-invalid', Boolean(problem));
      input.setAttribute('aria-describedby', `${field}-error`);
      if (problem) valid = false;
    }
    const msg = $('#contact-msg');
    if (valid) { setMsg(msg, 'Form is valid! (Demo only: no message was actually sent.)', true); cForm.reset(); }
    else setMsg(msg, 'Please fix the errors above.', false);
  });

  /* ---------- Homepage ---------- */
  if (!$('#article-grid')) return;
  const params = new URLSearchParams(location.search);
  const state = {
    q: (params.get('q') || '').trim(),
    category: CATEGORIES.includes(params.get('category')) ? params.get('category') : 'All',
    saved: false
  };

  const hero = ARTICLES[0];
  $('#hero-featured').innerHTML = cardHTML(hero, { full: false });
  $('#featured-grid').innerHTML = ARTICLES.filter((a) => a.featured).slice(0, 3).map((a) => cardHTML(a, { full: false })).join('');
  $('#category-grid').innerHTML = CATEGORIES.map((c) => {
    const n = ARTICLES.filter((a) => a.category === c).length;
    return `<a class="cat" href="${catLink(c)}">${esc(c)}<br><span class="muted">${n} article${n === 1 ? '' : 's'}</span></a>`;
  }).join('');

  const filtersEl = $('#filters');
  const chipLabels = ['All', ...CATEGORIES, '★ Saved'];
  filtersEl.innerHTML = chipLabels.map((l) => `<button class="chip" type="button" data-chip="${esc(l)}" aria-pressed="false">${esc(l)}</button>`).join('');

  const matches = (a) => {
    if (state.category !== 'All' && a.category !== state.category) return false;
    if (state.saved && !isBookmarked(a.id)) return false;
    const haystack = [a.title, a.description, a.category, ...a.keywords].join(' ').toLowerCase();
    return state.q.toLowerCase().split(/\s+/).filter(Boolean).every((w) => haystack.includes(w));
  };

  const render = () => {
    const list = ARTICLES.filter(matches);
    $('#article-grid').innerHTML = list.map((a) => cardHTML(a)).join('');
    $('#result-count').textContent = list.length ? `${list.length} article${list.length === 1 ? '' : 's'} found` : 'No articles match. Try another search or category.';
    filtersEl.querySelectorAll('.chip').forEach((c) => {
      const label = c.dataset.chip;
      const active = state.saved ? label === '★ Saved' : label === state.category;
      c.setAttribute('aria-pressed', active);
    });
  };

  filtersEl.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    const label = chip.dataset.chip;
    state.saved = label === '★ Saved';
    state.category = state.saved ? 'All' : label;
    render();
  });
  document.addEventListener('bookmarks-changed', () => { if (state.saved) render(); });

  const onSearch = (value) => { state.q = value.trim(); render(); };
  sInput?.addEventListener('input', () => onSearch(sInput.value));
  $('#search-form')?.addEventListener('submit', (e) => { e.preventDefault(); onSearch(sInput.value); location.hash = 'latest'; });
  if (state.q && sInput) { sInput.value = state.q; sBar.hidden = false; sToggle.setAttribute('aria-expanded', 'true'); }

  render();
})();
/* article.js: renders article.html from ?id=N and drives the reading progress bar */
(() => {
  'use strict';
  const { $, esc, fmtDate, cardHTML, bookmarkButton, imgSrc, imgAlt } = window.TS;
  const root = $('#article');
  if (!root) return;

  const id = Number(new URLSearchParams(location.search).get('id'));
  const a = ARTICLES.find((x) => x.id === id);

  if (!a) {
    document.title = 'Article not found – TechWeb';
    root.innerHTML = '<h1>Article not found</h1><p>The article you are looking for does not exist. <a href="index.html">Return to the homepage</a>.</p>';
    return;
  }

  document.title = `${a.title} – TechWeb`;
  const blocks = a.content.map((b) =>
    `<h2>${esc(b.h)}</h2>` +
    (b.p || []).map((t) => `<p>${esc(t)}</p>`).join('') +
    (b.ul ? `<ul>${b.ul.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>` : '')
  ).join('');

  root.innerHTML = `
    <span class="tag">${esc(a.category)}</span>
    <h1>${esc(a.title)}</h1>
    <p class="muted">By ${esc(a.author)} · ${fmtDate(a.date)} · ${a.readTime} min read</p>
    ${a.sourceUrl && a.sourceUrl.startsWith('https://') ? `<p class="source">Original paper: <a href="${esc(a.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(a.source)}</a></p>` : ''}
    ${bookmarkButton(a.id)}
    <img class="article-hero" src="${esc(imgSrc(a))}" alt="${esc(imgAlt(a))}" width="1200" height="675">
    ${a.imageCredit ? `<p class="source">${esc(a.imageCredit)}</p>` : ''}
    <div class="article-body">
      <p class="article-intro">${esc(a.intro)}</p>
      ${blocks}
    </div>`;

  /* Related: same category first, then fill with others (max 3) */
  const others = ARTICLES.filter((x) => x.id !== a.id);
  const related = [...others.filter((x) => x.category === a.category), ...others.filter((x) => x.category !== a.category)].slice(0, 3);
  $('#related-grid').innerHTML = related.map((x) => cardHTML(x, { full: false })).join('');
  $('#related').hidden = false;

  /* Reading progress: how far through the article element have we scrolled? */
  const bar = $('#progress');
  const update = () => {
    const rect = root.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const pct = total <= 0 ? 100 : Math.min(100, Math.max(0, (-rect.top / total) * 100));
    bar.style.width = pct + '%';
    bar.setAttribute('aria-valuenow', Math.round(pct));
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
