import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import conagra1 from "../../Images/conagra1.jpg";
import conagra2 from "../../Images/conagra2.jpg";
import conagra3 from "../../Images/conagra3.jpg";
import sponsors1 from "../../Images/sponsors01.png";
import sponsors2 from "../../Images/sponsors02.png";
import sponsors3 from "../../Images/sponsors03.png";
import booths from "../../Images/Finance.jpeg";

import "./Styles/SponsorCarousel.css";

function SponsorCarousel() {
  return (
    <div className='carouselContainerSponsor'>
        <p className='titleText'>Sponsors</p>
        <Carousel style={{ maxWidth: '800px', maxHeight: '800px', margin: '0 auto' }}>
        <Carousel.Item>
        <div className='carouselImage'>
            <img style={{ height: 600 }} src={sponsors1} />
        </div>
            <Carousel.Caption>
            <h3>Don't Panic Labs representing</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carouselImage'>
            <img src={sponsors2} />
        </div>
            <Carousel.Caption>
            <h3>Conagra Brands at Opening Keynote</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carouselImage'>
            <img src={sponsors3} />
        </div>
            <Carousel.Caption>
            <h3>Don't Panic Labs at Opening Keynote</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carouselImage'>
            <img src={conagra1} />
        </div>
            <Carousel.Caption>
            <h3>Conagra Tech Talk pt. 1</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carouselImage'>
            <img src={conagra2} />
        </div>
            <Carousel.Caption>
            <h3>Conagra Tech Talk pt. 2</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carouselImage'>
            <img src={conagra3} />
        </div>
            <Carousel.Caption>
            <h3>Conagra Tech Talk pt. 3</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carouselImage'>
            <img src={booths} />
        </div>
            <Carousel.Caption>
            <h3>Sponsor Booths</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default SponsorCarousel;