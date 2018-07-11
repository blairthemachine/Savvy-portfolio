import Navigation from './src/Navigation';
import Footer from './src/Footer';
import Header from './src/Header';
import Content from './src/Content';

var Home = {
    'title': 'Eric Humphrey\'s project'
};

var Resume = {
    'title': 'RESUME'
};

var Projects = {
    'title': 'PROJECT'
};

var Contact = {
    'title': 'CONTACT'
};
var root = document.querySelector('#root');


function render(state){
    var greeting;
    var input;
    var links;

    root.innerHTML = `
    ${Navigation()}
    ${Header(state)}
    ${Content()}
    ${Footer()}
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

    links =
    document.querySelectorAll('#navigation a');

    links[0].addEventListener(
        'click',
        (event) => {
            event.preventDefault();

            render(Home);
        }
    );


    links[1].addEventListener(
        'click',
        (event) => {
            event.preventDefault();

            render(Resume);
        }
    );
    links[2].addEventListener(
        'click',
        (event) => {
            event.preventDefault();
            
            render(Projects);
        }
    );

    links[3].addEventListener(
        'click',
        (event) => {
            event.preventDefault();

            render(Contact);
        }
    );
    console.log('first link clicked!');
}

render(Home);
