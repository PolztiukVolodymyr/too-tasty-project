var swiper = new Swiper('.mySwiper', {
        spaceBetween: 30,
        slidesPerView: 1,
        speed: 1000,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });