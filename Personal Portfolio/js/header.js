//Create header object.
class Header extends HTMLElement
{
constructor() {
super();
}

connectedCallback() {
this.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Jourdan Neal</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item">
        <a class="nav-link" href="index.html">Home</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="projects.html">Projects</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Database Diagrams</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">API Unit Test</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="resume.html">Resume</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="about.html">About</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="bucket-list.html">Bucket List</a>
      </li>


    </ul>

  </div>
</nav>

`;
}
}

customElements.define("header-component", Header);