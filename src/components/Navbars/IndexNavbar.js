/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import { BsHouseDoor, BsBriefcase, BsBook, BsPencilSquare, BsFileText, BsThreeDots } from 'react-icons/bs';
import { FaGoogleScholar } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const scrollThreshold = window.innerHeight * 0.10;
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > scrollThreshold ||
        document.body.scrollTop > scrollThreshold
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < (scrollThreshold + 1) ||
        document.body.scrollTop < (scrollThreshold + 1)
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            target="_blank">

          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-center"
          navbar
          isOpen={navbarCollapse}
        >

          <Nav navbar>
	     <NavItem>
              <NavLink
                href="/"
              >
	      <span style={{ display: 'flex', alignItems: 'center' }}>
                     <BsHouseDoor className="nc-icon" style={{ marginRight: '0.2em' }} /> Home
              </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/projects"
              >
	      <span style={{ display: 'flex', alignItems: 'center' }}>
                     <BsBriefcase className="nc-icon" style={{ marginRight: '0.2em' }} /> Projects
              </span>
              </NavLink>
            </NavItem>
	     <NavItem>
              <NavLink
                href="/writings"
              >
	      <span style={{ display: 'flex', alignItems: 'center' }}>
                     <BsPencilSquare className="nc-icon" style={{ marginRight: '0.2em' }} /> Writings
              </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/readings"
              >
	      <span style={{ display: 'flex', alignItems: 'center' }}>
                     <BsBook className="nc-icon" style={{ marginRight: '0.2em' }} /> Readings
              </span>
              </NavLink>
            </NavItem>
	     <NavItem>
              <NavLink
                href="/cv"
              >
	      <span style={{ display: 'flex', alignItems: 'center' }}>
                     <BsFileText className="nc-icon" style={{ marginRight: '0.2em' }} /> CV
              </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/justme"
              >
	      <span style={{ display: 'flex', alignItems: 'center' }}>
                     <BsThreeDots className="nc-icon" style={{ marginRight: '0.2em' }} /> What Else?
              </span>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/sonu3141"
                target="_blank"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/sonudileep123/"
                target="_blank"
              >
                <i className="fa fa-linkedin" />
                <p className="d-lg-none">LinkedIn</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://scholar.google.com/citations?user=LMgS2AsAAAAJ&hl=en&oi=ao/"
                target="_blank"
              >
		<i className="fa fa-graduation-cap" />
                <p className="d-lg-none">Google Scholar</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/SonuDileep/"
                target="_blank"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
       
          </Nav>

        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
