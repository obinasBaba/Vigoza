import '../scss/main.scss';
import 'materialize-css/sass/materialize.scss'


import './initializeComponent.js'
import './sliderNav.js';
import './nav.js';
import './projectPagination.js'
import './intersectionObservers.js'

if (module.hot){
    module.hot.accept( function (){
        console.log('hot')
    })
}