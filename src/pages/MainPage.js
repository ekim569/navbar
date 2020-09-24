import React from "react";
import "../App.css";
import logo from "../logo.svg";
// import logo from './logo.svg';
// import TutorLogin from "./components/TutorLogin";

import {
  Button,
  Navbar,
  Form,
  Nav,
  FormControl,
  NavDropdown,
  Container,
} from "react-bootstrap";

const MainPage = ({ nav }) => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand className="margin-left" href="#home">
          TrustBird
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          dd
          <Button variant="outline-success">Search</Button>
        </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainPage;
