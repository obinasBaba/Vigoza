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

//function to slide(transform) them on click
const slideTo = (track, current, target) => {
    track.style.transform = "translateY(-" + (target.style.top) + ")";
};



navDots.addEventListener('click', evt => {
    if (!evt.target.classList.contains('dot')) return;

    if (evt.target.classList.contains('active')) return;

    const activeDot = navDots.querySelector('.dot.active');
    const clickedDot = evt.target;
    const clickedIndex = Array.from(navDots.children).indexOf(clickedDot) ;

    //the transition will start here
    activeDot.style.opacity = '0';
    clickedDot.style.opacity = '0'

    //function to run after the above(opacity) transition end;
    const insertElements = () => {
        //remove and add from the previous active to newly active child
        Array.from(activeDot.children)
            .forEach((child, index) => {
                if (child.classList.contains('page__no'))
                    child.textContent = `0${clickedIndex + 1}`;

                activeDot.removeChild(child);
                clickedDot.appendChild(child);
            })

        clickedDot.classList.add('active');
        activeDot.classList.remove('active');

        //return to the initial visibility
        activeDot.style.opacity = '1';
        clickedDot.style.opacity = '1'

        //we have to remove the callback for the next time so that it keep the cycle
        activeDot.removeEventListener('transitionend', insertElements)
    }

    //add the callback after the transition end;
    activeDot.addEventListener('transitionend', insertElements )


    //run the slide animation after everything run (async)
    // for the transition effect to tack place
   setTimeout(() => {
       const activeTrackName =
           trackChildren.find(elems => elems.classList.contains('active_name'))
       slideTo(track, activeTrackName, trackChildren[clickedIndex]);
   }, 0)

})


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












