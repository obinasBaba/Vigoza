import {insert} from "./util.js";

const navDots = document.body.querySelector('.pagination__nav');
const track = navDots.querySelector('.name__track');

//the height of single active-page-name
const singleNameSize = track.getBoundingClientRect();
const trackHeight = singleNameSize.height;

let trackChildren = Array.from(track.children);
trackChildren.forEach((name, index) => {
    //stacking each active-page-name one after the other
    // the overflow hidden property will hide them
    name.style.top = (trackHeight * index) + `px`;
})




const dotsClickEvent = evt => {
    if (!evt.target.classList.contains('dot')) return;

    if (evt.target.classList.contains('active')) return;

    const activeDot = navDots.querySelector('.dot.active');
    const clickedDot = evt.target;

    insert(activeDot, clickedDot, true)

}

navDots.addEventListener('click', dotsClickEvent)


//full screen nav show and hide on scroll
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    const nav = document.getElementById('nav__bar');

    if (prevScrollPos > currentScrollPos) {
        nav.style.transitionDelay = '0ms';
        nav.style.top = "0";
    } else {

        nav.style.transitionDelay = '500ms'
        nav.style.top = "-50px";
    }
    prevScrollPos = currentScrollPos;
}












