(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileMenuHome = document.querySelector('#home-link');
  const mobileMenuAbout = document.querySelector('#about-link');
  const mobileMenuHow = document.querySelector('#How-link');
  const mobileMenuProducts = document.querySelector('#products-link');
  const mobileMenuContacts = document.querySelector('#contacts-link');
  const mobileMenubtn = document.querySelector('#modal-btn');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    headerMenuIcon.classList.toggle('is-hidden');
    headerBuyButton.classList.toggle('is-hidden');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  mobileMenuHome.addEventListener('click', toggleMenu);
  mobileMenuHow.addEventListener('click', toggleMenu);
  mobileMenuAbout.addEventListener('click', toggleMenu);
  mobileMenuProducts.addEventListener('click', toggleMenu);
  mobileMenuContacts.addEventListener('click', toggleMenu);
  mobileMenubtn.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 320px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
// modal //
document.addEventListener('DOMContentLoaded', function () {
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal"]').addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click', function () {
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
  });
});

// modal-form//

(() => {
  document.querySelector('.js-speaker-form').addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) => console.log('${name}: ${value}'));
  });
})();
