//Create header object.
class Header extends HTMLElement
{
constructor() {
super();
}

connectedCallback() {
this.innerHTML = `

<!--Header will change color and size of 1st letter-->
<div style="margin:5px;">
  <!--First Name-->
<h1 style="margin-left:15px;"><span style="font-size:75px;color:#00adb5">J</span>ourdan
  <!--Last Night-->
  <span style="font-size:75px;color:#00adb5">N</span>eal
</div>

<nav class="navbar navbar-expand-lg" style="background-color:#393e46;">
      
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <!--Unordered list for navbar items-->
  <ul class="navbar-nav mr-auto">

      <!--1st NavBar link for Home-->
    <li class="nav-item active">
      <a class="nav-link" style="color:#f4f9f9;" href="./index.html">Home <span class="sr-only">(current)</span></a>
    </li>

    <!--2nd NavBar link for Home-->
    <li class="nav-item">
      <a class="nav-link" style="color:#f4f9f9;"href="./about.html">About</a>
    </li>

    <!--3rd NavBar link for Home-->
    <li class="nav-item">
        <a class="nav-link" style="color:#f4f9f9;" href="./resume.html">Resume</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" style="color:#f4f9f9;" href="./bucket-list.html">Bucket List</a>
    </li>
</ul>

<ul class="nav navbar-nav navbar-right">
<li class="nav-item">
<a class="nav-link" style="color:#f4f9f9;" href="./projects.html">Projects</a>
</li>
<li class="nav-item">
<a class="nav-link" style="color:#f4f9f9;" href="./neal-diagrams.html">Diagrams</a>
</li>
<li class="nav-item">
<a class="nav-link" style="color:#f4f9f9;" href="./apiTesting.html">API Testing</a>
</li>

<li class="nav-item">
<a class="nav-link" style="color:#f4f9f9;" href="./neal-tech-value-stream.html">DevOps</a>
</li>

</ul>


`;

}
}

customElements.define("header-component", Header);