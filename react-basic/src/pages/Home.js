/*
  Ini halaman home, gak ada yg istimewa disini
*/

import React from "react";
import { Button, Container, Nav, Navbar, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand color="white">React 101</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/login">
                <Button variant="primary">
                  {localStorage.getItem("USER") ? "Dashboard" : "Login"}
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Jumbotron>
        <Container>
          <h1>Hello, world!</h1>
          <p>Jadi ini ceritanya contoh sederhana implementasi React</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
