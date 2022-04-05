import React, { useContext } from "react";
import { Carousel } from 'react-bootstrap';
require('./carouselr.css');
require('bootstrap/dist/css/bootstrap.min.css');

function Carouselr() {

  return (
    <div className="car">
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://polar-bastion-98856.herokuapp.com/victoria4.jpg"
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3>Vicotria Park</h3>
      <p>Explore the beautiful environmental friendly Victoria Park!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://polar-bastion-98856.herokuapp.com/waterloo4.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Fabulous Flower Bed</h3>
      <p>Enjoy the amazing colourful views of the annual spring flowers.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://polar-bastion-98856.herokuapp.com/waterloo2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Waterloo Park Riverside</h3>
      <p>Enjoy the beautiful riverside view with cold breezes and the beautiful wight of the Grand River beneath.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
)
}

export default Carouselr;