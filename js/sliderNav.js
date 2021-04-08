

const hamburger = document.body.querySelector('.nav__bar .humberger');
const nav_slider = document.body.querySelector('.slider__nav__wrapper');

    // Full Screen Navigation
(() => {
    hamburger.addEventListener('click', e => {
        e.preventDefault();
        nav_slider.classList.add('show');
    })

    nav_slider.addEventListener('click', e => {
        if (e.target === nav_slider || e.target.classList.contains('close-btn')) {
            nav_slider.classList.remove('show');
        }
    })
})()