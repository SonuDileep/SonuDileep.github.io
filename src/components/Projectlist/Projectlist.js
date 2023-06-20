import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import Masonry from 'react-masonry-css';


import fa_1 from '../../Assets/FA_1.png'
import RT_1 from '../../Assets/RT_1.png'
import wb from '../../Assets/windblade.png'
import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import todolist from '../../Assets/todolist.png'


const projects = [
  {
    name: 'Face Authentication using Siamese Networks',
    link: 'https://github.com/SonuDileep/Face-Authentication-using-Siamese-Networks',
    description: 'Siamese Networks are one of the most popular one-shot learning algorithms. This project shows how to implement one-shot learning methods for Face authentication.',
    tools: 'Python, Keras, TensorFlow, OpenCV',
    images: [fa_1]
  },
  {
    name: 'Wind Turbine Blade Segmentation',
    link: 'https://github.com/SonuDileep/WindTurbine-Segmentation',
    description: 'An encoder-decoder architecture based on pretrained MobileNetV2 for segmenting wind blades.',
    tools: 'Python, Keras, TensorFlow, OpenCV',
    images: [wb]
  },
  {
    name: 'Spatial Analysis of COVID-19 Impact using Deep Learning',
    link: 'https://github.com/SonuDileep/COVID-Prediction-using-LSTM',
    description: 'In this work three deep learning models – Stacked LSTM, Bidirectional LSTM, and Multivariate CNN are used for spatial analysis of covid spread using distributed computing. The goal is to process the massive amount of covid data to predict the covid cases for next few days.',
    tools: 'Python, Keras, Distributed-TensorFlow',
    images: []
  },
  {
    name: 'Detecting the Most Popular Topics from Live Twitter Message Streams',
    link: 'https://github.com/SonuDileep/Live-Twitter-Stream',
    description: 'A program to detect the most popular topics from live twitter message streams using lossy counting algorithm with Apache Storm and Apache Zookeeper.',
    tools: 'Java, Apache Storm, Apache Zookeeper',
    images: []
  },
  {
    name: 'Image Rendering using Ray Tracing',
    link: 'https://github.com/SonuDileep/RayTracer',
    description: 'A raytracer program which could render photo-realistic images of 3D models using Perspective Projection and Camera modeling.',
    tools: 'C++, Eigen',
    images: [RT_1]
  },
  // More projects can be added following the same format
];

function ProjectList() {
  // Define your breakpoint columns
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-gridp"
            columnClassName="my-masonry-grid_columnp">
            {projects.map((project, index) => (
              <ProjectCard
                title={project.name}
                description={project.description}
                tools={project.tools}
                imgPath={project.images[0]} 
                ghLink={project.link}
                isBlog={false}
                key={index}
              />
            ))}
          </Masonry>
        </Container>
      </Container>
    </div>
  );
}

export default ProjectList;
