const firstPreloader = document.querySelector('.preloader-item.first')
const secondPreloader = document.querySelector('.preloader-item.second')
const textPreloader = document.querySelector('.preloader-text')
const imgsPreloader = document.querySelector('.preloader-imgs')
const wrapperPreloader = document.querySelector('.preloader__wrapper')
const leftPreloader = document.querySelector('.preloader__left')
const rightPreloader = document.querySelector('.preloader__right')
const preloader = document.querySelector('.preloader')

const tlPl = gsap.timeline({});


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
    {width: '0', duration: 1}, 
    {width: '282px', duration: 1})
    .fromTo(wrapperPreloader, 
    {opacity: '1', duration: 1}, 
    {opacity: '0', duration: 1})
}, 0)
setTimeout( () => {
    leftPreloader.style.transform = 'translate(-100%, -100%)'
    rightPreloader.style.transform = 'translate(100%, 100%)'
}, 5000)
setTimeout( () => {
    preloader.style.display = 'none'
}, 7000)
    