import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import Masonry from 'react-masonry-css';


import fa_1 from '../../Assets/FA_1.png'
import RT_1 from '../../Assets/RT_1.png'
import WP_1 from '../../Assets/WP_1.png'
import WP_2 from '../../Assets/WP_2.png'
import KL_12 from '../../Assets/KL_12.png'
import ML_1 from '../../Assets/ML_1.png'
import wb from '../../Assets/windblade.png'


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
  {
    name: 'Explorative Analytics of an Evolving Citation Network',
    link: 'https://github.com/SonuDileep/Explorative-Analytics-of-an-Evolving-Citation-Network-using-Apache-Spark',
    description: 'A program to measure fundamental network properties with a citation network and investigate how they evolve using Apache Storm and Hadoop.',
    tools: 'Scala, Apache Spark, Apache Hadoop',
    images: []
  },
  {
    name: 'Satellite Image Annotation Plugin',
    link: 'https://github.com/SonuDileep/YOLO-Annotation-Tool-for-Satellite-Images',
    description: 'This is a plugin developed to annotate satellite images. The plugin runs inside an open source software-QGIS. Satellite images from different sources like Google, Bing, ESRI can be used. The plugin create images and annotation files to train Yolo(v2,v3 and v4) but can also be extended for other deep learning architectures.',
    tools: 'Python, PyQt',
    images: []
  },
  {
    name: 'Well Site Identification from Satellite imagery',
    link: 'https://github.com/SonuDileep/Well-Site-Identification',
    description: 'This is a deep learning detection model based on YOLOv4 to find well sites in DJ Basin, Colorado. This works was part of the methane emission studies in Colorado. Trained a YOLOv4 model with 1500 well pad images and 500 site equipment images. The entire pipeline is implemented in QGIS. Model acheived an average well pad detection accuracy of 97% in DJ Basin, Colorado.',
    tools: 'Python, YOLOv4, OpenCV',
    images: [WP_1, WP_2]
  },
  {
    name: 'KL Transform for Image Compression',
    link: 'https://github.com/SonuDileep/KL-transform-for-Image-Data-Compression',
    description: 'A python implementation of Karhunen-Loeve (KL) mapping technique for image/data compression. KL is an optimal dimensionality reduction mapping technique and is based on finding the best orthonormal basis. The goal of this technique is to find the subspace where most of the information lies.',
    tools: 'Python, OpenCV',
    images: [KL_12]
  },
  {
    name: 'Manifold Learning Based Image Classification',
    link: 'https://github.com/SonuDileep/Manifold-Learning/blob/main/Final_Project.pdf',
    description: 'Project focuses on analyzing and studying three different manifold learning techniques - Multidimensional Scaling (MDS), Isomap, Locally Linear Embedding(LLE) for image classification.',
    tools: 'Python, OpenCV',
    images: [ML_1]
  },
  {
    name: 'Wildlife Animal Classification using VGG16',
    link: 'https://github.com/SonuDileep/Wildlife-Image-Classification',
    description: 'A VGG-16 architecture for wildlife animal classification using transfer learning.',
    tools: 'Python, Keras, TensorFlow, OpenCV, VGG16',
    images: []
  },
  {
    name: 'Binary Mask to JSON',
    link: 'https://github.com/SonuDileep/Binary_Mask_2_Json',
    description: 'This python code helps to create a JSON file from Binary Mask Image for training a MASK-RCNN Segmentation Model',
    tools: 'Python, Numpy',
    images: [KL_12]
  },
  // More projects can be added following the same format
];

function ProjectList() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Masonry
            breakpointCols={{
              default: 3,
              1100: 3,
              700: 2,
              500: 1
            }}
            className="my-masonry-gridp"
            columnClassName="my-masonry-grid_columnp"
          >
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
        </Row>
      </Container>
    </div>
  );
}

export default ProjectList;
