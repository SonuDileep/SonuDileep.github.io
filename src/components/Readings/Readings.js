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
  ],
  "Programming": [
  { name: "C++ tutorials", link: "https://www.learncpp.com/" },
  { name: "Introduction to Algorithms - MIT", link: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/index.htm" },
  { name: "Data Structures", link: "https://www.youtube.com/watch?v=RBSGKlAvoiM" },
  { name: "Advanced Algorithms - MIT", link: "https://www.youtube.com/playlist?list=PL2SOU6wwxB0uP4rJgf5ayhHWgw7akUWSf" },
  { name: "IOS App Development Lecture - Stanford", link: "https://www.youtube.com/playlist?list=PLpGHT1n4-mAsxuRxVPv7kj4-dQYoC3VVu" }
  ],
  "Math": [
  { name: "Introduction to Bayesian Image Analysis", link: "https://kmh-lanl.hansonhub.com/publications/medim93.pdf" },
  { name: "A great introduction to Probabilistic Graphical Modeling", link: "https://ermongroup.github.io/cs228-notes/" },
  { name: "Properties of Expectations", link: "https://www3.nd.edu/~rwilliam/stats1/x12.pdf" },
  { name: "Linear Algebra basics and SVD, PCA, KLT, CCA", link: "https://www.ece.rutgers.edu/~orfanidi/ece525/svd.pdf" },
  { name: "Linear Algebra Lecture - MIT", link: "https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8" },
  { name: "Monte Carlo Simulation", link: "https://www.youtube.com/watch?v=OgO1gpXSUzU&t=2514s" },
  ],
  "Other": [
  { name: "How to build OpenCV with CUDA on Windows ?", link: "https://jamesbowley.co.uk/accelerate-opencv-4-2-0-build-with-cuda-and-python-bindings/" },
  { name: "Transformers Explanation", link: "http://jalammar.github.io/illustrated-transformer/" },
  { name: "Self Attention Explained", link: "https://stats.stackexchange.com/questions/421935/what-exactly-are-keys-queries-and-values-in-attention-mechanisms" },
  { name: "Homogenous Coordinates", link: "https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/" },
  { name: "Non-Manifold Mesh", link: "https://sinestesia.co/blog/tutorials/non-manifold-meshes-and-how-to-fix-them/" },
  { name: "Attention Mechanism", link: "https://dmol.pub/dl/attention.html" },
  { name: "Attention Mask", link: "https://medium.com/mlearning-ai/how-do-self-attention-masks-work-72ed9382510f" },
  { name: "Transformer Circuits", link: "https://transformer-circuits.pub/2021/framework/index.html" },
  { name: "Circuits and more !", link: "http://colah.github.io" },
  ],
};


function ReadingList() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className='aboutpagebackground'>
      <Container>
        <Row className='textbackground'>
          <Col>
            <p className='intro-text'>
              Few interesting Articles, Publications and lectures useful for Computer Vision Scientists and Machine
              Learning Engineers
            </p>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className='my-masonry-grid'
              columnClassName='my-masonry-grid_column'>
              {Object.entries(readings).map(([section, readings]) => (
                <Card className='transparent-card mb-3 dynamicBox' key={section}>
                  <Card.Header>{section}</Card.Header>
                  <ListGroup variant='flush'>
                    {readings.map((reading, idx) => (
                      <ListGroup.Item className='transparent-card' key={idx}>
                        <a className='customLink' href={reading.link} target='_blank' rel='noopener noreferrer'>
                          {reading.name}
                        </a>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card>
              ))}
            </Masonry>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ReadingList;
