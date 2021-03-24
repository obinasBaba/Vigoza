let instance = M.Tabs.init(
    document.body.querySelector('ul.tabs'), {
        swipeable: true
    });

let elems = document.querySelectorAll('.materialboxed');
let instances = M.Materialbox.init(elems, {}, true, false, 'photototo');

// let img = document.body.querySelector('.pro_img_one .materialboxed')
// M.Materialbox.init(img, {}, true, false, 'caption')


let carousel = document.querySelectorAll('.carousel');
let carouselInstances = M.Carousel.init(carousel, {
    fullWidth: true,
    indicators: true,
    // noWrap: true,
});

let serviceSlider = document.querySelector('.service .slider');
let serviceSliderInstances = M.Slider.init(serviceSlider, {
    // height: '400px',
});





