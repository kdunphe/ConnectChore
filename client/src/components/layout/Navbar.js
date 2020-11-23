import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (

      <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo center">ConnectChore</a>
        {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/game">Game</a></li>
          <li><a href="/rewards">Rewards</a></li>
          <li><a href="/chores">Chores</a></li>
        </ul> */}
      </div>
    </nav>


/* <>
<nav>
<div className="nav-wrapper">
  <a href="#!" className="brand-logo">Logo</a>
  <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
  <ul className="right hide-on-med-and-down">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
</div>
</nav>

<ul className="sidenav" id="mobile-demo">
<li><a href="sass.html">Sass</a></li>
<li><a href="badges.html">Components</a></li>
<li><a href="collapsible.html">Javascript</a></li>
<li><a href="mobile.html">Mobile</a></li>
</ul>
</> */


      // <div className="navbar-fixed">
      //   <nav className="z-depth-0">
      //     <div className="nav-wrapper white">
      //       <Link
      //         to="/"
      //         style={{
      //           fontFamily: "monospace"
      //         }}
      //         className="col s5 brand-logo center black-text"
      //       >
      //         <i className="material-icons">home_work</i>
      //         ConnectChore
      //       </Link>
      //     </div>
      //   </nav>
      // </div>
    );
  }
}

export default Navbar;