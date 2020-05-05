import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
// import CardBody from 'react-bootstrap/CardImg'
// import CardTitle from'react-bootstrap/CardTitle'
// import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'

export default function ProjectCarousel() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

        <Carousel className='carousel-multi-item' activeIndex={index} onSelect={handleSelect} fluid>
            <Carousel.Item align='center'>
                <Row align='center'>
                    <Card className='col-md-3 mb-2 ml-5'>
                        <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            alt="First slide">
                        </Card.Img>
                        <Card.Body>
                            <Card.Title>
                                DonorSpot
                        </Card.Title>
                            <Card.Text>
                                This is donorspot.
                        </Card.Text>
                        <Button className='ml-2'>
                                Github
                        </Button>
                            <Button className='ml-2'>
                                Demo
                        </Button>
                        </Card.Body>
                    </Card>
                    <Card className='col-md-3 mb-2 ml-5'>
                        <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            alt="First slide">
                        </Card.Img>
                        <Card.Body>
                            <Card.Title>
                                DonorSpot
                        </Card.Title>
                            <Card.Text>
                                This is donorspot.
                        </Card.Text>
                            <Button className='ml-2'>
                                Github
                        </Button>
                            <Button className='ml-2'>
                                Demo
                        </Button>
                        </Card.Body>
                    </Card>
                    <Card className='col-md-3 mb-2 ml-5'>
                        <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            alt="First slide">
                        </Card.Img>
                        <Card.Body>
                            <Card.Title>
                                DonorSpot
                        </Card.Title>
                            <Card.Text>
                                This is donorspot.
                        </Card.Text>
                        <Button className='ml-2'>
                                Github
                        </Button>
                            <Button className='ml-2'>
                                Demo
                        </Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Carousel.Item>
            {/* <img
                        className="d-block w-100"
                        // height='500'
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    // height='500'
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
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
                    // height='500'
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}