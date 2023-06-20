import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Homepage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>Hey ! (Under Construction)</h3>
                        <p className='aboutdetails'>I am Sonu, a second year CS PhD Student at Colorado State University working in the area of computer vision and AI. Currently I am advised by Nate Blanchard. Before my PhD I completed my Masters in Computer Engineering under the guidance of Ross Beveridge. My areas of interest include Virtual Reality, Human Digitization, AI at home and AI for fighting climate change.
                        </p>
                        
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Homepage