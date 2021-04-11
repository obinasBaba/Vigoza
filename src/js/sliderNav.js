import {nav} from "./elments";
import {scrollToClickedSection} from "./util";


// const hamburger = document.body.querySelector('.nav__bar .humberger');
const nav_slider = document.body.querySelector('.slider__nav__wrapper');

// Full Screen Navigation

nav.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.classList.contains('humberger'))
        nav_slider.classList.add('show');
})

nav_slider.addEventListener('click', e => {
    if (e.target === nav_slider || e.target.classList.contains('close-btn') ) {
        nav_slider.classList.remove('show');
    }

    if (e.target.tagName === 'H1'){
        scrollToClickedSection(e.target);
        nav_slider.classList.remove('show');
    }
})


//full screen nav show and hide on scroll
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;


    if (prevScrollPos > currentScrollPos) {
        nav.style.transitionDelay = '0ms';
        nav.style.top = "0";
    } else {

        nav.style.transitionDelay = '500ms'
        nav.style.top = "-50px";
    }
    prevScrollPos = currentScrollPos;
}

