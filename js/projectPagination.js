const projectDots = document.body.querySelector('.project_dots');
const indicators = document.body.querySelector('.portfolio .indicators');
const projectList = document.body.querySelector('.more__project');

projectDots.addEventListener('click', evt => {
    //toggle the selected class

    if (evt.target.classList.contains('selected') || evt.target.tagName !== 'SPAN') return;
    let target = evt.target;

    projectDots.querySelector('.selected')
        .classList.remove('selected');

    target.classList.add('selected');

    let index = Array.from(projectDots.children).indexOf(target);
    if (indicators.children.length < index) return;

    indicators.querySelector('.active').classList.remove('active');
    indicators.children[index].classList.add('active')
    indicators.children[index].click();

})


projectList.addEventListener('click', evt => {

    if (evt.target.classList.contains('selected') ||
        evt.target.tagName !== 'P') return;

    projectList.querySelector('.selected')
        .classList.remove('selected');

    evt.target.classList.add('selected');
})