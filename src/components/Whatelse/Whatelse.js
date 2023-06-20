import React from 'react';
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap';

function Whatelse() {
  return (
    <div className='aboutpagebackground'>
      <Container>
        <Row className='textbackground'>
          <Col md={7}>
            {/* Music section */}
            <h4>
              Music
            </h4>
            <p>
              Fav Genre - Rock&Roll, Progressive Rock, EDM, Melodic dubstep, Classical Music
              <br />
              Fav Band - Pink Floyd, Led Zeppelin, The Doors, The Beatles, Eagles, Linkin Park, Coldplay
              <br />
              Fav Artist - DeadMau5, Eminem, Avicii, Ludovico Einaudi
              <br />
            </p>
            <p align='center'>
              <iframe
                width='420'
                height='315'
                src='https://www.youtube.com/embed/EMneCi9F_UQ?autoplay=1&mute=1'
                title='Music Video'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </p>

            {/* Sports section */}
            <h4>
              Sports
            </h4>
            <p>
              Fav Sports - Soccer
              <br />
              Fav Players - Ronaldinho, Messi, C.Ronaldo
              <br />
            </p>
            <p align='center'>
              <iframe
                width='420'
                height='315'
                src='https://www.youtube.com/embed/3ppPqk7PZBM?autoplay=1&mute=1'
                title='Sports Video'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Whatelse;