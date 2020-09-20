/*
  Ini halaman login, sebenernya gak sehat cara setstate kayak gini, harusnya pake useReducer
  karena tiap setState itu komponennya rerender (ngefek ke performa nanti). 
  Cuman karena biar simpel ya gini dulu aja gpp (useReducer agak mbingungi)
*/

import React from "react";
import { Button, Container, Navbar, Form, Alert } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { login } from "utils/auth";

const Home = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    if (email || password) {
      setError(false);
    }
    return () => {};
  }, [email, password]);

  const _onSubmit = () => {
    if (email === "angga.ganteng@email.com" && password === "123") {
      login({
        email: email,
      });
      setIsLoggedIn(true);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {isLoggedIn && <Redirect to="/dashboard" />}
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand color="white">Login</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
      <Container className="mt-2">
        <Form>
          <Alert variant="primary">
            <span style={{ fontWeight: "bold" }}>Email: </span>
            angga.ganteng@email.com,
            <span style={{ fontWeight: "bold" }}> Password: </span>
            123
          </Alert>
          {error && <Alert variant="danger">Salah bos</Alert>}

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={_onSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Home;
