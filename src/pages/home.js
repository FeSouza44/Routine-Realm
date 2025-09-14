import topBar from "src/components/topbar.js";

export default function renderHomePage(){

    const navBar = document.getElementById('topbar');
    topBar.innerHTML = '';

    const navbar = Topbar();
    navBar.appendChild(navbar);

    
}