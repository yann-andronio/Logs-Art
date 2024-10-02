  /*=============== SWIPER JS  ===============*/
  let swiperCards = new Swiper(".first-swiper", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    //   dynamicBullets: true,
    // },

    navigation: {
      nextEl: ".section3 .section3-next",
      prevEl: ".section3 .section3-prev",
  },
    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
      1120: {
        slidesPerView: 4,
      },
    },
  });





