function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}


function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

if (getCookie('loading') !== 'done') {
  const firstPreloader = document.querySelector('.preloader-item.first')
  const secondPreloader = document.querySelector('.preloader-item.second')
  const textPreloader = document.querySelector('.preloader-text')
  const imgsPreloader = document.querySelector('.preloader-imgs')
  const wrapperPreloader = document.querySelector('.preloader__wrapper')
  const leftPreloader = document.querySelector('.preloader__left')
  const rightPreloader = document.querySelector('.preloader__right')
  const preloader = document.querySelector('.preloader')

  preloader.style.display = 'flex'

  const tlPl = gsap.timeline({});

  setTimeout( () => {
    preloader.style.display = 'flex'
  }, 0)
  setTimeout( () => {
      document.querySelector('body').style.overflowY = 'hidden'
  }, 0)
  setTimeout( () => {
  tlPl.fromTo(imgsPreloader, 
      {display: 'none', duration: 1}, 
      {display: 'flex', duration: 1})
      .fromTo(imgsPreloader, 
      {width: '0', duration: 1}, 
      {width: '117px', duration: 1}).
      fromTo(firstPreloader, 
      {width: '117px', duration: 1}, 
      {width: 0, duration: 1})
      .fromTo(secondPreloader, 
      {width: '117px', duration: 1}, 
      {width: 0, duration: 1})
      .fromTo(textPreloader, 
      {display: 'none', width: '0', duration: 1}, 
      {display: 'flex', width: '282px', duration: 1})
  }, 0)
  setTimeout( () => {
      preloader.style.transform = 'translateY(-100%)'
  }, 6000)
  setTimeout( () => {
      preloader.style.display = 'none'
      document.querySelector('body').style.overflowY = 'auto'
  }, 9000)
}

document.addEventListener("DOMContentLoaded", () => {

// PHONE MASK

maskPhone('input#phone')

// SHOW/HIDE MENU FUNCTION  
document.querySelector('.header .burger-btn').addEventListener('click', () => {
  document.querySelector('.menu__container').style.display = 'flex'
  setTimeout( () => {
      document.querySelector('.menu__container').style.transform = 'translateY(0vh)'
  }, 500)
}) 

document.querySelector('.burger-btn.menu-burger').addEventListener('click', () => {
  document.querySelector('.menu__container').style.transform = 'translateY(-100vh)'
  setTimeout( () => {
      document.querySelector('.menu__container').style.display = 'none'
  }, 500)
}) 

$('a[href*="#"]').click(function() {
  if (document.querySelector('#steps') !== null) {
    document.querySelector('.menu__container').style.transform = 'translateY(-100vh)'
    setTimeout( () => {
        document.querySelector('.menu__container').style.display = 'none'
    }, 500)
  }
});

// Smooth scroll when link clicked
const $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

// functions on click
document.querySelectorAll('.n__item-link').forEach(element => {
    element.addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.news__popup-container').style.display = 'flex'
      setTimeout(() => {
        document.querySelector('.news__popup-container').style.opacity = '1'
      }, 500);
      
    })
  })
  
  if (document.querySelector('.news__popup-container') !== null) {
    document.querySelector('.news__popup-close').addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.news__popup-container').style.opacity = '0'
      setTimeout(() => {
        document.querySelector('.news__popup-container').style.display = 'none'
      }, 500);
    })
    
    document.querySelector('.news__popup-overlay').addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.news__popup-container').style.opacity = '0'
      setTimeout(() => {
        document.querySelector('.news__popup-container').style.display = 'none'
      }, 500);
    })
  }

  if (document.querySelector('.cat__close') !== null) {
    document.querySelector('.cat__close').addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.cat__nav').style.transform = 'translateX(-100%)'
      setTimeout(() => {
        document.querySelector('.cat__nav').style.display = 'none'
      }, 500);
    })
    
    document.querySelector('.category__mobile').addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.cat__nav').style.display = 'flex'
      setTimeout(() => {
        document.querySelector('.cat__nav').style.transform = 'translateX(0%)'
      }, 500);
    })
  }

  if (document.querySelector('.call__overlay') !== null) {
    document.querySelector('.call__close').addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.call__overlay').style.opacity = '0'
      setTimeout(() => {
        document.querySelector('.call__overlay').style.display = 'none'
      }, 500);
    })

    document.querySelector('.call__mask').addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.call__overlay').style.opacity = '0'
      setTimeout(() => {
        document.querySelector('.call__overlay').style.display = 'none'
      }, 500);
    })
    
    document.querySelector('header .call-btn').addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.call__overlay').style.display = 'flex'
      setTimeout(() => {
        document.querySelector('.call__overlay').style.opacity = '1'
      }, 500);
    })

    document.querySelector('.menu__container .call-btn').addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.call__overlay').style.display = 'flex'
      setTimeout(() => {
        document.querySelector('.call__overlay').style.opacity = '1'
      }, 500);
    })

    document.querySelectorAll('.cat__list-element.price').forEach(el => {
      el.addEventListener('click', (target)=> {
        target.preventDefault()
        document.querySelector('.call__overlay').style.display = 'flex'
        setTimeout(() => {
          document.querySelector('.call__overlay').style.opacity = '1'
        }, 500);
      })
    })
  }

  if (document.querySelector('.floor-plan') !== null) {

    function floorPlan(num) {
      document.querySelector(`.fp__text-item.${num}`).addEventListener('mouseover', (target)=> {
        target.preventDefault()
        document.querySelectorAll(`.fp__text-item`).forEach(el => {
          el.classList.remove('active')
        })
        document.querySelector(`.fp__text-item.${num}`).classList.add('active')
        document.querySelectorAll(`.floor__img`).forEach(el => {
          el.style.opacity = 0
        })
        document.querySelector(`.${num}.floor__img`).style.opacity = '1'
      })

      document.querySelector(`.fp__text-item.${num}`).addEventListener('mouseout', (target)=> {
        target.preventDefault()
        document.querySelectorAll(`.fp__text-item`).forEach(el => {
          el.classList.remove('active')
        })
      })
    }

    floorPlan('first')
    floorPlan('second')
    floorPlan('third')

  }

  if (document.querySelector('.ns-nav') !== null) {

    const newsItems = document.querySelectorAll('.n__item-link')

    document.querySelectorAll('.ns-nav-item').forEach(el => {
      el.addEventListener('click', () => {
        if (document.querySelector('.ns-nav-item.active') !== null) {
          document.querySelector('.ns-nav-item.active').classList.remove('active')
        }
        el.classList.add('active')
      })
    })

    document.querySelector('.new__nav').addEventListener('click', () => { 
      newsItems.forEach(el => {
        el.style.display = 'block'
      })
      for (let i = 0; i < 12; i += 3) {
        newsItems[i].style.display = 'none'
      }
    })

    document.querySelector('.sale__nav').addEventListener('click', () => {
      newsItems.forEach(el => {
        el.style.display = 'block'
      })
      for (let i = 0; i < 12; i += 2) {
        newsItems[i].style.display = 'none'
      }
    })

    document.querySelector('.all__nav').addEventListener('click', () => { 
      newsItems.forEach(el => {
        el.style.display = 'block'
      })
    })

  }
  
// SLICK SLIDER functions

$('.partners__list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
});

$('.img__list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  prevArrow: '.prev-arrow',
  nextArrow: '.next-arrow'
});

$('.steps__wrap').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.steps__main .arrow-prev',
  nextArrow: '.steps__main .arrow-next'
});

$('.news__items').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '.news .arrow-prev',
  nextArrow: '.news .arrow-next'
});

$('.about-slider__img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.a-s__text-block',
  prevArrow: '.arrow-prev-black',
  nextArrow: '.arrow-next-black'
});
$('.a-s__text-block').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.about-slider__img',
  prevArrow: '.arrow-prev-black',
  nextArrow: '.arrow-next-black'
});

$('.big-gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.sg__container',
});
$('.sg__container').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  fade: true,
  asNavFor: '.big-gallery',
  prevArrow: '.sg__prev',
  nextArrow: '.sg__next'
});

// GALLERY COUNT
if (document.querySelector('.small-gallery') !== null) {

const listLength = document.querySelectorAll('ul.slick-dots li').length
const currentCount = document.querySelector('.count__num')
const allCount = document.querySelector('.count__all')

document.querySelector('.small-gallery .slick-dots').style.display = 'none'

allCount.innerHTML = `${listLength}`

document.querySelector('.sg__prev').addEventListener('click', e => {
    document.querySelector('.count__num').innerHTML = document.querySelector('ul.slick-dots li.slick-active').textContent
  })

  document.querySelector('.sg__next').addEventListener('click', e => {
    document.querySelector('.count__num').innerHTML = document.querySelector('ul.slick-dots li.slick-active').textContent
  })
}
// GSAP Animation items
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false
});

const tlGen = gsap.timeline({});

if (document.documentElement.clientWidth > 1440) { 
tlGen.fromTo('.map_contur', {opacity: 0, top: '300px', ease: "none", ease: "none", duration: 1}, 
  { scrollTrigger: {
    trigger: '.map',
    start: '600px bottom', 
    end: '600px center', 
    markers: false,
    scrub: true,
  }, opacity: 1, top: 0, ease: "none", ease: "none", duration: 1})
  .fromTo('.map_icons', {opacity: 0, left: '243px', top: '327px', ease: "none", ease: "none", duration: 1}, 
  { scrollTrigger: {
    trigger: '.map',
    start: '1500px bottom', 
    end: '=+500px top', 
    markers: false,
    scrub: true,
  }, opacity: 1, left: '243px', top: '195px', ease: "none", ease: "none", ease: "none", duration: 1})
  .fromTo('.map_logo', {opacity: 0, left: '720px', top: '565px', ease: "none", ease: "none", ease: "none", duration: 1}, 
  { scrollTrigger: {
    trigger: '.map',
    start: '2000px bottom', 
    end: '=+500px top', 
    markers: false,
    scrub: true,
  }, opacity: 1, left: '720px', top: '435px', ease: "none", ease: "none", ease: "none", duration: 1})
}


// if (document.documentElement.clientWidth > 1800) { 

//   tlGen.fromTo('.map_contur', {opacity: 0, top: '300px', ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.map',
//     start: '600px bottom', 
//     end: '600px center', 
//     markers: false,
//     scrub: true,
//   }, opacity: 1, top: 0, ease: "none", ease: "none", duration: 1})
//   .fromTo('.map_icons', {opacity: 0, left: '243px', top: '327px', ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.map',
//     start: '1500px bottom', 
//     end: '=+500px top', 
//     markers: false,
//     scrub: true,
//   }, opacity: 1, left: '243px', top: '195px', ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.map_logo', {opacity: 0, left: '720px', top: '565px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.map',
//     start: '2000px bottom', 
//     end: '=+500px top', 
//     markers: false,
//     scrub: true,
//   }, opacity: 1, left: '720px', top: '435px', ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.map__text', {opacity: 0, left: '300px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.map',
//     start: '2500px bottom', 
//     end: '3200px bottom', 
//     markers: false,
//     scrub: true,
//   }, opacity: 1, left: '0', ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.map__footer-title', {opacity: 0, left: '-300px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.map',
//     start: '2500px bottom', 
//     end: '3200px bottom', 
//     markers: false,
//     scrub: true,
//   }, opacity: 1, left: '0', ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.gallery__item:nth-child(1)', {top: '600px', left: '367px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.gallery',
//     start: 'top bottom', 
//     end: 'center center', 
//     markers: false,
//     scrub: true,
//   }, top: '354px', left: '367px', ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.gallery__item:nth-child(2)', {top: '104px', right: '382px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.gallery',
//     start: 'top bottom', 
//     end: 'center center', 
//     markers: false,
//     scrub: true,
//   }, top: '204px', right: '182px', ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.gallery__item:nth-child(3)', {top: '853px', right: '282px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.gallery',
//     start: 'top bottom', 
//     end: 'center center', 
//     markers: false,
//     scrub: true,
//   }, top: '753px', right: '73px', ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.gallery__item:nth-child(4)', {top: '661px', right: '395px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.gallery',
//     start: 'top bottom', 
//     end: 'center center', 
//     markers: false,
//     scrub: true,
//   }, top: '861px', right: '495px', ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.gallery__item:nth-child(5)', {top: '239px', left: '-200px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.gallery',
//     start: 'top bottom', 
//     end: 'center center', 
//     markers: false,
//     scrub: true,
//   }, top: '139px', left: '0', ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.gallery__item:nth-child(6)', {top: '1085px', left: '195px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.gallery',
//     start: 'top bottom', 
//     end: 'center center', 
//     markers: false,
//     scrub: true,
//   }, top: '925px', left: '295px', ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.footer', {top: '-750px', ease: "none", ease: "none", ease: "none", duration: 3}, 
//   { scrollTrigger: {
//     trigger: '.footer',
//     start: '800px bottom', 
//     end: '1600px bottom',
//     markers: false,
//     scrub: true,
//   }, top: '0', ease: "none", ease: "none", duration: 3})

// }

// if (document.documentElement.clientWidth > 1279) {


// tlGen
// // .fromTo('.post-header-bg', {scale: '1.25', ease: "none", ease: "none", duration: 1.5}, 
// //   { scrollTrigger: {
// //     trigger: '.post-header',
// //     start: 'top top', 
// //     end: 'bottom top', 
// //     markers: false,
// //     scrub: true,
// //   }, scale: '1', ease: "none", ease: "none", duration: 1.5})
//   // .fromTo('.slider__img', {top: '200px', ease: "none", ease: "none", duration: 1.5}, 
//   // { scrollTrigger: {
//   //   trigger: '.main-slider',
//   //   start: '-250px center', 
//   //   end: 'center center', 
//   //   markers: false,
//   //   scrub: true,
//   // }, top: 0, ease: "none", ease: "none", duration: 1.5})
//   .fromTo('.main__slider-img ', {top: '80px', ease: "none", ease: "none", duration: 1.5}, 
//   { scrollTrigger: {
//     trigger: '.main-slider',
//     start: '-250px center', 
//     end: 'bottom center', 
//     markers: false,
//     scrub: true,
//   }, top: '-80px', ease: "none", ease: "none", duration: 1.5})
//   .fromTo('.slider__title', {top: '300px', ease: "none", ease: "none", duration: 1.5}, 
//   { scrollTrigger: {
//     trigger: '.main-slider',
//     start: '-250px center', 
//     end: 'center center', 
//     markers: false,
//     scrub: true,
//   }, top: '47px', ease: "none", ease: "none", duration: 1.5})
//   .fromTo(['.mask-group-wrapper.one', '.mask-group-wrapper.three'], {top: '600px', ease: "none", ease: "none", duration: 1.5}, 
//   { scrollTrigger: {
//     trigger: '.content-img',
//     start: '-250px center', 
//     end: '200px center', 
//     markers: false,
//     scrub: true,
//   }, top: '0px', ease: "none", ease: "none", duration: 1.5})
//   .fromTo('.mask-group-wrapper.two', {top: '-50px', ease: "none", ease: "none", duration: 1.5}, 
//   { scrollTrigger: {
//     trigger: '.content-img',
//     start: '-600px center', 
//     end: '200px center', 
//     markers: false,
//     scrub: true,
//   }, top: '0px', ease: "none", ease: "none", duration: 1.5})
//   .fromTo(['.mask-group.one', '.mask-group.two', '.mask-group.three'], {top: '60px', ease: "none", ease: "none", duration: 1.5}, 
//   { scrollTrigger: {
//     trigger: '.content-img',
//     start: '-250px center', 
//     end: 'center center', 
//     markers: false,
//     scrub: true,
//   }, top: '-60px', ease: "none", ease: "none", duration: 1.5})
//   .fromTo('.eclipse', {opacity: 0, ease: "none", ease: "none", duration: 1.5}, 
//   { scrollTrigger: {
//     trigger: '.content-img',
//     start: '-250px center', 
//     end: 'center center', 
//     markers: false,
//     scrub: true,
//   }, opacity: 1, ease: "none", ease: "none", duration: 1.5})
//   .fromTo('.partners__list', {bottom: '-600px', ease: "none", ease: "none", duration: 1.5}, 
//   { scrollTrigger: {
//     trigger: '.partners',
//     start: '-400px center', 
//     end: 'top center', 
//     markers: false,
//     scrub: true,
//   }, bottom: 0, ease: "none", ease: "none", duration: 1.5})
//   .fromTo('.partners__title', {bottom: '-80px', ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.partners',
//     start: '-400px center', 
//     end: '-250px 150px', 
//     markers: false,
//     scrub: true,
//   }, bottom: 0, ease: "none", ease: "none", duration: 1})
//   .fromTo('.ds_bg', {top: '-1000px', ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.description',
//     start: 'top center', 
//     end: '+=600px center', 
//     markers: false,
//     scrub: true,
//   }, top: 0, ease: "none", ease: "none", duration: 1})
//   .fromTo('.layout', {top: '-1000px', ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.partners',
//     start: 'top bottom', 
//     end: '+=1000px center', 
//     markers: false,
//     scrub: true,
//   }, top: 0, ease: "none", ease: "none", duration: 1})
//   .fromTo('.i__img img', {top: '-200px', ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.i__img',
//     start: 'top bottom', 
//     end: '1900px center', 
//     markers: false,
//     scrub: true,
//   }, top: '200px', ease: "none", ease: "none", duration: 1})
//   .fromTo('.gallery__text-value', {bottom: '-160px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.gallery',
//     start: 'center bottom', 
//     end: 'center center', 
//     markers: false,
//     scrub: true,
//   }, bottom: 0, ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.gallery__btn-value', {bottom: '-60px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.gallery',
//     start: 'center bottom', 
//     end: 'center center', 
//     markers: false,
//     scrub: true,
//   }, bottom: 0, ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.steps__title', {bottom: '-70px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.steps',
//     start: 'top bottom', 
//     end: 'center bottom', 
//     markers: false,
//     scrub: true,
//   }, bottom: 0, ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.steps__wrapper', {bottom: '-820px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.steps',
//     start: 'top bottom', 
//     end: 'center bottom', 
//     markers: false,
//     scrub: true,
//   }, bottom: '0', ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.news__title', {bottom: '-80px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.news',
//     start: 'top bottom', 
//     end: 'center bottom', 
//     markers: false,
//     scrub: true,
//   }, bottom: '0', ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.news__nav', {bottom: '-70px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.news',
//     start: 'top bottom', 
//     end: 'center bottom', 
//     markers: false,
//     scrub: true,
//   }, bottom: '0', ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.news__items', {right: '-500px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.news',
//     start: 'top bottom', 
//     end: 'center 800px', 
//     markers: false,
//     scrub: true,
//   }, right: '0', ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.call__title', {bottom: '-100px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.call',
//     start: 'top center', 
//     end: '+=400px center',
//     markers: false,
//     scrub: true,
//   }, bottom: '0', ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.call__form', {top: '300px', ease: "none", ease: "none", ease: "none", duration: 1}, 
//   { scrollTrigger: {
//     trigger: '.call',
//     start: 'top center', 
//     end: '+=400px center',
//     markers: false,
//     scrub: true,
//   }, top: '0', ease: "none", ease: "none", ease: "none", duration: 1})
//   .fromTo('.right__spiral img', {rotate: '90deg', opacity: 0, ease: "none", ease: "none", ease: "none", duration: 3}, 
//   { scrollTrigger: {
//     trigger: '.call',
//     start: 'top center', 
//     end: '+=400px 300px',
//     markers: false,
//     scrub: true,
//   }, rotate: '0deg', opacity: 1, ease: "none", ease: "none", ease: "none", duration: 3})
//   .fromTo('.left__spiral img', {rotate: '-90deg', opacity: 0, ease: "none", ease: "none", ease: "none", duration: 3}, 
//   { scrollTrigger: {
//     trigger: '.call',
//     start: 'top center', 
//     end: '+=500px 100px',
//     markers: false,
//     scrub: true,
//   }, rotate: '0deg', opacity: 1, ease: "none", ease: "none", ease: "none", duration: 3})
//   .fromTo('.call-img', {top: '95px', ease: "none", ease: "none", ease: "none", duration: 3}, 
//   { scrollTrigger: {
//     trigger: '.call',
//     start: 'top center', 
//     end: 'bottom top',
//     markers: false,
//     scrub: true,
//   }, top: '-95px', ease: "none", ease: "none", ease: "none", duration: 3})
//   .fromTo('.footer', {top: '-750px', ease: "none", ease: "none", ease: "none", duration: 3}, 
//   { scrollTrigger: {
//     trigger: '.footer',
//     start: '500px bottom', 
//     end: '1300px bottom',
//     markers: false,
//     scrub: true,
//   }, top: '0', ease: "none", ease: "none", duration: 3})

// // GSAP on About page 
// const tlAbout = gsap.timeline({});

// tlAbout.fromTo('.header__info-title', 
// {top: '310px', duration: 3},
// {scrollTrigger: {
//   trigger: '.header__info',
//   start: 'center bottom', 
//   end: 'center center',
//   markers: false,
//   scrub: true,
// }, top: '260px', duration: 3})
// .fromTo('.header__info-img', 
// {top: '0', duration: 3},
// {scrollTrigger: {
//   trigger: '.header__info',
//   start: 'center bottom', 
//   end: 'center center',
//   markers: false,
//   scrub: true,
// }, top: '-120px', duration: 3})
// .fromTo('.header__info-img img', 
// {top: '50px', duration: 3},
// {scrollTrigger: {
//   trigger: '.header__info',
//   start: 'center bottom', 
//   end: 'center center',
//   markers: false,
//   scrub: true,
// }, top: '-50px', duration: 3})
// .fromTo('.premain-bg', 
// {top: '0', duration: 3},
// {scrollTrigger: {
//   trigger: '.header__info',
//   start: 'center bottom', 
//   end: 'center center',
//   markers: false,
//   scrub: true,
// }, top: '-120px', duration: 3})
// .fromTo('.premain__title', 
// {top: '0', duration: 3},
// {scrollTrigger: {
//   trigger: '.premain.about-cat',
//   start: 'top bottom', 
//   end: '+=400px center',
//   markers: false,
//   scrub: true,
// }, top: '-240px', duration: 3})
// .fromTo('.p__t-top', 
// {top: '600px', duration: 3},
// {scrollTrigger: {
//   trigger: '.premain.about-cat',
//   start: 'top bottom', 
//   end: 'center center',
//   markers: false,
//   scrub: true,
// }, top: '340px', duration: 3})
// .fromTo('.premain__slider-img', 
// {right: '-200px', duration: 3},
// {scrollTrigger: {
//   trigger: '.premain.about-cat',
//   start: 'center bottom', 
//   end: 'bottom bottom',
//   markers: false,
//   scrub: true,
// }, right: '0px', duration: 3})
// .fromTo('.premain__slider-info', 
// {left: '-200px', opacity: 0, duration: 3},
// {scrollTrigger: {
//   trigger: '.premain.about-cat',
//   start: 'center bottom', 
//   end: 'bottom bottom',
//   markers: false,
//   scrub: true,
// }, left: '0px', opacity: 1, duration: 3})
// .fromTo('.floor-plan img', 
// {top: '45px', duration: 3},
// {scrollTrigger: {
//   trigger: '.floor-plan',
//   start: 'top bottom', 
//   end: 'bottom center',
//   markers: false,
//   scrub: true,
// }, top: '-45px', duration: 3})
  
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
      ease: "none", ease: "none", duration: .5
    },
    {
      width: "100vw",
      height: "100vh",
      borderRadius: "0vw",
      ease: "none", ease: "none", duration: .5
    }
  )

})


setCookie('loading', 'done')

});


