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
toggle?.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navLinks?.classList.toggle('open');
});
// Close on link click
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle?.classList.remove('active');
    navLinks.classList.remove('open');
  });
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

// ── Contact form ───────────────────────────
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('.form-submit');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Message Sent!';
    contactForm.reset();
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
    }, 3000);
  }, 1200);
});

// ── Application form ───────────────────────
const applyForm = document.getElementById('applyForm');
applyForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = applyForm.querySelector('.form-submit');
  btn.textContent = 'Submitting…';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Application Received!';
    applyForm.reset();
    setTimeout(() => {
      btn.textContent = 'Submit Application';
      btn.disabled = false;
    }, 3000);
  }, 1200);
});
