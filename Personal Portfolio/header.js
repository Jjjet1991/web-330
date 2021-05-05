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
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">Projects</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">Database Diagrams</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">API Unit Test</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">Resume</a>
      </li>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">About</a>
      </li>


    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

`;
 } 
}

customElements.define("header-component", Header);