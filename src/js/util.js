import {navDots} from "./elments.js";


const track = navDots.querySelector('.name__track');
let trackChildren = stackTrack(track);

function stackTrack(track){
    //the height of single active-page-name
    const singleNameSize = track.getBoundingClientRect();
    const trackHeight = singleNameSize.height;

    let trackChildren = Array.from(track.children);
    trackChildren.forEach((name, index) => {
        //stacking each active-page-name one after the other
        // the overflow hidden property will hide them
        name.style.top = (trackHeight * index) + `px`;
    })

    return trackChildren;
}


//function to slide(transform) them on click
function slideTo (track, current, target) {
    track.style.transform = "translateY(-" + (target.style.top) + ")";
}

export function scrollToClickedSection(clickedDot) {
    if (!clickedDot.dataset.name)
        return;

    window.intersect = false;


    new Promise(((resolve, reject) => {
        let link = document.createElement('a',);
        link.href = `#${clickedDot.dataset.name}`
        document.body.append(link);
        link.click();
        resolve(link);
    })).then(v => {
        document.body.removeChild(v);
        window.intersect = true;

    })
}


export function insert(activeDot, clickedDot, scroll){

    const clickedIndex = Array.from(navDots.children).indexOf(clickedDot) ;

    //the transition will start here
    activeDot.style.opacity = '0';
    clickedDot.style.opacity = '0';

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

        // scrolling to the clicked section
        //dynamically adding a 'anchor' and removing it after...
        scroll && scrollToClickedSection(clickedDot);


        //return to the initial visibility
        activeDot.style.opacity = '1';
        clickedDot.style.opacity = '1';

        //we have to remove the callback for the next time so that it keep the cycle
        activeDot.removeEventListener('transitionend', insertElements);

    }


    //add the callback after the transition end;
    activeDot.addEventListener('transitionend', insertElements )


    //run the slide animation after everything run (async)
    // for the transition effect to tack place
    setTimeout(() => {
        const activeTrackName =
            trackChildren.find(el => el.classList.contains('active_name'))
        slideTo(track, activeTrackName, trackChildren[clickedIndex]);
    }, 0)
}

