import React from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../../pages/style.css";

function Header({ toggleNav, isNavExpanded }) {
  return (
    <Navbar
      expanded={isNavExpanded}
      fixed="top"
      expand="md"
      className="navbar"
    >
      <Navbar.Toggle
        className="navbar-toggler"
        aria-controls="responsive-navbar-nav"
        onClick={toggleNav}
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
              onClick={toggleNav}
              activeClassName="active"
            >
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/projects"
              onClick={toggleNav}
              activeClassName="active"
            >
              Projects
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/writings"
              onClick={toggleNav}
              activeClassName="active"
            >
              Writings
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/readings"
              onClick={toggleNav}
              activeClassName="active"
            >
              Readings
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/cv"
              onClick={toggleNav}
              activeClassName="active"
            >
              CV
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/whatelse"
              onClick={toggleNav}
              activeClassName="active"
            >
              What Else ?
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
