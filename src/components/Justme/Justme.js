import React from "react";
import { Container } from "reactstrap";
import CarouselComponent from "./Carousel";

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

const items = [
  {
    src: require("assets/images/RT_1.jpg"),
    altText: "Somewhere",
    caption: "Somewhere",
  },
  {
    src: require("assets/images/RT_2.jpg"),
    altText: "Somewhere else",
    caption: "Somewhere else",
  },
  {
    src: require("assets/images/WP_1.png"),
    altText: "Here it is",
    caption: "Here it is",
  },
  {
    src: require("assets/images/RT_1.jpg"),
    altText: "Somewhere",
    caption: "Somewhere",
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
				<h4 style={{ borderBottom: '1px solid lightgray',paddingBottom: '0rem',marginBottom: '0.7rem', color: '#495871'  }}>{hobby.title}</h4>
				{Object.entries(hobby.details).map(([key, value], i) => (
				  <p key={i}>
				    {key} - {value}
				  </p>
				))}
				<p align='center'>
				  <iframe
				    height='250'
				    width='350'
				    src={hobby.video}
				    title={`${hobby.title} Video`}
				    frameBorder='0'
				    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				    allowFullScreen
				  ></iframe>
				</p>
			      </div>
			    ))}
{/*		<CarouselComponent items={items} />
*/}
          </div>
          </div>
          </Container>
          
          </div>
      </div>
    </>
  );
}

export default JustmePage;
