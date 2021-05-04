import React from 'react';
import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import ProjectModal from '../components/Modal';
import addtocart from '../images/AddToCart.png';
import donorHome from '../images/DonorSpot Home.png';
import rwfHome from '../images/RwfHome.png';

export default function Skills() {

    let rwf = {
        title: 'Reviews With Friends',
        front: 'React, React Router, Redux, and Semantic UI',
        back: 'Express, MySQL, Node.js, and Sequelize',
        others: 'Auth0, Moment.js, and TMDB API'
    }
    let ecom = {
        title: 'E-Commerce Shop',
        front: 'React & Material UI',
        back: 'Express.js, MongoDB, Mongoose, and Node.js',
        others: 'Auth0, Cloudinary, and Stripe'
    }
    let donor = {
        title: 'DonorSpot',
        front: 'Bulma, Handlebars, JavaScript, and jQuery',
        back: 'Express.js, MySQL, and Node.js',
        others: 'None'
    }

    return (
        <>

            <Container align='center'>
                <h2>Projects</h2>
                <Row>
                    <Col xs={12} md={4}>
                        <Card className='mb-3 mt-3'>
                            <Card.Img variant="top" src={rwfHome}
                                alt="Reviews With Friends">
                            </Card.Img>
                            <Card.Body>
                                <Card.Title>
                                    Reviews With Friends
                                </Card.Title>
                                <Card.Text>
                                    A full stack web app for users to keep track of films & movies that they have watched, liked or have yet to watch.
                                    Explore and search using either the search feature or using the browse section.
                                    Users are also able to submit and edit their own reviews as well as liking other users' reviews.
                                </Card.Text>
                                <Button className='ml-2 mt-2' href="https://github.com/henryni914/Reviews-with-friends" target="_blank">
                                    <i class="bi bi-github"></i> Github
                                </Button>
                                <Button className='ml-2 mt-2' href="https://reviews-with-friends.herokuapp.com/" target="_blank">
                                    Demo
                                </Button>
                                <ProjectModal
                                    tech={rwf}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className='mb-3 mt-3'>
                            <Card.Img variant="top" src={addtocart}
                                alt="E-Commerce Shop">
                            </Card.Img>
                            <Card.Body>
                                <Card.Title>
                                    E-Commerce Shop
                                </Card.Title>
                                <Card.Text>
                                    MERN full stack web application that allows store owners or individuals to display their products on an online platform.
                                    Auth0 and Stripe were used for user authentication and payment processing, respectively.
                                    Utilizes RESTful API for inventory management and the blog feature.
                                </Card.Text>
                                <Button className='ml-2 mt-2' href="https://github.com/henryni914/ECommerce_WebApp" target="_blank">
                                    <i class="bi bi-github"></i> Github
                                </Button>
                                <Button className='ml-2 mt-2' href="https://immense-spire-93774.herokuapp.com/" target="_blank">
                                    Demo
                                </Button>
                                <ProjectModal
                                    tech={ecom}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className='mb-3 mt-3'>
                            <Card.Img variant="top" src={donorHome}
                                alt="DonorSpot">
                            </Card.Img>
                            <Card.Body>
                                <Card.Title>
                                    DonorSpot
                                </Card.Title>
                                <Card.Text>
                                    This web application allows users to connect to charities or fundraisers they would like to support with monetary donations.
                                    In addition to donating, users can also create their own charity or fundraising page to ask for support from the visitors of the site.
                                </Card.Text>
                                <Button className='ml-2 mt-2' href="https://github.com/Anierva95/DonorSpot" target="_blank">
                                    <i class="bi bi-github"></i> Github
                                </Button>
                                <Button className='ml-2 mt-2' href="https://mighty-stream-41185.herokuapp.com/" target="_blank">
                                    Demo
                                </Button>
                                <ProjectModal tech={donor} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

