import { LinkContainer } from "react-router-bootstrap";
// import logo from "../images/fsc-logo-main.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaHome, FaDog, FaBone, FaBaseballBall } from "react-icons/fa";

import "./MainNav.scss";

function MainNav() {
  return (
    <header>
      <Navbar collapseOnSelect expand="md" fixed="top">
        <Container fluid>
          <div className="d-flex align-items-center">
          <LinkContainer to="/">
            <Navbar.Brand>
              {/* <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="Adopt a Dog Logo"
              /> */}
              <FaDog className="site-logo" />
              <span className="logo-title">Adopt A Dog</span>
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
              <LinkContainer to="/dogs">
                <Nav.Link active={false}>
                  <span className="d-flex align-items-center">
                    <FaBone />
                    <span className="text-bold ps-2">Meet the Dogs</span>
                  </span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link active={false}>
                  <span className="d-flex align-items-center">
                    <FaBaseballBall />
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
