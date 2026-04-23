/* ========================================
   VISION CONSTRUCTIONS — MAIN JS
   ======================================== */

// ── Nav scroll effect ──────────────────────
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile menu toggle ─────────────────────
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const setMenuOpen = (open) => {
  toggle?.classList.toggle('active', open);
  navLinks?.classList.toggle('open', open);
  document.body.classList.toggle('nav-open', open);
};
toggle?.addEventListener('click', () => {
  setMenuOpen(!navLinks?.classList.contains('open'));
});
// Close on link click
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false));
});

// ── Active nav link ────────────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── Scroll reveal ──────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Stat counters ──────────────────────────
const counters = document.querySelectorAll('[data-count]');
counters.forEach(el => {
  const span = el.querySelector('.v2-count');
  if (span) span.textContent = '0';
});
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const span = el.querySelector('.v2-count');
    if (!span) return;
    const target = parseInt(el.dataset.count, 10) || 0;
    const duration = 2200;
    const start = performance.now();
    const ease = t => 1 - Math.pow(1 - t, 4);
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      span.textContent = Math.round(target * ease(t));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countObserver.unobserve(el);
  });
}, { threshold: 0.3, rootMargin: '0px 0px 100px 0px' });
counters.forEach(el => countObserver.observe(el));

// ── Form handler (contact + apply) — posts to Formspree via AJAX ──
function wireForm(form, sendingLabel, successLabel, errorLabel) {
  if (!form) return;
  const btn = form.querySelector('.v2-form-submit, .form-submit');
  if (!btn) return;
  const originalLabel = btn.textContent;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.textContent = sendingLabel;
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) throw new Error('bad response');
      btn.textContent = successLabel;
      form.reset();
    } catch (err) {
      btn.textContent = errorLabel;
    }
    setTimeout(() => {
      btn.textContent = originalLabel;
      btn.disabled = false;
    }, 3500);
  });
}

wireForm(document.getElementById('contactForm'), 'Sending…', 'Message Sent!', 'Failed — try again');
wireForm(document.getElementById('applyForm'), 'Submitting…', 'Application Received!', 'Failed — try again');

// ── Capability Statement — manual prev/next page turn ──
const capFlip = document.querySelector('.cap-flip');
if (capFlip) {
  const pages = Array.from(capFlip.querySelectorAll('img'));
  pages.forEach((img, i) => { img.style.zIndex = pages.length - i; });
  const wrap = capFlip.closest('.cap-flip-wrap');
  const prevBtn = wrap?.querySelector('.cap-flip-prev');
  const nextBtn = wrap?.querySelector('.cap-flip-next');
  const currentEl = wrap?.querySelector('.cap-flip-current');
  let idx = 0; // number of pages currently flipped (0..pages.length-1)
  let busy = false;

  const update = () => {
    if (currentEl) currentEl.textContent = idx + 1;
  };

  const resetToStart = () => {
    busy = true;
    pages.forEach(img => {
      img.classList.add('flipping');
      img.classList.remove('flipped');
    });
    setTimeout(() => {
      pages.forEach(img => img.classList.remove('flipping'));
      busy = false;
    }, 650);
    idx = 0;
    update();
  };

  const flipNext = () => {
    if (busy) return;
    if (idx >= pages.length - 1) { resetToStart(); return; }
    busy = true;
    const page = pages[idx];
    page.classList.add('flipping');
    requestAnimationFrame(() => page.classList.add('flipped'));
    setTimeout(() => { page.classList.remove('flipping'); busy = false; }, 650);
    idx++;
    update();
  };

  const flipPrev = () => {
    if (busy) return;
    if (idx === 0) {
      // jump to the end: flip all pages forward
      busy = true;
      pages.slice(0, pages.length - 1).forEach(img => {
        img.classList.add('flipping');
        img.classList.add('flipped');
      });
      setTimeout(() => {
        pages.forEach(img => img.classList.remove('flipping'));
        busy = false;
      }, 650);
      idx = pages.length - 1;
      update();
      return;
    }
    busy = true;
    idx--;
    const page = pages[idx];
    page.classList.add('flipping');
    requestAnimationFrame(() => page.classList.remove('flipped'));
    setTimeout(() => { page.classList.remove('flipping'); busy = false; }, 650);
    update();
  };

  nextBtn?.addEventListener('click', flipNext);
  prevBtn?.addEventListener('click', flipPrev);
  capFlip.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); flipNext(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); flipPrev(); }
  });

  update();
}

