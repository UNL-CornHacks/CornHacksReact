import Carousel from 'react-bootstrap/Carousel';
import firstPlace from "../../Images/1st_Place_Winners.jpg";
import secondPlace from "../../Images/2nd_Place_Winners.jpg";
import thirdPlace from "../../Images/3rd_Place_Winners.jpg";
import image1 from "../../Images/01cornhacks24.png";
import image2 from "../../Images/02cornhacks24.png";
import image3 from "../../Images/03cornhacks24.png";

import "./Styles/HomeCarousel.css";

function HomeCarousel() {
  return (
    <div className='carouselContainer'>
        <Carousel style={{ maxWidth: '800px', maxHeight: '800px', margin: '0 auto' }}>
        <Carousel.Item>
        <div className='carouselImage'>
            <img src={firstPlace} />
        </div>
            <Carousel.Caption>
            <h3>1st place project</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carouselImage'>
            <img src={secondPlace} />
        </div>
            <Carousel.Caption>
            <h3>2nd place project</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carouselImage'>
            <img src={thirdPlace} />
        </div>
            <Carousel.Caption>
            <h3>3rd place project</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carouselImage'>
            <img src={image1} />
        </div>
            <Carousel.Caption>
            <h3>working pt. 1</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carouselImage'>
            <img src={image2} />
        </div>
            <Carousel.Caption>
            <h3>working pt. 2</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carouselImage'>
            <img src={image3} />
        </div>
            <Carousel.Caption>
            <h3>opening keynote</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default HomeCarousel;