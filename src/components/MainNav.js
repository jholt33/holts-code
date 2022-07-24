import logo from "../images/fsc-logo-main.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./MainNav.scss";

const MainNav = () => {
  return (
    <>
      {/* Set to adjust nav collapse breakpoint */}
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} sticky="top" className="mt-0 mb-3">
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
              </Navbar.Brand>
              <a href="/" className="logo-title">
                Holt's Code
              </a>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="projects">Projects</Nav.Link>
                  <Nav.Link href="about">About</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default MainNav;
