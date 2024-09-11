import React from 'react'
//import { Container } from 'react-bootstrap'

import { Container, Row, Col } from "react-bootstrap";
//import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import EducationCard from "../components/Education/EducationCard";
import HSC from "../assets/HSC.jpg";
import PPC from "../assets/PPC.jpg";
import uni from '../components/Education/uni.jpg';
import college from '../components/Education/college.jpg';


const Education = () => {
  return (
    <Container fluid className='education-section'>
        <Particle />
        <Container>
            <h1 className="project-heading">
            My <strong className="yellow">Education </strong>
            </h1>
            <EducationCard
                imgPath={uni}
                title="BSC in Electrical and Computer Engineering"
                subtitle="Rajshahi University of Engineering & Technology"
                cgpa="3.50/5.00"
                //description="I completed my Bachelor’s degree in Computer Science and Engineering at RUET. I learned various programming languages, algorithms, and development methodologies during my time here."
                link={PPC}
                buttonText="View Certificate"
            />
            <EducationCard
                imgPath={college}
                title="Higher Secondary Certificate "
                subtitle="Saidpur Government Science College"
                cgpa = "5.00/5.00"
                //description="I completed my Bachelor’s degree in Computer Science and Engineering at RUET. I learned various programming languages, algorithms, and development methodologies during my time here."
                link={HSC}
                buttonText="View Certificate"
            />


        </Container>

    </Container>
  )
}

export default Education