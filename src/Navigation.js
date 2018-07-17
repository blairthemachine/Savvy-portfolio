export default function Navigation(){
    return `
    <div id="navigation">
        <ul>
                <li> <a href="/">Home</a>
                </li>
            <li>
                <a href="/blog">Resume</a>
            </li>
            <li>
                <a href="/projects">Projects</a>
                <ul>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                    <li>Fourth</li>
                </ul>
                <li>
                    = <a href="/Contact/">Contact</a>
                </li>
            </li>
        </ul>
    </div>

`;
}

