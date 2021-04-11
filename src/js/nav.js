import {insert} from "./util.js";
import {navDots, nav} from "./elments.js";


const dotsClickEvent = evt => {
    if (!evt.target.classList.contains('dot')) return;

    if (evt.target.classList.contains('active')) return;

    const activeDot = navDots.querySelector('.dot.active');
    const clickedDot = evt.target;

    insert(activeDot, clickedDot, true)

}

navDots.addEventListener('click', dotsClickEvent)












