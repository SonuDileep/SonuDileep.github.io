import React from 'react';
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap';

function Writings() {
  return (
    <div className='aboutpagebackground'>
      <Container>
        <Row className='textbackground'>
          <Col md={7}>
            <h4>Writings</h4>
            <ul style={{ whiteSpace: 'nowrap' }}>
              <li>
                <a
                  href="https://www.climatechange.ai/papers/neurips2020/32/paper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'RoyalBlue', textDecoration: 'none' }}
                >
                  Automated Identification of Oil Field Features using CNNs
                </a> @ NeurIPS 2020 workshop Tackling Climate Change with Machine Learning
              </li>
              <li>
                <a
                  href="https://www.hou.usra.edu/meetings/lpsc2021/pdf/1626.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'RoyalBlue', textDecoration: 'none' }}
                >
                  Deep Learning for an Inventory of Small to Midsize Volcanic Edifices on Mars
                </a> @ 52nd Lunar and Planetary Science Conference (LPSC) - Poster
              </li>
              <li>
                <a
                  href="https://www.amrita.edu/publication/design-implementation-and-analysis-low-cost-drawing-bot-educational-purpose"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'RoyalBlue', textDecoration: 'none' }}
                >
                  Design, Implementation and Analysis of a Low Cost Drawing Bot for Educational Purpose
                </a> @ International Journal of Pure and Applied Mathematics
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Writings;
