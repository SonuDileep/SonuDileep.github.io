import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "../../pages/style.css";

function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState(1);



  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
      setNavbarOpacity(0);
    } else {
      updateNavbar(false);
      setNavbarOpacity(1);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className="navbar"
      style={{ opacity: navbarOpacity, transition: 'opacity 1.0s' }}
    >
{/*      <Navbar.Brand className="logotext" as={Link} to="/">
        <div className="logo"></div>
      </Navbar.Brand>
*/}
      <Navbar.Toggle
        className="navbar-toggler"
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar">
        <Nav className="ms-auto" defaultActiveKey="#home">
          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/"
              onClick={() => updateExpanded(false)}
              activeClassName="active" // Add this line
            >
              Home
            </NavLink>
          </Nav.Item>
          
            <Nav.Item>
            <NavLink
              className="nav-link"
              to="/projects"
              onClick={() => updateExpanded(false)}
              activeClassName="active" // Add this line
            >

              Projects
            </NavLink>
          </Nav.Item>

            <Nav.Item>
            <NavLink
              className="nav-link"
              to="/writings"
              onClick={() => updateExpanded(false)}
              activeClassName="active" // Add this line
            >
              Writings
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/readings"
              onClick={() => updateExpanded(false)}
              activeClassName="active" // Add this line
            >
              Readings
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/cv"
              onClick={() => updateExpanded(false)}
              activeClassName="active" // Add this line
            >
              CV
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/whatelse"
              onClick={() => updateExpanded(false)}
              activeClassName="active" // Add this line
            >
              What Else ?
            </NavLink>
          </Nav.Item>


{/*    
          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/cv"
              onClick={() => updateExpanded(false)}
              activeClassName="active" // Add this line
            >

            Contact
	 </NavLink>
          </Nav.Item>

          <Button
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1zbrcyEPX5vpSL0JVXJb7x8CUZu089nYK/view?usp=sharing"
              );
            }}
            className="resumebtn"
          > 
          <span>Resume</span>
          </Button> 
*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
