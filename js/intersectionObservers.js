import {insert} from "./util.js";
import {navDots} from "./elments.js";


let options = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: [.55] // number of times the callback execute
};

let callback = (el, ib) => {

    console.log(el[0].target)

    if (el[0].isIntersecting) {
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