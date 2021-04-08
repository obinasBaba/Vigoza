const paginationNav = document.body.querySelector('.pagination__nav');

let options = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: [.6] // number of times the callback execute
};
let callback = (e, ib) => {

    e.forEach(ee => {

        if (ee.isIntersecting) {

            let t = ee.target.id;
            // console.log(ee.target.className, ' - true ')

            switch (t) {
                case 'welcome': {
                    console.log('welcome');
                    let ac = paginationNav.querySelector('.active')

                    ac.classList.remove('active-black');

                    console.log('class list', ac.classList)
                }
                    break;
                case 'about': {
                    console.log('about');
                    let ac = paginationNav.querySelector('.active');
                    ac.classList.remove('active-black');

                    console.log('class list', ac.classList)

                }
                    break;
                case 'service': {
                    console.log('service');

                }
                    break;
                case 'portfolio': {
                    console.log('portfolio');

                }
                    break;
                case 'blog': {
                    console.log('blog');

                }
                    break;
                case 'contact': {
                    console.log('contact');

                }
                    break;

                default:
                    console.log('default', t)
            }


            console.log(paginationNav)

        }

    })
}
let observer = new IntersectionObserver(callback, options);
let targets = document.body.querySelectorAll('section');

targets.forEach(target => observer.observe(target));