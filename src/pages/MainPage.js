import React, { Fragment } from 'react';
import '../App.css';
import logo from '../logo.svg';
import '../css/bootstrap.min.css'
// import logo from './logo.svg';
// import TutorLogin from "./components/TutorLogin";

import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';


const MainPage = () => {
  return (
    
<Fragment>
    <Navbar bg="white" variant="light">
      <Navbar.Brand href="/home">TrustBird</Navbar.Brand>
   
      <Nav className="mr-auto">
        <Nav.Link href="#home" >Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>

      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>

    </Navbar>
    </Fragment>
  
    

  );
}


export default MainPage;