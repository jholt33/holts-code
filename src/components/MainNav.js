import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/fsc-logo-main.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaHome, FaUserTie, FaBriefcase } from "react-icons/fa";

import "./MainNav.scss";

function MainNav() {
  return (
    <header>
      {/* Set to adjust nav collapse breakpoint */}
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} fixed="top" className="mt-0 mb-3">
          <Container fluid>
            <div className="d-flex align-items-center">
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="Holt's Code Logo"
                />
                <span className="logo-title">Holt's Code</span>
              </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to="/">
                    <Nav.Link><span className="d-flex align-items-center"><FaHome /><span className="text-bold ps-2">Home</span></span></Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/projects">
                    <Nav.Link><span className="d-flex align-items-center"><FaBriefcase /><span className="text-bold ps-2">Projects</span></span></Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <Nav.Link><span className="d-flex align-items-center"><FaUserTie /><span className="text-bold ps-2">About</span></span></Nav.Link>
                  </LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </header>
  );
}

export default MainNav;
