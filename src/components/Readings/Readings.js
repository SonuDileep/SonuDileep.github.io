import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col, ListGroup, Card  } from 'react-bootstrap'
import Masonry from 'react-masonry-css';



const readings = {
  "Computer Vision and Deep Learning": [
    { name: "Introduction to Computer Vision", link: "https://www.youtube.com/watch?v=skaQfPQFSyY&list=PL4B3F8D4A5CAD8DA3" },
    { name: "Computer Vision I: Variational Methods", link: "https://www.youtube.com/playlist?list=PLTBdjV_4f-EJ7A2iIH5L5ztqqrWYjP2RI" },
    { name: "Advanced Computer Vision", link: "https://www.youtube.com/playlist?list=PLd3hlSJsX_IkQXKGWRa-eHqVhCfTqAihV" },
    { name: "Machine Learning for Computer Vision", link: "https://www.youtube.com/playlist?list=PLTBdjV_4f-EIiongKlS9OKrBEp8QR47Wl" },
    { name: "Multiple View Geometry in Computer Vision", link: "https://www.youtube.com/playlist?list=PLyH-5mHPFffFvCCZcbdWXAb_cTy4ZG3Dj" },
    { name: "Deep Learning: CS 182", link: "https://www.youtube.com/playlist?list=PL_iWQOsE6TfVmKkQHucjPAoRtIJYt8a5A" },
    { name: "DeepMind - Deep Learning", link: "https://www.youtube.com/playlist?list=PLqYmG7hTraZCDxZ44o4p3N5Anz3lLRVZF" },
  ],
  "Computer Graphics": [
    { name: "Introduction to Computer Graphics", link: "https://www.youtube.com/playlist?list=PLQ3UicqQtfNuBjzJ-KEWmG1yjiRMXYKhh" },
    { name: "Computer Graphics Lecture - CMU", link: "https://www.youtube.com/playlist?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E" },
    { name: "Rendering, Raytracing Lecture - TU Wien", link: "https://www.youtube.com/playlist?list=PLujxSBD-JXgnGmsn7gEyN28P1DnRZG7qi" },
    { name: "Shape Analysis Lecture - MIT", link: "https://www.youtube.com/playlist?list=PLQ3UicqQtfNsUZt04_dLP6vbYaxQbPCWQ" },
  ],
  "Reinforcement Learning": [
    { name: "CS234: Reinforcement Learning", link: "https://www.youtube.com/playlist?list=PLoROMvodv4rOSOPzutgyCTapiGlY2Nd8u" },
    { name: "DeepMind - Reinforcement Learning", link: "https://www.youtube.com/playlist?list=PLqYmG7hTraZBKeNJ-JE_eyJHZ7XgBoAyb" },
    { name: "Deep RL Bootcamp", link: "https://www.youtube.com/playlist?list=PLAdk-EyP1ND8Dto7X5KN6sCfNjcMg3Ol6" },
  ],
  "Programming": [
    { name: "C Programming - CMU", link: "https://www.youtube.com/playlist?list=PL601FC994BDD963E4" },
    { name: "C++ Programming - Beginner to Beyond", link: "https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb" },
    { name: "Python Programming Beginner to Advanced", link: "https://www.youtube.com/playlist?list=PL1FgJUcJJ03sm4WuVCPMbTFKNQ0k5Zx3y" },
    { name: "Introduction to Algorithms", link: "https://www.youtube.com/playlist?list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb" },
  ],
  "Math": [
    { name: "Introduction to Linear Algebra", link: "https://www.youtube.com/playlist?list=PL221E2BBF13BECF6C" },
    { name: "Differential Equations", link: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63oTpyxCMLKt_JmB0WtSZfG" },
    { name: "Probability and Statistics", link: "https://www.youtube.com/playlist?list=PLUl4u3cNGP60uVBMaoNERc6knT_MgPKS0" },
  ],
  "Other": [
    { name: "Standford Seminar - Tech Talks", link: "https://www.youtube.com/playlist?list=PL94E35692EB9D36F3" },
    { name: "DeepMind - The Podcast", link: "https://www.youtube.com/playlist?list=PLqYmG7hTraZC3rIGRgI8rTdMjcTLoTgRH" },
  ],
};


function ReadingList() {
  // Define your breakpoint columns
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Container className="centered-content container-width">
      <div>
        <p className="intro-text">Few interesting Articles, Publications and lectures useful for Computer Vision Scientists and Machine Learning Engineers</p>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {Object.entries(readings).map(([section, readings]) => (
            <Card className="transparent-card mb-3 dynamicBox" key={section}>
              <Card.Header>{section}</Card.Header>
              <ListGroup variant="flush">
                {readings.map((reading, idx) => (
                  <ListGroup.Item className="transparent-card" key={idx}>
                    <a className="customLink" href={reading.link} target="_blank" rel="noopener noreferrer">
                      {reading.name}
                    </a>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          ))}
        </Masonry>
      </div>
    </Container>
  );
}

export default ReadingList;