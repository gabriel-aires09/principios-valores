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

// ── SIDEBAR ────────────────────────────────────────────────
const SIDEBAR_KEY = 'portfolio-sidebar';

function setSidebarState(state) {
  document.documentElement.setAttribute('data-sidebar-state', state);
  localStorage.setItem(SIDEBAR_KEY, state);
}

// Sync with what the anti-flash script already set
var savedSidebar = localStorage.getItem(SIDEBAR_KEY) || 'expanded';
document.documentElement.setAttribute('data-sidebar-state', savedSidebar);

// Hamburger toggle — collapses/expands on desktop, opens overlay on mobile
var sidebarToggle = document.getElementById('sidebarToggle');
var sidebar        = document.getElementById('sidebar');
var sidebarOverlay = document.getElementById('sidebarOverlay');

function openMobileSidebar() {
  if (!sidebar) return;
  sidebar.classList.add('mobile-open');
  if (sidebarOverlay) sidebarOverlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeMobileSidebar() {
  if (!sidebar) return;
  sidebar.classList.remove('mobile-open');
  if (sidebarOverlay) sidebarOverlay.classList.remove('visible');
  document.body.style.overflow = '';
}

if (sidebarToggle) {
  sidebarToggle.addEventListener('click', function () {
    if (window.innerWidth <= 740) {
      openMobileSidebar();
    } else {
      var current = document.documentElement.getAttribute('data-sidebar-state');
      setSidebarState(current === 'collapsed' ? 'expanded' : 'collapsed');
    }
  });
}

// Sidebar group toggle (open/close submenu in expanded mode)
document.querySelectorAll('.sidebar-group-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var group = btn.closest('.sidebar-group');
    if (document.documentElement.getAttribute('data-sidebar-state') === 'collapsed') {
      setSidebarState('expanded');
    }
    var isOpen = group.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen.toString());
  });
});

// Tooltip for collapsed sidebar items
var sidebarTooltip = document.createElement('div');
sidebarTooltip.className = 'sidebar-tooltip';
sidebarTooltip.setAttribute('role', 'tooltip');
document.body.appendChild(sidebarTooltip);

function sidebarTooltipLabel(item) {
  var textEl = item.querySelector('.sidebar-text');
  return (textEl ? textEl.textContent : item.getAttribute('title') || item.getAttribute('aria-label') || '').trim();
}

function canShowSidebarTooltip() {
  return window.innerWidth > 740 && document.documentElement.getAttribute('data-sidebar-state') === 'collapsed';
}

function showSidebarTooltip(item) {
  if (!canShowSidebarTooltip()) return;

  var label = sidebarTooltipLabel(item);
  if (!label) return;

  var rect = item.getBoundingClientRect();
  sidebarTooltip.textContent = label;
  sidebarTooltip.style.top = (rect.top + rect.height / 2) + 'px';
  sidebarTooltip.classList.add('visible');
}

function hideSidebarTooltip() {
  sidebarTooltip.classList.remove('visible');
}

document.querySelectorAll('.sidebar-link, .sidebar-group-toggle').forEach(function (item) {
  item.addEventListener('mouseenter', function () { showSidebarTooltip(item); });
  item.addEventListener('focus', function () { showSidebarTooltip(item); });
  item.addEventListener('mouseleave', hideSidebarTooltip);
  item.addEventListener('blur', hideSidebarTooltip);
});

window.addEventListener('resize', hideSidebarTooltip);
document.addEventListener('scroll', hideSidebarTooltip, true);

if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeMobileSidebar);

document.addEventListener('click', function (e) {
  if (!sidebar || !sidebar.classList.contains('mobile-open')) return;
  if (window.innerWidth > 740) return;
  if (sidebar.contains(e.target) || (sidebarToggle && sidebarToggle.contains(e.target))) return;

  closeMobileSidebar();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeMobileSidebar();
});

// ── REVEAL NO SCROLL ───────────────────────────────────────
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
