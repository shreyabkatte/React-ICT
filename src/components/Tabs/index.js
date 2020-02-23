import React from "react";
import "./index.css"
import logo from "../../img/logo.png"

const Tabs = () => {
  return (
  <header className="header-section">
		<div className="tabs-container container" >
			<a href="index.html" className="site-logo"><img src={logo} alt="" /></a>
			<div className="nav-switch">
				<i className="fa fa-bars"></i>
			</div>
			<nav className="main-menu">
				<ul>
					<li className="active"><a href="index.html">Home</a></li>
					<li><a href="about.html">About Us</a></li>
					<li><a href="event.html">Events</a></li>
					<li><a href="blog.html">blog</a></li>
					<li><a href="gallery.html">Gallery</a></li>
					<li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>
		</div>
	</header>
  )
}


export default Tabs
