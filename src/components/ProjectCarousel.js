import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import addtocart from '../images/AddToCart.png';
import donorHome from '../images/DonorSpot Home.png';
import rwfHome from '../images/RwfHome.png';

export default function ProjectCarousel() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

        <Carousel className='carousel-multi-item' activeIndex={index} onSelect={handleSelect} fluid>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height='500'
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Container>
                        <Row>
                            <Col xs={12} md={12}>
                                <Image width='600' height='300' src={rwfHome} rounded fluid />
                            </Col>
                        </Row>
                    </Container>
                    <h3>Reviews With Friends</h3>
                    <p>A full stack web app for users to keep track of films & movies that they have watched, liked or have yet to watch.
                    Explore and search using either the search feature or using the browse section.
                        Users are also able to submit and edit their own reviews as well as liking other users' reviews. </p>
                    <Button className='ml-2' href="https://reviews-with-friends.herokuapp.com/" target="_blank">Demo</Button>
                    <Button className='ml-2' href="https://github.com/henryni914/Reviews-with-friends" target="_blank">Github</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item align='center'>
                <img
                    className="d-block w-100"
                    height='500'
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                    // src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <Container>
                        <Row>
                            <Col xs={12} md={12}>
                                <Image width='600' height='300' src={addtocart} rounded fluid />
                            </Col>
                        </Row>
                    </Container>
                    <h3>E-Commerce Shop</h3>
                    <p>MERN full stack web application that allows store owners or individuals to display their products on an online platform.
                    Auth0 and Stripe were used for user authentication and payment processing, respectively.
                    Utilizes RESTful API for inventory management and the blog feature.</p>
                    <Button className='ml-2' href="https://immense-spire-93774.herokuapp.com/" target="_blank">Demo</Button>
                    <Button className='ml-2' href="https://github.com/henryni914/ECommerce_WebApp" target="_blank">Github</Button>
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
                    <Container>
                        <Row>
                            <Col xs={12} md={12}>
                                <Image width='600' height='300' src={donorHome} rounded fluid />
                            </Col>
                            {/* <Col xs={6} md={6}>
                                <Image width='500' height='250' src={charityPage} rounded fluid />
                            </Col> */}
                        </Row>
                    </Container>
                    <h3>DonorSpot</h3>
                    <p>This web application allows users to connect to charities or fundraisers they would like to support with monetary donations. 
                        In addition to donating, users can also create their own charity or fundraising page to ask for support from the visitors of the site.</p>
                    <Button className='ml-2' href="https://mighty-stream-41185.herokuapp.com/" target="_blank">Demo</Button>
                    <Button className='ml-2' href="https://github.com/Anierva95/DonorSpot" target="_blank">GitHub</Button>
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