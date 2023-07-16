/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
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

const workExperience = [
  {
    title: 'Graduate Researcher - Computer Vision, Chevron, CO',
    responsibilities: [
      'Engineered a computer vision system for monitoring oil and gas sites',
      'Implemented a Transformer-based model for real-time monitoring of flare conditions',
      'Worked on data cleaning and annotation processes for training neural networks',
      'Created a synthetic database with Unreal Engine to simulate various flare conditions and weather patterns',
      'Trained a Swin Transformer model that achieved a 96% accuracy rate on test set in identifying Ringelmann number',
      'Developed a custom deep learning architecture with very few parameters (<300k) for real time deployment'
    ]
  },
  {
    title: 'Graduate Researcher - Data Analysis, CSU Energy Institute, CO',
    responsibilities: [
      'Worked on developing a simulation model to estimate emissions of methane and other hydrocarbons from oil and gas facilities',
      'Devised code for estimating emissions using Monte Carlo simulation techniques',
      'Collected and analyzed data from multiple sources to build accurate models of each facility',
      'Created input data, performed test simulations, and validated results for the emission model'
    ]
  },
  {
    title: 'Graduate Researcher - Computer Vision, CSU Energy Institute, CO',
    responsibilities: [
      'Applied computer vision for automated identification of well pad features from satellite imagery',
      'Built an automated well pad and equipment detection model using CNNs to aid in methane emission studies',
      'Designed a Python-based plugin using PyQt and QGIS for seamless annotation of Google satellite imagery for training Yolo models',
      'Performed data cleaning and annotation',
      'Trained a YoloV4 model that achieved an average accuracy rate of 96% for detecting well pads in the DJ Basin, Colorado'
    ]
  },
  {
    title: 'Mapping Researcher Intern - Autonomous Driving, Magna International, MI',
    responsibilities: [
      'Worked on mapping and localization algorithm for a Self-Driving Car project',
      'Conducted data annotation to train deep learning models for the identification of moving objects',
      'Improved an existing feature detection algorithm for accelerated mapping and localization',
      'Modified the existing mapping algorithm to detect duplicate features based on camera pose'
    ]
  },
  {
    title: 'Research Engineer - Humanitarian Technologies Lab, India',
    responsibilities: [
      'Worked on the development of 2 projects: Hand gesture-based wheelchair navigation and Autonomous wheelchair navigation system',
      'Designed software pipeline for wheelchair navigation using hand gesture data',
      'Combined data from multiple sensors for the safe and efficient navigation of wheelchairs',
      'Contributed to the development of the "Autonomous Wheelchair Navigation" project'
    ]
  }
];


const education = [
  {
    degree: 'PhD in Computer Science, Colorado State University',
    timeFrame: 'Aug 2021 - Present'
  },
  {
    degree: 'M.S. in Computer Engineering, Colorado State University',
    timeFrame: 'Aug 2018 - May 2021'
  },
  {
    degree: 'B.Tech. in Electronics and Communication Engineering, Amrita Institute of Technology',
    timeFrame: 'July 2013 - May 2017'
  }
];

const skills = [
  { title: 'Technical Skills', description: '2D/3D Object Detection, Tracking, Segmentation, 3D Reconstruction, Structure from Motion, SLAM, GANs' },
  { title: 'Programming Language', description: 'C++, Python, MATLAB, CUDA' },
  { title: 'Libraries', description: 'OpenCV, ROS, PyTorch, TensorFlow, NumPy, SciPy, Scikit-learn, Pandas, Matplotlib, Apache Spark, Hadoop' },
  { title: 'Other tools', description: 'Arduino, Raspberry Pi, PyQt, QGIS, RVIZ, Git, SVN, Unreal Engine' },
  { title: 'Professional Skills', description: 'Creativity, Critical Thinking, Problem Solving, Teamwork' }
];

const relevantCoursework = [
  'Machine Learning, Image Computation, Big Data, Mathematical Modeling of Large Datasets, Optimization Methods, Machine learning & Adaptive Systems, Digital Image Processing, Introduction to Computer Graphics, Introduction to Robotic Programming, Digital Signal Processing, Software Engineering, Algorithms, Operating Systems'
];

function CVPage() {
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
          <div className="owner" style={{ textAlign: 'left' }}>
		
		<h3 style={{ borderBottom: '1px solid lightgray', paddingBottom: '0rem',marginBottom: '0.7rem', color: '#495871'  }}>Work Experience</h3>
		{workExperience.map((work, index) => (
		  <div key={index} style={{ marginBottom: '0.7rem', paddingBottom: '0rem' }}>
		    <h6>{work.title}</h6>
		    <ul>
		      {work.responsibilities.map((responsibility, i) => (
			<li key={i}>{responsibility}</li>
		      ))}
		    </ul>
		  </div>
		))}
		<h3 style={{ borderBottom: '1px solid lightgray', paddingBottom: '0rem',marginBottom: '0.7rem', color: '#495871'  }}>Education</h3>
		{education.map((edu, index) => (
		  <p key={index}>

                   <h6 style={{ marginRight: '0.5rem' }}>
    {edu.degree} 
    <span style={{
        fontSize: '1em', 
        fontWeight: 'normal', 
    }}> ({edu.timeFrame})
    </span>
</h6>
		  </p>
		))}
		<h3 style={{ borderBottom: '1px solid lightgray',paddingBottom: '0rem',marginBottom: '0.7rem', color: '#495871'  }}>Skills</h3>
		{skills.map((skill, index) => (
		  <div key={index} style={{ display: 'flex', alignItems: 'baseline' }}>
		    <h6 style={{ marginRight: '0.5rem' }}>{skill.title}:</h6>
		    <p style={{ marginBottom: 0 }}>{skill.description}</p>
		  </div>
		))}
		<h3 style={{ borderBottom: '1px solid lightgray', paddingBottom: '0rem',marginBottom: '0.7rem', color: '#495871' }}>Relevant Coursework</h3>
		{relevantCoursework.map((course, index) => (
		  <p key={index}>{course}</p>
		))}

          </div>
          </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default CVPage;
