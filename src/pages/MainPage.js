import React from "react";
import "../App.css";
import logo from "../images/bird.jpeg";
// import logo from "../logo.svg";
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
    <Navbar
      bg="primary"
      expand="lg"
      style={{
        borderBottomWidth: 3,
        borderColor: "black",
        borderBottomStyle: "solid",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={require("../images/bird.jpeg")}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          TrustBird
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">제단소개</Nav.Link>
            <Nav.Link href="#link">계약신탁</Nav.Link>
            <Nav.Link href="#link">정보소개</Nav.Link>
            <NavDropdown title="개인정보" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                멤버십 신청
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                신탁 내역 확인
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                관리비 납부내역
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                회원 정보 수정
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">회원 탈퇴</NavDropdown.Item>
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
