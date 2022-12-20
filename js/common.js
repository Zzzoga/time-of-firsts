// Smooth scroll when link clicked
const $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false
});

// Swiper slider compontents
new Swiper('.news__container', {
    navigation: {
        nextEl: '.news__arrow .arrow-next',
        prevEl: '.news__arrow .arrow-prev'
    },
    slidesPerView: 3
});

new Swiper('.steps__overlay', {
    navigation: {
        nextEl: '.steps__slider-main .arrow-next',
        prevEl: '.steps__slider-main .arrow-prev'
    },
    slidesPerView: 1
});

// GSAP Animation items
const tlGen = gsap.timeline({});

tlGen.fromTo('.post-header-bg', {x: '100vw', duration: .4 }, {x: 0, duration: .4 })
  .fromTo('.firsts-text-header', {x: '-100vw', duration: .4 }, {x: 0, duration: .4 })
  .fromTo('.post-header-mini', {x: '100vw', duration: .4 }, {x: 0, duration: .4 })
  .fromTo('.club-text-header', {x: '-100vw', duration: .4 }, {x: 0, duration: .4 })
  .fromTo('.header', {y: '-1000px', duration: .4 }, {y: 0, duration: .4 })
  .fromTo('.down-arrow', {x: '100vw', duration: .4 }, {x: 0, duration: .4 })
  .fromTo('.post-header-bg', {scale: '1.25', duration: 1.5}, 
  { scrollTrigger: {
    trigger: '.post-header',
    start: 'top top', 
    end: 'bottom top', 
    markers: false,
    scrub: true,
  }, scale: '1', duration: 1.5})
  .fromTo('.slider__img', {top: '200px', duration: 1.5}, 
  { scrollTrigger: {
    trigger: '.main-slider',
    start: '-250px center', 
    end: 'center center', 
    markers: false,
    scrub: true,
  }, top: 0, duration: 1.5})
  .fromTo('.main__slider-img ', {top: '80px', duration: 1.5}, 
  { scrollTrigger: {
    trigger: '.main-slider',
    start: '-250px center', 
    end: 'bottom center', 
    markers: false,
    scrub: true,
  }, top: '-80px', duration: 1.5})
  .fromTo('.slider__title', {top: '300px', duration: 1.5}, 
  { scrollTrigger: {
    trigger: '.main-slider',
    start: '-250px center', 
    end: 'center center', 
    markers: false,
    scrub: true,
  }, top: '47px', duration: 1.5})
  .fromTo(['.mask-group-wrapper.one', '.mask-group-wrapper.three'], {top: '600px', duration: 1.5}, 
  { scrollTrigger: {
    trigger: '.content-img',
    start: '-250px center', 
    end: '200px center', 
    markers: false,
    scrub: true,
  }, top: '0px', duration: 1.5})
  .fromTo('.mask-group-wrapper.two', {top: '-50px', duration: 1.5}, 
  { scrollTrigger: {
    trigger: '.content-img',
    start: '-600px center', 
    end: '200px center', 
    markers: false,
    scrub: true,
  }, top: '0px', duration: 1.5})
  .fromTo(['.mask-group.one', '.mask-group.two', '.mask-group.three'], {top: '60px', duration: 1.5}, 
  { scrollTrigger: {
    trigger: '.content-img',
    start: '-250px center', 
    end: 'center center', 
    markers: false,
    scrub: true,
  }, top: '-60px', duration: 1.5})
  .fromTo('.eclipse', {opacity: 0, duration: 1.5}, 
  { scrollTrigger: {
    trigger: '.content-img',
    start: '-250px center', 
    end: 'center center', 
    markers: false,
    scrub: true,
  }, opacity: 1, duration: 1.5})
  .fromTo('.partners__list', {bottom: '-600px', duration: 1.5}, 
  { scrollTrigger: {
    trigger: '.partners',
    start: '-400px center', 
    end: 'top center', 
    markers: false,
    scrub: true,
  }, bottom: 0, duration: 1.5})
  .fromTo('.partners__title', {bottom: '-80px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.partners',
    start: '-400px center', 
    end: '-250px 150px', 
    markers: false,
    scrub: true,
  }, bottom: 0, duration: 1})
  .fromTo('.ds_bg', {top: '-1000px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.description',
    start: 'top center', 
    end: '+=600px center', 
    markers: false,
    scrub: true,
  }, top: 0, duration: 1})
  .fromTo('.layout', {top: '-1000px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.partners',
    start: 'top bottom', 
    end: '+=1000px center', 
    markers: false,
    scrub: true,
  }, top: 0, duration: 1})
  .fromTo('.i__img img', {top: '-200px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.i__img',
    start: 'top bottom', 
    end: '1900px center', 
    markers: false,
    scrub: true,
  }, top: '200px', duration: 1})
  .fromTo('.map_contur', {opacity: 0, transform: 'translateX(-50%)', top: '300px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.map',
    start: '600px bottom', 
    end: '600px center', 
    markers: false,
    scrub: true,
  }, opacity: 1, transform: 'translateX(-50%)', top: 0, duration: 1})
  .fromTo('.map_icons', {opacity: 0, left: '243px', top: '327px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.map',
    start: '1500px bottom', 
    end: '=+500px top', 
    markers: false,
    scrub: true,
  }, opacity: 1, left: '243px', top: '227px', duration: 1})
  .fromTo('.map_logo', {opacity: 0, left: '720px', top: '565px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.map',
    start: '2000px bottom', 
    end: '=+500px top', 
    markers: false,
    scrub: true,
  }, opacity: 1, left: '720px', top: '465px', duration: 1})
  .fromTo('.map__text', {opacity: 0, left: '300px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.map',
    start: '2500px bottom', 
    end: '3200px bottom', 
    markers: true,
    scrub: true,
  }, opacity: 1, left: '0', duration: 1})
  .fromTo('.map__footer-title', {opacity: 0, left: '-300px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.map',
    start: '2500px bottom', 
    end: '3200px bottom', 
    markers: true,
    scrub: true,
  }, opacity: 1, left: '0', duration: 1})
  .fromTo('.gallery__item:nth-child(1)', {top: '600px', left: '367px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.gallery',
    start: 'top bottom', 
    end: 'center center', 
    markers: false,
    scrub: true,
  }, top: '354px', left: '367px', duration: 1})
  .fromTo('.gallery__item:nth-child(2)', {top: '104px', right: '382px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.gallery',
    start: 'top bottom', 
    end: 'center center', 
    markers: false,
    scrub: true,
  }, top: '204px', right: '182px', duration: 1})
  .fromTo('.gallery__item:nth-child(3)', {top: '853px', right: '282px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.gallery',
    start: 'top bottom', 
    end: 'center center', 
    markers: false,
    scrub: true,
  }, top: '753px', right: '73px', duration: 1})
  .fromTo('.gallery__item:nth-child(4)', {top: '661px', right: '395px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.gallery',
    start: 'top bottom', 
    end: 'center center', 
    markers: false,
    scrub: true,
  }, top: '861px', right: '495px', duration: 1})
  .fromTo('.gallery__item:nth-child(5)', {top: '239px', left: '-200px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.gallery',
    start: 'top bottom', 
    end: 'center center', 
    markers: false,
    scrub: true,
  }, top: '139px', left: '0', duration: 1})
  .fromTo('.gallery__item:nth-child(6)', {top: '1085px', left: '195px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.gallery',
    start: 'top bottom', 
    end: 'center center', 
    markers: false,
    scrub: true,
  }, top: '925px', left: '295px', duration: 1})
  .fromTo('.gallery__text-value', {bottom: '-160px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.gallery',
    start: 'center bottom', 
    end: 'center center', 
    markers: false,
    scrub: true,
  }, bottom: 0, duration: 1})
  .fromTo('.gallery__btn-value', {bottom: '-60px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.gallery',
    start: 'center bottom', 
    end: 'center center', 
    markers: false,
    scrub: true,
  }, bottom: 0, duration: 1})
  .fromTo('.steps__title', {bottom: '-70px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.steps',
    start: 'top bottom', 
    end: 'center bottom', 
    markers: false,
    scrub: true,
  }, bottom: 0, duration: 1})
  .fromTo('.steps__wrapper', {bottom: '-820px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.steps',
    start: 'top bottom', 
    end: 'center bottom', 
    markers: false,
    scrub: true,
  }, bottom: '0', duration: 1})
  .fromTo('.news__title', {bottom: '-80px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.news',
    start: 'top bottom', 
    end: 'center bottom', 
    markers: false,
    scrub: true,
  }, bottom: '0', duration: 1})
  .fromTo('.news__nav', {bottom: '-70px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.news',
    start: 'top bottom', 
    end: 'center bottom', 
    markers: false,
    scrub: true,
  }, bottom: '0', duration: 1})
  .fromTo('.news__items', {right: '-500px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.news',
    start: 'top bottom', 
    end: 'center 800px', 
    markers: false,
    scrub: true,
  }, right: '0', duration: 1})
  .fromTo('.call__title', {bottom: '-100px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.call',
    start: 'top center', 
    end: '+=400px center',
    markers: false,
    scrub: true,
  }, bottom: '0', duration: 1})
  .fromTo('.call__form', {top: '300px', duration: 1}, 
  { scrollTrigger: {
    trigger: '.call',
    start: 'top center', 
    end: '+=400px center',
    markers: false,
    scrub: true,
  }, top: '0', duration: 1})
  .fromTo('.right__spiral img', {rotate: '90deg', opacity: 0, duration: 3}, 
  { scrollTrigger: {
    trigger: '.call',
    start: 'top center', 
    end: '+=400px 300px',
    markers: false,
    scrub: true,
  }, rotate: '0deg', opacity: 1, duration: 3})
  .fromTo('.left__spiral img', {rotate: '-90deg', opacity: 0, duration: 3}, 
  { scrollTrigger: {
    trigger: '.call',
    start: 'top center', 
    end: '+=500px 100px',
    markers: false,
    scrub: true,
  }, rotate: '0deg', opacity: 1, duration: 3})
  .fromTo('.call-img', {top: '95px', duration: 3}, 
  { scrollTrigger: {
    trigger: '.call',
    start: 'top center', 
    end: 'bottom top',
    markers: false,
    scrub: true,
  }, top: '-95px', duration: 3})
  .fromTo('.footer', {top: '-900px', duration: 3}, 
  { scrollTrigger: {
    trigger: '.footer',
    start: '800px bottom', 
    end: '1600px bottom',
    markers: false,
    scrub: true,
  }, top: '0', duration: 3})
  


// Блок с видео. Переход из эллипса в прямогульный формат блока
$(".sticky__wrapper").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".sticky__content");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top top",
      end: "bottom bottom",
      scrub: 1
    }
  });
  tl.fromTo(
    targetElement,
    {
      width: "74vw",
      height: "46vw",
      borderRadius: "46vw",
      duration: .5
    },
    {
      width: "100vw",
      height: "100vh",
      borderRadius: "0vw",
      duration: .5
    }
  )
  .fromTo(
    '.sticky__btn',
    {
      top: '45px',
      duration: .5
    },
    {
      top: 0,
      duration: .5
    }
  );
});




