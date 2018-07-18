import Navigation from './src/Navigation';
import Footer from './src/Footer';
import Header from './src/Header';
import Content from './src/Content';
var State = {
    'Home': {
        'links': [ 'Resume', 'Contact', 'Projects' ],
        'title': 'Eric Humphrey\'s project'
    },
    'Resume': {
        'links': [ 'Projects', 'Contact', 'Home' ],
        'title': ' RESUME'
    },
    'Projects': {
        'links': [ 'Resume', 'Contact', 'Home' ],
        'title': 'PROJECTS'
    },
    'Contact': {
        'links': [ 'Projects', 'Resume', 'Home' ],
        'title': 'CONTACTS'
    },

};

var root = document.querySelector('#root');

function render(state){
    var greeting;
    var input;
    var links;
    var i = 0;

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

    links = document.querySelectorAll('#navigation a');

    while(i < links.length){
        links[i].addEventListener(
            'click',
            (event) => {
                var page = event.target.textContent;

                event.preventDefault();
    
                console.log('page', page);
    
                render(State[page]);
            }
        );

        i++;
    }
}

render(State['Home']);
