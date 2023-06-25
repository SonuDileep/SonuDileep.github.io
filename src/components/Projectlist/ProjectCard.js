import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

function ProjectCard({ project }) {
  return (
    <Card className="project-card-view">
      {project.images[0] && <Card.Img variant="top" src={project.images[0].src} alt="card-img" style={project.images[0].style} />}
      <Card.Body>
        <Card.Title as="a" href={project.link} className="linkc">
          {project.name}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {project.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          Tools: {project.tools}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;


