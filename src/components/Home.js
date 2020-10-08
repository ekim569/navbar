import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col
          style={{
            margintop: 139,
            fontSize: 50,
            fontFamily: "Malgun Gothic",
            fontWeight: "bold",
          }}
        >
          우리는 당연한 일을 해드리는거죠
          <br />
          당신의 불편한 일들을
        </Col>
      </Row>
      <button href="/src/pages/onepage.js"> 서비스소개</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}
