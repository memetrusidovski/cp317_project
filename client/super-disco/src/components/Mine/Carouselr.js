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
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://polar-bastion-98856.herokuapp.com/waterloo4.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://polar-bastion-98856.herokuapp.com/waterloo2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
)
}

export default Carouselr;