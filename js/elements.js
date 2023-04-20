var swiper = new Swiper(".mySwiper", {
    spaceBetween: 14,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'vertical',
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 1,
    thumbs: {
      swiper: swiper,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });


//Size-change
document.querySelectorAll('.choice-size-btn').forEach(el => {
  el.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('.choice-size-btn--active')) {
      e.currentTarget.classList.add('choice-size-btn--active');
    }
    else{
      document.querySelectorAll('.choice-size-btn').forEach(el => {
        el.classList.remove('choice-size-btn--active');
      });
      e.currentTarget.classList.add('choice-size-btn--active');
    }
  });
})