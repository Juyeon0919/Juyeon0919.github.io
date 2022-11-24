/* main slider */
new Swiper('.main-slider', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  preloadImages: false,
  lazy: true,
  slidesPerView: 1,
  paginationClickable: true,
  spaceBetween: 20,
  pagination: {
    el: '.main-slider .swiper-pagination',
    type: 'bullets',
  },
});

