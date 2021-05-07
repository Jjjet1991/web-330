class Footer extends HTMLElement
{
constructor() {
super();
}
connectedCallback() {
this.innerHTML = `
<nav class="navbar fixed-bottom navbar-light" style="background-color:white;padding:10px;text-align:center;">
  <li class="nav-link"><a href="https://github.com/Jjjet1991/web-330">GitHub</a></li>
  <li class="nav-link"><a href="https://github.com/buwebdev/web-330">Web 330 Repository</a></li>
  <li class="nav-link"><a href="#">Web 330 YouTube</a></li>
  <li class="nav-link"><a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">BU Web Development</a></li>
</nav>
`
}
}

customElements.define("footer-component", Footer);