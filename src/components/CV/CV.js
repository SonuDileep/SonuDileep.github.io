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
      'Computer Vision based oil and gas site monitoring system',
      'Developed a Transformer based model to monitor the state of flare at oil and gas sites',
      'Worked on data cleaning and annotation for training neural networks',
      'Created a synthetic database using Unreal Engine which could emulate different flare conditions and weather',
      'Find the Ringelmann number of smoke coming out of flare',
      'Trained a Swin Transformer model to identify the state of flare, achieved 96% accuracy on test set'
    ]
  },
  {
    title: 'Graduate Researcher - Data Analysis, CSU Energy Institute, CO',
    responsibilities: [
      'Simulation model for methane and other hydrocarbons from oil and gas facilities',
      'Worked on developing code for estimating emissions from oil and gas sites using Monte Carlo simulation',
      'Collected and Analyzed data from multiple sources for modeling each facility',
      'Create input sheets for model, test simulations and validate results'
    ]
  },
  {
    title: 'Graduate Researcher - Computer Vision, CSU Energy Institute, CO',
    responsibilities: [
      'Computer Vision for automated identification of well pad features from satellite imagery',
      'Developed an automated well pad and equipment detection model using CNNs for methane emission studies',
      'Developed a python-based plugin for easy annotation of google satellite imagery using PyQt and QGIS',
      'Worked on data cleaning and annotation',
      'Trained a YoloV4 and achieved an average accuracy of 97% in DJ Basin, Colorado'
    ]
  },
  {
    title: 'Mapping Researcher Intern - Autonomous Driving, Magna International, MI',
    responsibilities: [
      'Mapping and Localization of Self-Driving Car',
      'Worked on data annotation to train deep learning models for identifying moving objects',
      'Improved one of the existing feature detection algorithms for faster mapping and localization',
      'Modified mapping algorithm to detect duplicate features based on camera pose'
    ]
  },
  {
    title: 'Research Engineer - Humanitarian Technologies Lab, India',
    responsibilities: [
      'Hand Gesture Based Wheelchair navigation and Autonomous Wheelchair Navigation',
      'Responsible for writing codes for wheelchair navigation using Hand Gestures',
      'Combined data from multiple sensors for safe navigation of wheelchair',
      'Worked in the development of project “Autonomous Wheelchair Navigation”'
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
