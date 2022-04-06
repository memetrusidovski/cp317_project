import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Col, Row, Container } from 'react-bootstrap';
import axios from "axios";
import React from "react";

interface CardProps {
  href: string;
  src: string;
  description: string;
  title: string;
}

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const Places = () => {

    const [places, setPlaces] = React.useState();

    //React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      const places = response.data;
      console.log(places);
        setPlaces(places);
    });
    //}, []);


    const MakeCard = (  {href, src, description, title}: CardProps) => {
        return(
        <div className="signup">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        )
    }

  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <MakeCard href="/" src="https://polar-bastion-98856.herokuapp.com/waterloo1.jpg"
                    description="Waterloo Park is an urban park situated in Waterloo, Ontario, Canada "
                    title="Waterloo Park" />
                </Col>
                <Col>
                    <MakeCard href="/" src="https://polar-bastion-98856.herokuapp.com/victoria1.jpg"
                    description="Victoria Park opened in 1896, making it our oldest park."
                    title="Waterloo Park" />
                </Col>
                <Col>
                    <MakeCard href="/" src="https://polar-bastion-98856.herokuapp.com/erbsville3.jpg"
                    description="Kart racing or karting is a road racing variant of motorsport with open-wheel."
                    title="Erbsville Kartway" />
                </Col>
         
            </Row>
        </Container>
         
    </div>
    
  );
};

export default Places;
