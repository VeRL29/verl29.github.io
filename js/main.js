/**
 * main.js — Delien Technologies PNG
 * Handles: page navigation, hero slider, media tabs, contact form
 */

// ── PAGE NAVIGATION ───────────────────────────────────────────────
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const pageEl = document.getElementById('page-' + page);
  const navEl  = document.getElementById('nav-' + page);
  if (pageEl) pageEl.classList.add('active');
  if (navEl)  navEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // close mobile menu
  document.getElementById('mobile-menu').classList.remove('open');
}

// ── MOBILE MENU ───────────────────────────────────────────────────
function toggleMobile() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// ── HERO IMAGE ROTATOR ────────────────────────────────────────────
const slides = document.querySelectorAll('.hero-slide');
const dots   = document.querySelectorAll('.hero-dot');
let current  = 0;
let timer;

function goSlide(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = n;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
  clearInterval(timer);
  timer = setInterval(nextSlide, 5000);
}

function nextSlide() {
  goSlide((current + 1) % slides.length);
}

// Auto-start slider
if (slides.length) {
  timer = setInterval(nextSlide, 5000);
}

// ── MEDIA TABS ────────────────────────────────────────────────────
function openTab(name, btn) {
  document.querySelectorAll('.mpanel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.mtab').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  if (panel) panel.classList.add('active');
  btn.classList.add('active');
}

// ── CONTACT FORM ──────────────────────────────────────────────────
function submitContact(e) {
  e.preventDefault();
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  const btn     = document.getElementById('submit-btn');

  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Simulate send (replace with real fetch to your backend or Formspree)
  setTimeout(() => {
    form.reset();
    btn.textContent = 'Send Message';
    btn.disabled = false;
    if (success) {
      success.style.display = 'block';
      setTimeout(() => success.style.display = 'none', 5000);
    }
  }, 1000);
}

// ── PREVENT DEFAULT ON NAV LINKS ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    a.addEventListener('click', e => e.preventDefault());
  });

  const form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', submitContact);
});
