import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/fsc-logo-main.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaHome, FaUserTie, FaBriefcase } from "react-icons/fa";

import "./MainNav.scss";

function MainNav() {
  return (
    <header>
      <Navbar collapseOnSelect expand="md" fixed="top">
        <Container fluid>
          <div className="d-flex align-items-center">
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="Holt's Code Logo"
              />
              <span className="logo-title">Holt's Code</span>
            </Navbar.Brand>
            </LinkContainer>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link active={false}>
                  <span className="d-flex align-items-center">
                    <FaHome />
                    <span className="text-bold ps-2">Home</span>
                  </span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects">
                <Nav.Link active={false}>
                  <span className="d-flex align-items-center">
                    <FaBriefcase />
                    <span className="text-bold ps-2">Projects</span>
                  </span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link active={false}>
                  <span className="d-flex align-items-center">
                    <FaUserTie />
                    <span className="text-bold ps-2">About</span>
                  </span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MainNav;
