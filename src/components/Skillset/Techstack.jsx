import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  // DiNodejs,
  DiGit,
  // DiDjango,
} from "react-icons/di";
import {
  // SiMaterialui,
  // SiGraphql,
  // SiSolidity,
  SiRedux,
  // SiMongodb,
  SiHtml5,
  SiMysql,
  SiC,
  SiPython,
  SiDjango,
  SiTailwindcss,
  SiCplusplus
  
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-label="C">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="C++">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Python">
        <SiPython/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="HTML5">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Tailwind CSS">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Django">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Redux">
        <SiRedux />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons" data-label="MySql">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Git">
        <DiGit />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col> */}
    </Row>
  );
}

export default Techstack;
