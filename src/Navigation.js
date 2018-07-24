import { lowerCase } from 'lodash';
console.log(lowerCase);

function buildLinks(links){
    var result = '';
    var i = 0;
    var href = '/';
    
    while(i < links.length){
        if(links[i] !== 'Home'){
            href += lowerCase(links[i]);
        }
        result += `
        <li>
            <a href="/${(href[i])}" data-navigo>${links[i]}</a>
        </li>
        `;
        i++;
    }

    return result; // a bunch of links
}

export default function Navigation(state){
    return `
    <div id="navigation">
        <ul class="container">
            ${buildLinks(state.links)}
        </ul>
    </div>
    `;
}