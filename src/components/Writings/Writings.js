import React from "react";
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

function WritingsPage() {
  return (
    <>
      <div
        className="section"
        style=
          {{ backgroundColor: 'white'}}
      >
          <div className='aboutpagebackground'>
          <Container>
          <div style={{ marginTop: '10%' }}>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/images/sonu.JPG")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Sonu Dileep <br />
              </h4>
              <h6 className="description">Computer Vision Scientist</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p style={{ textAlign: 'justify' }}>
                Hey ! I'm Sonu, a second year CS PhD Student at Colorado State University working in the area of computer vision and AI. I am currently advised by <a href="https://sites.google.com/view/nathanieltblanchard" className="linkc">Nate Blanchard</a>. Before my PhD I completed my Masters in Computer Engineering under the guidance of <a href="https://www.cs.colostate.edu/~ross/" className="linkc">Ross Beveridge</a>. My areas of interest include Video Understanding, and AI for climate change.I'm Sonu, a second year CS PhD Student at Colorado State University working in the area of computer vision and AI. I am currently advised by <a href="https://sites.google.com/view/nathanieltblanchard" className="linkc">Nate Blanchard</a>. Before my PhD I completed my Masters in Computer Engineering under the guidance of <a href="https://www.cs.colostate.edu/~ross/" className="linkc">Ross Beveridge</a>. My areas of interest include Video Understanding, and AI for climate change. 
              </p>
              <br />
            </Col>
          </Row>
          <br />
          </div>
          </Container>
          
          </div>
      </div>
    </>
  );
}

export default WritingsPage;
