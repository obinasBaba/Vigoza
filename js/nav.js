const navDots = document.body.querySelector('.pagination__nav');

navDots.addEventListener('click', evt => {
    if (!evt.target.classList.contains('dot'))
        return;

    if (evt.target.classList.contains('active'))
        return;

    const activeDot = navDots.querySelector('.dot.active');
    let clickedDot = evt.target;

    Array.from(activeDot.children)
        .forEach((child, index) => {
            if (child.classList.contains('page__no'))
                child.textContent = `0${Array.from(navDots.children).indexOf(clickedDot) + 1}`;

            if(child.classList.contains('page__name'))
                child.lastElementChild.textContent = clickedDot.dataset.name;

            activeDot.removeChild(child);
            clickedDot.appendChild(child);
        })

    clickedDot.classList.add('active');
    activeDot.classList.remove('active');


})