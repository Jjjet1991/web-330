class Footer extends HTMLElement
{
constructor() {
super();
}
connectedCallback() {
this.innerHTML = `
<br>
<footer>
<nav class="navbar navbar-expand-lg" style="background-color:#393e46;height:200px;text-align:center;margin-top:35px;">
<div>

<ul style="list-style:none;text-align:left;margin-top:20px;">
<li style="font-size:1.0em;color:white;text-decoration:underline;">Quick Links</li>
<li>
<a style="font-size:0.75em;color:white;text-align:center;"href="https://github.com/Jjjet1991/web-330" target="_blank">GitHub</a>
</li>
<li>
<a style="font-size:0.75em;color:white;text-align:center;"href="https://github.com/buwebdev/web-330"  target="_blank">Web-330 GitHub</a>
</li>
<li>
<a style="font-size:0.75em;color:white;text-align:center;"href="">Web-330 YouTube</a>
</li>
<li>
<a style="font-size:0.75em;color:white;text-align:center;"href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank">Bellevue Web Development</a>
<li>
</ul>
<div>

</nav>
<div style="background-color:#aaaaaa;height:25px;width:full-width;text-align:center;>
<p style="text-align:center;">&#169 Jourdan Neal 2020</p>
</div>
</footer>
</div>`
}
}

customElements.define("footer-component", Footer);