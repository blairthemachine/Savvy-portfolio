// export default function Navigation(){
//     return `
//     <div id="navigation">
//         <ul>
//                 <li> <a href="/">Home</a>
//                 </li>
//             <li>
//                 <a href="/blog">Resume</a>
//             </li>
//             <li>
//                 <a href="/projects">Projects</a>
//                 <ul>
//                     <li>First</li>
//                     <li>Second</li>
//                     <li>Third</li>
//                     <li>Fourth</li>
//                 </ul>
//                 <li>
//                     <a href="/Contact/">Contact</a>
//                 </li>
//             </li>
//         </ul>
//     </div>

// `;
// }
import { lowerCase } from 'lodash';
console.log(lowerCase);

function buildLinks(links){
    var result = '';
    var i = 0;
    
    while(i < links.length){
        result += `
        <li>
            <a href="/${lowerCase(links[i])}">${links[i]}</a>
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