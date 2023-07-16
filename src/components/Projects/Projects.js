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
    description: 'This project uses Siamese Network architecture for one-shot learning, specifically aimed at face authentication tasks. The models are trained to identify individuals by learning and recognizing unique facial patterns. The project offers a comprehensive understanding of the implementation details, thus demonstrating the practical application of one-shot learning methods in real-world scenarios.',
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
    description: 'This project focuses on the application of deep learning in the renewable energy sector, where it leverages a pretrained MobileNetV2 model within an encoder-decoder framework to perform wind turbine blade segmentation.  The architecture\'s purpose is to accurately identify and segment wind turbine blades from images, thus facilitating inspection and damage assessment. Some classical image processing methods using Convex Hull are applied on the output of deep learning model to improve the results and for deployment applications.',
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
    description: 'In this data-intensive project, a combination of three advanced deep learning models - Stacked LSTM, Bidirectional LSTM, and Multivariate CNN - are employed to conduct a comprehensive spatial analysis of the COVID-19 spread. The project aims at processing vast volumes of COVID-19 data to accurately predict case counts in the near future. Distributed computing techniques are used to effectively handle the large scale of the data.',
    tools: 'Python, Keras, Distributed-TensorFlow',
    images: []
  },
  {
    name: 'Detecting the Most Popular Topics from Live Twitter Message Streams',
    link: 'https://github.com/SonuDileep/Live-Twitter-Stream',
    description: 'This project serves as a real-time system, developed to analyze live Twitter message streams and identify trending topics. The project uses lossy counting algorithm in conjunction with Apache Storm and Apache Zookeeper to handle and process the live data stream effectively.',
    tools: 'Java, Apache Storm, Apache Zookeeper',
    images: []
  },
  {
    name: 'Image Rendering using Ray Tracing',
    link: 'https://github.com/SonuDileep/RayTracer',
    description: 'This project develops a Ray Tracer program capable of rendering photorealistic images of 3D models. It uses Perspective Projection and Camera modeling techniques to capture the 3D world in 2D images, thereby highlighting the power of ray tracing in graphics rendering.',
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
    description: 'This work investigates the fundamental properties of a citation network and how they evolve over time. It involves the utilization of Apache Storm and Hadoop for measuring the network\'s characteristics. The program provides an insightful analysis of an evolving citation network, offering valuable insights into the behavior and development patterns of such networks.',
    tools: 'Scala, Apache Spark, Apache Hadoop',
    images: []
  },
  {
    name: 'Satellite Image Annotation Plugin',
    link: 'https://github.com/SonuDileep/YOLO-Annotation-Tool-for-Satellite-Images',
    description: 'This project involves developing a plugin for the open-source software QGIS, designed for the annotation of satellite images from various sources like Google, Bing, and ESRI. The plugin generates images and corresponding annotation files, facilitating the training of YOLO (v2, v3, and v4) models for satellite image analysis tasks',
    tools: 'Python, PyQt',
    images: []
  },
  {
    name: 'Well Site Identification from Satellite imagery',
    link: 'https://github.com/SonuDileep/Well-Site-Identification',
    description: 'This deep learning project employs a YOLOv4 model to detect well sites in the DJ Basin, Colorado from satellite imagery. The model, trained on 1500 well pad images and 500 site equipment images, achieved a remarkable average well pad detection accuracy of 97%. This study contributes to the broader field of methane emission research in Colorado.',
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
    description: 'This Python implementation leverages the Karhunen-Loeve (KL) mapping technique for image and data compression tasks. As an optimal dimensionality reduction mapping technique, KL aims to identify the subspace where most of the data\'s information resides, thus efficiently condensing the information for storage and transmission.',
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
    description: 'This project explores the efficacy of three different manifold learning techniques - Multidimensional Scaling (MDS), Isomap, and Locally Linear Embedding (LLE) - for image classification tasks. The analysis provides a comparative perspective on these techniques, shedding light on their performance and applicability in real-world image classification scenarios.',
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
    description: 'This project deploys a VGG-16 model to classify wildlife animal images using transfer learning.',
    tools: 'Python, Keras, TensorFlow, OpenCV, VGG16',
    images: []
  },
  {
    name: 'Binary Mask to JSON',
    link: 'https://github.com/SonuDileep/Binary_Mask_2_Json',
    description: 'This utility tool is developed in Python to generate a JSON file from a Binary Mask Image for training a MASK-RCNN Segmentation Model. ',
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
