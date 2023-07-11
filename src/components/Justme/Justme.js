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

const hobbies = [
  {
    title: 'Music',
    details: {
      'Fav Genre': 'Rock&Roll, Progressive Rock, EDM, Melodic dubstep, Classical Music',
      'Fav Band': 'Pink Floyd, Led Zeppelin, The Doors, The Beatles, Eagles, Linkin Park, Coldplay',
      'Fav Artist': 'DeadMau5, Eminem, Avicii, Ludovico Einaudi',
    },
    video: 'https://www.youtube.com/embed/EMneCi9F_UQ?autoplay=1&mute=1',
  },
  {
    title: 'Sports',
    details: {
      'Fav Sports': 'Soccer',
      'Fav Players': 'Ronaldinho, Messi, C.Ronaldo',
    },
    video: 'https://www.youtube.com/embed/3ppPqk7PZBM?autoplay=1&mute=1',
  },
];

function JustmePage() {
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

		{hobbies.map((hobby, index) => (
			      <div key={index}>
				<h4>{hobby.title}</h4>
				{Object.entries(hobby.details).map(([key, value], i) => (
				  <p key={i}>
				    {key} - {value}
				  </p>
				))}
				<p align='center'>
				  <iframe
				    width='420'
				    height='315'
				    src={hobby.video}
				    title={`${hobby.title} Video`}
				    frameBorder='0'
				    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				    allowFullScreen
				  ></iframe>
				</p>
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

export default JustmePage;
