const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav__link');
const yearNode = document.getElementById('current-year');

const setActiveNav = () => {
  const currentPage = document.body.dataset.page;
  navLinks.forEach((link) => {
    const matches = link.dataset.page === currentPage;
    link.classList.toggle('is-active', matches);
  });
};

const closeMenu = () => {
  navMenu?.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
};

navToggle?.addEventListener('click', () => {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isExpanded));
  navMenu?.classList.toggle('is-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => closeMenu());
});

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

setActiveNav();
