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


const writings = [
	{
	title: 'Automated Identification of Oil Field Features using CNNs',
	href: 'https://www.climatechange.ai/papers/neurips2020/32/paper.pdf',
	event: ' @ NeurIPS 2020 workshop Tackling Climate Change with Machine Learning'
	},
	{
	title: 'Deep Learning for an Inventory of Small to Midsize Volcanic Edifices on Mars',
	href: 'https://www.hou.usra.edu/meetings/lpsc2021/pdf/1626.pdf',
	event: ' @ 52nd Lunar and Planetary Science Conference (LPSC) - Poster'
	},
	{
	title: 'Design, Implementation and Analysis of a Low Cost Drawing Bot for Educational Purpose',
	href: 'https://www.amrita.edu/publication/design-implementation-and-analysis-low-cost-drawing-bot-educational-purpose',
	event: ' @ International Journal of Pure and Applied Mathematics'
	},
	];

function WritingsPage() {
    return (
    <>
      <div className="section" style={{ backgroundColor: 'white' }}>
        <div className='aboutpagebackground'>
          <Container>
            <div style={{ marginTop: '10%' }}>
              <div className="owner">
              <ul style={{ paddingLeft: '20px' }}>
		  {writings.map((writing, i) => (
		    <li key={i} style={{ margin: '5px 0' , lineHeight: '1.3', textAlign: 'left' }}>
		      <a
			href={writing.href}
			target="_blank"
			rel="noopener noreferrer"
			style={{ color: 'RoyalBlue', textDecoration: 'none' }}
		      >
			{writing.title}
		      </a> 
		      {writing.event}
		    </li>
		  ))}
		</ul>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default WritingsPage;
