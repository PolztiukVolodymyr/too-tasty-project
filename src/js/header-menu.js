// document.addEventListener('DOMContentLoaded', function () {
//   var modalButtons = document.querySelectorAll('.js-open-modal'),
//     overlay = document.querySelector('#overlay-modal'),
//     closeButtons = document.querySelector('.js-close-modal');

//   modalButtons.forEach(function (item) {
//     item.addEventListener('click', function (e) {
//       e.preventDefault();
//       var modalId = this.getAttribute('data-modal'),
//         modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

//       modalElem.classList.add('is-show');
//       overlay.classList.add('is-show');
//     });
//   });
// });
// /////////////////////////////////////////////////////////
// $('.js-open-modal').click(function (event) {
//   event.preventDefault();
//   var modalName = $(this).attr('data-modal');
//   var modal = $('.js-modal[data-modal="' + modalName + '"]');
//   modal.addClass('is-show');
//   $('.js-modal-overlay').addClass('.is-show');
// });
// $('.js-close-modal').click(function () {
//   $(this).parent('.js-modal').removeClass('is-show');
//   $('.js-modal-overlay').removeClass('.is-show');
// });
// $('.js-modal-overlay').click(function () {
//   $('.js-modal').removeClass('.is-show');
//   $(this).removeClass('.is-show');
// });

// var LinkArraw = document.querySelectorAll('.js-open-modal');
// overlay = document.querySelectorAll('.js-modal-overlay');
// crossArray = document.querySelectorAll('.js-close-modal');
// LinkArraw.forEach(function (item) {
//   item.addEventListener('click', function (event) {
//     event.preventDefault();
//     var modalName = this.getAttribute('data-modal');
//     var modal = document.querySelector('.js-modal[data-modal="' + modalName + '"]');
//     modal.classList.add('is-show');
//     overlay.classList.add('.is-show');
//   });
// });
// crossArray.forEach(function (item) {
//   cross.addEventListener('click', function (event) {
//     var parent = this.parentNode;
//     parent.classList.remove('.is-show');
//     overlay.classList.remove('.is-show');
//   });
// });
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const overlayMenu = document.querySelector('.overlay-menu');
  const mobileMenuHome = document.querySelector('#home');
  const mobileMenuAbout = document.querySelector('#about');
  const mobileMenuCustomers = document.querySelector('#customer');
  const mobileMenuProducts = document.querySelector('#products');
  const mobileMenuContacts = document.querySelector('#contacts');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  overlayMenu.addEventListener('click', toggleMenu);
  mobileMenuHome.addEventListener('click', toggleMenu);
  mobileMenuCustomers.addEventListener('click', toggleMenu);
  mobileMenuAbout.addEventListener('click', toggleMenu);
  mobileMenuProducts.addEventListener('click', toggleMenu);
  mobileMenuContacts.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
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
