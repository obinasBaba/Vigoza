const navDots = document.body.querySelector('.pagination__nav');
let track = navDots.querySelector('.name__track');

const singleNameSize = track.getBoundingClientRect();
const trackHeight = singleNameSize.height;

let trackChildren = Array.from(track.children);
trackChildren.forEach((name, index) => {
    name.style.top = (trackHeight * index) + `px`;
})

const slideTo = (track, current, target) => {
    track.style.transform = "translateY(-" + (target.style.top) + ")";
};



navDots.addEventListener('click', evt => {
    if (!evt.target.classList.contains('dot')) return;

    if (evt.target.classList.contains('active')) return;

    const activeDot = navDots.querySelector('.dot.active');
    let clickedDot = evt.target;


    activeDot.style.opacity = '0';
    clickedDot.style.opacity = '0'

    const clickedIndex = Array.from(navDots.children).indexOf(clickedDot) ;

    const insertElements = () => {

        Array.from(activeDot.children)
            .forEach((child, index) => {
                if (child.classList.contains('page__no'))
                    child.textContent = `0${clickedIndex + 1}`;

                activeDot.removeChild(child);
                clickedDot.appendChild(child);
            })

        clickedDot.classList.add('active');
        activeDot.classList.remove('active');

        activeDot.style.opacity = '1';
        clickedDot.style.opacity = '1'

        activeDot.removeEventListener('transitionend', insertElements)
    }
    activeDot.addEventListener('transitionend', insertElements )


    const activeTrackName =
        trackChildren.find(elems => elems.classList.contains('active_name'))


   setTimeout(() => {
       slideTo(track, activeTrackName, trackChildren[clickedIndex]);
   }, 0)

})











