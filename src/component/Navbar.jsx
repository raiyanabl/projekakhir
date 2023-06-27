import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../Navbar.css";

function TopNav() {
  return (
    <>
      <Navbar className="fnav"  collapseOnSelect expand="lg"  variant="light">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4">
            DOSE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ps-3">
              <Nav.Link className="px-3">
                <Link to="/" className="text-decoration-non">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="px-3">
                <Link to="/Video" className="text-decoration-non" >
                  Video
                </Link>
              </Nav.Link>
              <Nav.Link className="px-3">
                <Link to="/About" className="text-decoration-non">
                  About us
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNav;
