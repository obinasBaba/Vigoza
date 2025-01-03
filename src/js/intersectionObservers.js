import {insert} from "./util.js";
import {navDots, nav} from "./elments.js";


let options = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: [1, .55] // number of times the callback execute
};

let callback = (el, ib) => {


    if (el[0].isIntersecting  ) {
        if (el[0].intersectionRatio > .9 && el[0].target.id === 'welcome')
            nav.style.background = 'transparent'
        else
            nav.style.backgroundColor = 'rgba(0,0,0, .1)'

        let active = Array.from(navDots.children)
                          .find(e => e.classList.contains('active'))
        let clicked = Array.from(navDots.children)
            .find(e => e.dataset.name === el[0].target.id)

        if (active === clicked)
            return;

        insert(active, clicked)
    }



}

const Observer = new IntersectionObserver(callback, options);


let targets = document.body.querySelectorAll('section');


targets.forEach(target => Observer.observe(target));