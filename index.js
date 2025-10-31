
new Swiper(".card-wrapper", {
        slidesPerView: 4,
      navigation: {
        nextEl: ".card-next",
        prevEl: ".card-prev",
      },

      breakpoints: {
        0: { slidesPerView: 1 },
        520: { slidesPerView: 2 },
        950: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      },
    });
 

 
new Swiper(".testimonial-wrapper", {
  spaceBetween: 13,
        slidesPerView: 4,
      navigation: {
        nextEl: ".testimonial-next",
        
      },

      breakpoints: {
        0: { slidesPerView: 1 },
        520: { slidesPerView: 2 },
        950: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      },
    });