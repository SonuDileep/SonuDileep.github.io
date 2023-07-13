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
import fa_1 from '../../assets/images/FA_1.png'
import RT_1 from '../../assets/images/RT_1.png'
import WP_1 from '../../assets/images/WP_1.png'
import WP_2 from '../../assets/images/WP_2.png'
import KL_12 from '../../assets/images/KL_12.png'
import ML_1 from '../../assets/images/ML_1.png'
import wb from '../../assets/images/windblade.png'


const projects = [
  {
    name: 'Face Authentication using Siamese Networks',
    link: 'https://github.com/SonuDileep/Face-Authentication-using-Siamese-Networks',
    description: 'Siamese Networks are one of the most popular one-shot learning algorithms. This project shows how to implement one-shot learning methods for Face authentication.',
    tools: 'Python, Keras, TensorFlow, OpenCV',
    images:       [{
        src: fa_1,
        style: {maxHeight: '80%', maxWidth: '400px', minWidth: '50px', minHeight: '50px'}
      }
    ]
  },
  {
    name: 'Wind Turbine Blade Segmentation',
    link: 'https://github.com/SonuDileep/WindTurbine-Segmentation',
    description: 'An encoder-decoder architecture based on pretrained MobileNetV2 for segmenting wind blades.',
    tools: 'Python, Keras, TensorFlow, OpenCV',
    images:       [{
        src: wb,
        style: {maxHeight: '80%', maxWidth: '500px', minWidth: '50px', minHeight: '50px'}
      }
    ]    
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
    images:       [{
        src: RT_1,
        style: {maxHeight: '80%', maxWidth: '350px', minWidth: '50px', minHeight: '50px'}
      }
    ]
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
    images:       [{
        src: WP_1,
        style: {maxHeight: '80%', maxWidth: '500px', minWidth: '50px', minHeight: '50px'}
      },
      {
        src: WP_2,
        style: {maxHeight: '80%', maxWidth: '500px', minWidth: '50px', minHeight: '50px'}
      },
    ]
  },
  {
    name: 'KL Transform for Image Compression',
    link: 'https://github.com/SonuDileep/KL-transform-for-Image-Data-Compression',
    description: 'A python implementation of Karhunen-Loeve (KL) mapping technique for image/data compression. KL is an optimal dimensionality reduction mapping technique and is based on finding the best orthonormal basis. The goal of this technique is to find the subspace where most of the information lies.',
    tools: 'Python, OpenCV',
    images:       [{
        src: KL_12,
        style: {maxHeight: '80%', maxWidth: '500px', minWidth: '50px', minHeight: '50px'}
      }
    ]
  },
  {
    name: 'Manifold Learning Based Image Classification',
    link: 'https://github.com/SonuDileep/Manifold-Learning/blob/main/Final_Project.pdf',
    description: 'Project focuses on analyzing and studying three different manifold learning techniques - Multidimensional Scaling (MDS), Isomap, Locally Linear Embedding(LLE) for image classification.',
    tools: 'Python, OpenCV',
    images:       [{
        src: ML_1,
        style: {maxHeight: '80%', maxWidth: '800px', minWidth: '50px', minHeight: '50px'}
      }
    ]
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
    images:       []
  },
];

function ProjectsPage() {
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

          {projects.map((project, index) => (
                <div key={index} style={{ marginBottom: '1rem', borderTop: '1px solid lightgray', paddingBottom: '1rem' }}>
                  <h3 style={{ textAlign: 'left' }}>{project.name}</h3>
                  <p style={{ textAlign: 'justify',fontWeight: 400 }}>{project.description}</p>
                  <p style={{ textAlign: 'left',fontWeight: 400  }}>Tools: {project.tools}</p>
                  {
		  project.link.length > 5 &&
		  <p style={{ textAlign: 'left' }}>
		    <a href={project.link} target="_blank" rel="noreferrer">
		      <i className="fa fa-github" style={{ fontSize: '20px' }}></i>
		    </a>
		  </p>
		  }
                  {project.images.map((image, imageIndex) => (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1rem 0' }}>
                      <img key={imageIndex} src={image.src} alt="" style={image.style} />
                    </div>
                  ))}
                </div>
              ))}
          </div>
          </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
