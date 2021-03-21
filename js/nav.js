const navDots = document.body.querySelector('.pagination__nav');
let track = navDots.querySelector('.name__track');

const singleNameSize = track.getBoundingClientRect();
const trackHeight = singleNameSize.height;

const trackChildren = Array.from(track.children);
trackChildren.forEach((name, index) => {
    name.style.top = (trackHeight * index) + `px`;
})

const slideTo = (track, current, target) => {
    console.log(target.style.top);
    track.style.transform = "translateY(-" + (target.style.top) + "  )";
    current.classList.remove("current-slide");
    target.classList.add("current-slide");
};



navDots.addEventListener('click', evt => {
    if (!evt.target.classList.contains('dot')) return;

    if (evt.target.classList.contains('active')) return;

    const activeDot = navDots.querySelector('.dot.active');
    let clickedDot = evt.target;

    const activeTrackName =
        trackChildren.find(elems => elems.classList.contains('active_name'))
    const clickedIndex = Array.from(navDots.children).indexOf(clickedDot) ;

    slideTo(track, activeTrackName, trackChildren[clickedIndex]);

 /*   Array.from(activeDot.children)
        .forEach((child, index) => {
            if (child.classList.contains('page__no'))
                child.textContent = `0${clickedIndex + 1}`;

            // if(child.classList.contains('page__name'))
            //     child.lastElementChild.textContent = clickedDot.dataset.name;

            activeDot.removeChild(child);
            clickedDot.appendChild(child);
        })

    clickedDot.classList.add('active');
    activeDot.classList.remove('active');*/



})












