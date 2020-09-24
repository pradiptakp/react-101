/*
  Ini halaman dashboard, sebenernya gak sehat cara setstate kayak gini, harusnya pake useReducer
  karena tiap setState itu komponennya rerender (ngefek ke performa nanti). 
  Cuman karena biar simpel ya gini dulu aja gpp (useReducer agak mbingungi)

  Disini pas baru render component, fungsi didalam useEffect kepanggil, dia ngefetch API dari API-nya
  Studio Ghibli (disclaimer: aku bukan wibu). Fetchnya pake axios biar gampang, terus render sesuai
  kondisi state film / error / loading pake inline conditional.
*/

import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Jumbotron,
  Row,
  Col,
  Spinner,
  Alert,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { logout } from "utils/auth";
import { connect } from 'react-redux';
import { getFilmsData, updateState } from '../actions/app';
import { updateStateNotPersist } from '../actions/auth';

const Dashboard = (props) => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [film, setFilm] = React.useState();

  React.useEffect(() => {
    props.updateStateNotPersist({body: true})
    props.getFilmsData(
      response => {
        setLoading(false);
        setFilm(response);
      },
      error => {
        setLoading(false);
        setError(true);
        console.warn(error);
      }
    )
    return () => { };
  }, []);

  React.useEffect(() => {
    console.log(`props.testState`)
    console.log(props.testState)
    return () => {}
  }, [props.testState])

  React.useEffect(() => {
    console.log(`props.testStateNotPersist`)
    console.log(props.testStateNotPersist)
    return () => {}
  }, [props.testState])
  
  const _onLogout = () => {
    logout();
    history.replace("/");
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand color="white">Dashboard</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Button variant="primary" onClick={_onLogout}>
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Jumbotron>
        <Container>
          <h1>Dashboard</h1>
          <p>
            Jadi ini ceritanya halaman yang cuma bisa diliat kalo udah login
          </p>
        </Container>
      </Jumbotron>
      <Container>
        {loading ? (
          <Row>
            <Col>
              <Spinner
                animation="border"
                variant="primary"
                className="d-flex justify-content-center ml-auto mr-auto"
              >
                <span className="sr-only">Loading...</span>
              </Spinner>
            </Col>
          </Row>
        ) : film ? (
          film
            .reduce(function (accumulator, currentValue, currentIndex, array) {
              if (currentIndex % 4 === 0)
                accumulator.push(array.slice(currentIndex, currentIndex + 4));
              return accumulator;
            }, [])
            .map((p) => {
              return (
                <Row className="mb-4">
                  {p.map((value) => {
                    return (
                      <Col>
                        <h5>{value.title}</h5>
                        <p>{value.description}</p>
                      </Col>
                    );
                  })}
                </Row>
              );
            })
        ) : (
              error && <Alert variant="danger">Error bang</Alert>
            )}
      </Container>
    </div>
  );
};


const mapStateToProps = state => ({
  testState: state?.app?.testState,
  testStateNotPersist: state?.auth?.testStateNotPersist,
});

const mapDispatchToProps = {
  getFilmsData,
  updateState,
  updateStateNotPersist,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);