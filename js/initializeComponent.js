let instance = M.Tabs.init(
    document.body.querySelector('ul.tabs'), {
        swipeable: true
    });

let elems = document.querySelectorAll('.materialboxed');
let instances = M.Materialbox.init(elems, {});

let carousel = document.querySelectorAll('.carousel');
let carouselInstances = M.Carousel.init(carousel, {
    fullWidth: true,
    indicators: true,
    noWrap: true,
});

let slider = document.querySelectorAll('.slider');
let sliderInstances = M.Slider.init(slider, {
    // height: '400px',
});




