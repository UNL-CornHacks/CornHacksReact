
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../Images/Chairs.png";

import "./Styles/SponsorCarousel.css";

function HomeCarousel() {
  return (
    <div className='carouselContainer'>
        <Carousel style={{ maxWidth: '800px', maxHeight: '400px', margin: '0 auto' }}>
        <Carousel.Item>
        <div className='carouselImage'>
            <img src={image1} />
        </div>
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carouselImage'>
            <img src={image1} />
        </div>
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carouselImage'>
            <img src={image1} />
        </div>
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default HomeCarousel;