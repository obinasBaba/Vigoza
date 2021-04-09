import { Carousel, Slider, Materialbox } from 'materialize-css'

let elems = document.querySelectorAll('.materialboxed');
let instances = Materialbox.init(elems, {}, true, false, 'photototo');

// let img = document.body.querySelector('.pro_img_one .materialboxed')
// M.Materialbox.init(img, {}, true, false, 'caption')


let carousel = document.querySelectorAll('.carousel');
let carouselInstances = Carousel.init(carousel, {
    fullWidth: true,
    indicators: true,
    // noWrap: true,
});

let serviceSlider = document.querySelector('.service .slider');
let serviceSliderInstances = Slider.init(serviceSlider, {
    // height: '400px',
});





