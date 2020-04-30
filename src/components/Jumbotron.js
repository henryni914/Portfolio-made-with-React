import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function PageJumbotron() {

    const styles = {
        backgroundimage: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
    }
    return (

        <Jumbotron style={styles}>
            <Row>
                <Col xs={8}>
                    <h1>Welcome to my portfolio!</h1>
                    <p>
                        Add a picture that spans the banner and introduces myself in a sentence or two.
                    </p>
                    <p>
                        <Button variant="primary" className='mr-2'>Github</Button>
                        <Button variant="primary" className='mr-2'>Resume</Button>
                        <Button variant="primary" className='mr-2'>LinkedIn</Button>
                    </p>
                </Col>
                <Col>
                    <Image
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        rounded
                        width='100%'
                        height='100%' />
                    {/* <img
                        className='rounded circle'
                        width='100%'
                        height='100%'
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="Third slide"
                    /> */}
                </Col>
            </Row>

        </Jumbotron>
    )
}