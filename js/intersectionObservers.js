import {insert} from "./util.js";

const paginationNav = document.body.querySelector('.pagination__nav');
let options = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: [.55] // number of times the callback execute
};

let callback = (el, ib) => {

    if (el[0].isIntersecting) {
        let active = Array.from(paginationNav.children)
                          .find(e => e.classList.contains('active'))
        let clicked = Array.from(paginationNav.children)
            .find(e => e.dataset.name === el[0].target.id)

        if (active === clicked)
            return;

        insert(active, clicked)
    }



}

const Observer = new IntersectionObserver(callback, options);


let targets = document.body.querySelectorAll('section');


targets.forEach(target => Observer.observe(target));