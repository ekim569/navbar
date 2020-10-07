import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={6}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
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
