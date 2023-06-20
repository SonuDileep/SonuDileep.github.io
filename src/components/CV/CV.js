import React from 'react';
import '../../pages/style.css';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const workExperience = [
  {
    title: 'Graduate Researcher - Computer Vision, Chevron, CO (August 2021 - Present)',
    responsibilities: [
      'Computer Vision based oil and gas site monitoring system',
      'Developed a Transformer based model to monitor the state of flare at oil and gas sites',
      'Worked on data cleaning and annotation for training neural networks',
      'Created a synthetic database using Unreal Engine which could emulate different flare conditions and weather',
      'Find the Ringelmann number of smoke coming out of flare',
      'Trained a Swin Transformer model to identify the state of flare, achieved 96% accuracy on test set'
    ]
  },
  // Continue with other work experiences in the same format
  // ...
];

const education = [
  'PhD in Computer Science, Colorado State University (August 2021 - Present)',
  'M.S. in Computer Engineering, Colorado State University (August 2018 - May 2021)',
  'B.Tech. in Electronics and Communication Engineering, Amrita Institute of Technology (July 2013 - May 2017)'
];

const skills = [
  'Technical Skills : 2D/3D Object Detection & Tracking, Segmentation, Feature Detection, 3D Reconstruction, Structure from Motion, SLAM, GANs',
  'Programming Language : C++, Python, MATLAB, CUDA',
  'Libraries : OpenCV, ROS, PyTorch, TensorFlow, NumPy, SciPy, Scikit-learn, Pandas, Matplotlib, Apache Spark, Hadoop',
  'Other tools : Arduino, Raspberry Pi, PyQt, QGIS, RVIZ, Git, SVN, Unreal Engine',
  'Professional Skills : Creativity, Critical Thinking, Problem Solving, Teamwork'
];

const relevantCoursework = [
  'Machine Learning, Image Computation, Big Data, Natural Language Processing, Mathematical Modeling of Large Datasets,Optimization Methods, Machine learning & Adaptive Systems, Digital Image Processing, Introduction to Computer Graphics, Introduction to Robotic Programming, Digital Signal Processing, Software Engineering, Algorithms, Operating Systems'
];

// You can continue to add more sections in the same format

function CVPage() {
  return (
    <div className='aboutpagebackground'>
      <Container>
        <Row className='textbackground'>
          <Col md={12}>
            <h3 className='aboutmetext'>Work Experience</h3>
            {workExperience.map((job, index) => (
              <Card className="transparent-card mb-3 dynamicBox" key={index}>
                <Card.Header>{job.title}</Card.Header>
                <ListGroup variant="flush">
                  {job.responsibilities.map((responsibility, idx) => (
                    <ListGroup.Item className="transparent-card" key={idx}>
                      {responsibility}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            ))}

            <h3 className='aboutmetext'>Education</h3>
            <Card className="transparent-card mb-3 dynamicBox">
              <Card.Header>
                <ListGroup variant="flush">
                  {education.map((edu, index) => (
                    <ListGroup.Item className="transparent-card" key={index}>
                      {edu}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Header>
            </Card>

            <h3 className='aboutmetext'>Skills</h3>
            <Card className="transparent-card mb-3 dynamicBox">
              <Card.Header>
                <ListGroup variant="flush">
                  {skills.map((skill, index) => (
                    <ListGroup.Item className="transparent-card" key={index}>
                      {skill}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Header>
            </Card>

            <h3 className='aboutmetext'>Relevant Coursework</h3>
            <Card className="transparent-card mb-3 dynamicBox">
              <Card.Header>
                <ListGroup variant="flush">
                  {relevantCoursework.map((course, index) => (
                    <ListGroup.Item className="transparent-card" key={index}>
                      {course}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Header>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CVPage;