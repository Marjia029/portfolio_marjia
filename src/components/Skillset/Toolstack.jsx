import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiJira
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-label="VScode">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Vercel">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Netlify">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Heroku">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Jira">
        <SiJira />
      </Col>
    </Row>
  );
}

export default Toolstack;
