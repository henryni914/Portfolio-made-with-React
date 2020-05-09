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
                <img
                    className="d-block w-100"
                    height='500'
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>E-Commerce Shop</h3>
                    <p>The motivation behind creating this application was the goal of creating a MERN full stack web application that would allow store owners or individuals to market/brand their products or services online. In this day and age, establishing an online presence can be a key factor of whether a business, brand or image can stay afloat and survive. </p>
                    <Button className='ml-2'href="https://ecommerce-bootcamp.herokuapp.com/" target="_blank">Demo</Button>
                    <Button className='ml-2'href="https://github.com/henryni914/ECommerce_WebApp" target="_blank">Github</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height='500'
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>DonorSpot</h3>
                    <p>This web application allows users to connect to charities or fundraisers they would like to support with monetary donations. In addition to donating, users can also create their own charity or fundraising page to ask for support from the visitors of the site.</p>
                    <Button className='ml-2' href="https://mighty-stream-41185.herokuapp.com/" target="_blank">Demo</Button>
                    <Button className='ml-2' href="https://github.com/Anierva95/DonorSpot" target="_blank">Github</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height='500'
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Personal dashboard</h3>
                    <p>The motivation behind creating a personal dashboard is to create a user customizable page that has information they want displayed to them readily available with just a glance. </p>
                    <Button className='ml-2'href="https://henryni914.github.io/personal-dashboard/" target="_blank">Demo</Button>
                    <Button className='ml-2'href="https://github.com/henryni914/personal-dashboard" target="_blank">Github</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

{/* <Row align='center'>
                    <Card className='col-md-3 mb-2 ml-5'>
                        <Card.Img src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
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
                </Row> */}