import Navigation from './src/Navigation';
import Footer from './src/Footer';
import Header from './src/Header';
import Content from './src/Content';
import * as State from './store';
import Navigo from 'Navigo';
import { capitalize } from 'lodash';
import axios from 'axios';

var root = document.querySelector('#root');
var router = new Navigo(location.or);

axios('http://jsonplaceholder.typicode.com/posts').then(console.log);

console.log(router);

function render(state){
    var greeting;
    var input;
    // var links;
    // var i = 0;

    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
    `;

    greeting = document.querySelector('#greeting');
    input = document.querySelector('#header input');
    
    input.addEventListener(
        'keyup',
        (event) => greeting.innerHTML = `
        <div>
            <h3>Welcome to my home page,</h3>
            <h4>${event.target.value}</h4>
        </div>
        `
    );
}

function handleRoute(params){
    var page = capitalize(params.page);

    console.log(params);
    console.log(page);

    render(State[page]);
    router.updatePageLinks();
}
    
router
    .on('/:page', handleRoute)
    .on('/', () => handleRoute({ 'page': 'home' }))
    .resolve();
