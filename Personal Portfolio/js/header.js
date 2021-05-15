//Create header object.
class Header extends HTMLElement
{
constructor() {
super();
}

connectedCallback() {
this.innerHTML = `
<nav class="nav justify-content-center" id="navbar">
<a class="header nav-link active" aria-current="page" href="index.html">Home</a>
<a class="header nav-link" href="./about.html">About</a>
<a class="header nav-link" href="#">Resume</a>
<a class="header nav-link" href="./bucket-list.html">Bucket List</a>
<a class="header nav-link" href="./projects.html">Projects</a>
<a class="header nav-link" href="#">Databases</a>
<a class="header nav-link" href="#">API Tests</a>
</nav>

`;

}
}

customElements.define("header-component", Header);