export default function Header(state){
    return `
<div id="header">
    <div class="container">
        <h1 style="color: rgb(255, 255, 255);">Welcome To Eric's Portfolio!${state.title}</h1>
    <div id="greeting"></div>
    <input type="text" />
</div>
`;
}