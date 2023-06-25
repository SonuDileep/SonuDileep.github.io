import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaTwitter, FaLinkedin, FaGraduationCap } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';

function Homepage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                <Col md={3}>
                    <div className="webimage d-flex justify-content-center"></div>
                    <div className="icon-container d-flex justify-content-center">
                        <a href="https://github.com/SonuDileep/" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='icon' />
                        </a>
                        <a href="https://twitter.com/sonu3141" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className='icon' />
                        </a>
                        <a href="https://www.linkedin.com/in/sonudileep123/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='icon' />
                        </a>
                        <a href="https://scholar.google.com/citations?user=LMgS2AsAAAAJ&hl=en&oi=ao/" target="_blank" rel="noopener noreferrer">
                            <AiFillGoogleCircle className='icon' />
                        </a>
                    </div>
                </Col>
	            <Col md={7} >
                        <h3 className='aboutmetext'>Hey ! </h3>
                        <p className='aboutdetails'>I'm Sonu, a second year CS PhD Student at Colorado State University working in the area of computer vision and AI. I am currently advised by Nate Blanchard. Before my PhD I completed my Masters in Computer Engineering under the guidance of Ross Beveridge. My areas of interest include Video Understanding, and AI for climate change.
                        </p>
                        
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Homepage
