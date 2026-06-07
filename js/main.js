/* =========================================
   Congo Tech Progress — JavaScript principal
   ========================================= */

'use strict';

/* ---- Navbar : toggle mobile + scroll + page active ---- */
(function initNavbar() {
  const toggle = document.querySelector('.navbar-toggle');
  const menu   = document.querySelector('.navbar-menu');
  const navbar = document.querySelector('.navbar');

  // Hamburger
  toggle?.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });

  // Fermer au clic sur un lien
  menu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Fermer au clic en dehors
  document.addEventListener('click', e => {
    if (menu?.classList.contains('open') && !menu.contains(e.target) && !toggle.contains(e.target)) {
      toggle.classList.remove('active');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Ombre au scroll
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Lien actif selon la page courante
  const page = location.pathname.split('/').pop() || 'index.html';
  menu?.querySelectorAll('a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (!page && href === 'index.html') || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ---- Scroll-to-top ---- */
(function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ---- Animations au scroll (IntersectionObserver) ---- */
(function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
  if (!els.length || !window.IntersectionObserver) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
})();

/* ---- Compteurs animés ---- */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length || !window.IntersectionObserver) return;

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function animateCounter(el) {
    const target   = parseInt(el.dataset.count, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 2200; // ms
    const start    = performance.now();

    function update(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value    = Math.floor(easeOut(progress) * target);
      el.textContent = value.toLocaleString('fr-FR') + suffix;
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target.toLocaleString('fr-FR') + suffix;
    }
    requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
})();

/* ---- Filtre actualités ---- */
(function initNewsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.news-card[data-category]');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;

      cards.forEach(card => {
        const show = cat === 'all' || card.dataset.category === cat;
        card.style.display = show ? '' : 'none';
        if (show) {
          card.style.animation = 'none';
          card.offsetHeight; // reflow
          card.style.animation = 'fadeIn 0.4s ease';
        }
      });
    });
  });
})();

/* ---- Formulaire d'adhésion ---- */
(function initAdhesionForm() {
  const form = document.getElementById('adhesion-form');
  if (!form) return;

  const typeSelect = document.getElementById('type-membre');
  const orgGroup   = document.getElementById('org-group');

  typeSelect?.addEventListener('change', () => {
    const show = typeSelect.value === 'morale';
    orgGroup?.classList.toggle('hidden', !show);
    const orgInput = orgGroup?.querySelector('input');
    if (orgInput) {
      show ? orgInput.setAttribute('required', '') : orgInput.removeAttribute('required');
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateForm(form)) {
      const wrapper = document.getElementById('adhesion-form-wrapper');
      (wrapper || form).style.display = 'none';
      const successMsg = document.getElementById('form-success');
      if (successMsg) {
        successMsg.classList.add('show');
        window.scrollTo({ top: successMsg.offsetTop - 120, behavior: 'smooth' });
      }
    }
  });
})();

/* ---- Formulaire de contact ---- */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateForm(form)) {
      form.style.display = 'none';
      document.getElementById('contact-success')?.classList.add('show');
    }
  });
})();

/* ---- Utilitaire de validation ---- */
function validateForm(form) {
  let valid = true;

  // Réinitialiser
  form.querySelectorAll('.form-control').forEach(f => f.classList.remove('error', 'success'));
  form.querySelectorAll('.err-msg').forEach(m => m.classList.remove('show'));

  // Valider les champs requis
  form.querySelectorAll('[required]').forEach(field => {
    if (field.type === 'checkbox') {
      const errEl = field.closest('.form-group')?.querySelector('.err-msg');
      if (!field.checked) {
        if (errEl) errEl.classList.add('show');
        valid = false;
      }
      return;
    }

    const val   = field.value.trim();
    const group = field.closest('.form-group');
    const errEl = group?.querySelector('.err-msg');

    if (!val) {
      field.classList.add('error');
      if (errEl) { errEl.textContent = 'Ce champ est requis.'; errEl.classList.add('show'); }
      valid = false;
      return;
    }

    if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      field.classList.add('error');
      if (errEl) { errEl.textContent = 'Adresse e-mail invalide.'; errEl.classList.add('show'); }
      valid = false;
      return;
    }

    if (field.type === 'tel' && !/^[\d\s\+\-\(\)]{6,}$/.test(val)) {
      field.classList.add('error');
      if (errEl) { errEl.textContent = 'Numéro de téléphone invalide.'; errEl.classList.add('show'); }
      valid = false;
      return;
    }

    field.classList.add('success');
  });

  return valid;
}

/* ---- Animation keyframe pour le filtre ---- */
const style = document.createElement('style');
style.textContent = `@keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }`;
document.head.appendChild(style);
