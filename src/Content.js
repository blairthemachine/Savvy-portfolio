import * as Pages from './Pages';
import Eric from '../images/Eric.JPG';

export default function Content(state, posts){
    return `
<div id="content">
        <div class="container">
    <p>What up world. I am a beginner, but I will get it together!</p>
    <h3>some contact information</h3>
    <img src="${Eric}" alt="my face"></div>
        ${Pages[state.body](posts)}
    </div>
    </div>
`;
}
