/* ==========================================================
   PORTFÓLIO — Relação: Princípios e Valores
   Script compartilhado
   ========================================================== */

// ── TEMA CLARO / ESCURO ────────────────────────────────────
const THEME_KEY = 'portfolio-theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

document.querySelectorAll('.theme-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });
});

// Reveal de seções no scroll
const io = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  }),
  { threshold: 0.07, rootMargin: '0px 0px -50px 0px' }
);
document.querySelectorAll('.topic').forEach(t => io.observe(t));

// Link ativo na nav com base na seção visível
const ioNav = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;
      // Suporte a links absolutos (#id) e relativos (../unidade-1/)
      const isMatch =
        href === '#' + e.target.id ||
        (href.includes('unidade') && e.target.id?.includes('unidade'));
      a.classList.toggle('active', isMatch);
    });
  }),
  { rootMargin: '-40% 0px -50% 0px' }
);
document.querySelectorAll('[id]').forEach(s => ioNav.observe(s));

// ── DROPDOWN DE NAVEGAÇÃO ──────────────────────────────────
document.querySelectorAll('.nav-dropdown').forEach(function (dd) {
  var toggle = dd.querySelector('.nav-dropdown-toggle');

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    var opening = !dd.classList.contains('open');
    document.querySelectorAll('.nav-dropdown.open').forEach(function (other) {
      other.classList.remove('open');
      other.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
    });
    if (opening) {
      dd.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
});

document.addEventListener('click', function () {
  document.querySelectorAll('.nav-dropdown.open').forEach(function (dd) {
    dd.classList.remove('open');
    dd.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.nav-dropdown.open').forEach(function (dd) {
      dd.classList.remove('open');
      dd.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
    });
  }
});

// Pausar animações SMIL se o usuário preferir movimento reduzido
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('animateTransform, animate').forEach(a => {
    a.setAttribute('begin', 'indefinite');
  });
}
