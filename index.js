import Navigation from './src/Navigation';
import Footer from './src/Footer';
import Header from './src/Header';
import Content from './src/Content';

function greetUser(){
    var greeting = document.querySelector('#greeting');
    var firstName = prompt('What is your first name?');
    var lastName = prompt('what is your last name?');

    if(firstName && lastName){
        greeting.innerHTML = `
        <div>
            <h3>Welcome to my world,</h3>
            <h4>${firstName} ${lastName}</h4>
        </div>`;
    }
    else{
        greetUser();
    }
}

// greetUser();

var initialHTML = document.body.innerHTML;


document
    .body
    .innerHTML = `
    ${Navigation()}
    ${Header()}
    ${Content()}
    ${Footer()}
    ${initialHTML}
    `;
greetUser();