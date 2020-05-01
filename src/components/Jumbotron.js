import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function PageJumbotron() {

    // const styles = {
    //     backgroundimage: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
    // }
    return (

        <>
            <style type="text/css">
                {`
            .jumbotron {
            color: white;
            // background: url("https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80");
            background: url("https://images.unsplash.com/photo-1422207258071-70754198c4a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3882&q=80");
            background-size: cover;
            height: 400px;
            background-repeat: no-repeat;
            // background-position: center;
            }

            .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
            }
            `}


            </style>
            <Jumbotron className='d-block w-100'>
                <Row>
                    <Col xs={8}>
                        <h1>Welcome to my portfolio!</h1>
                        <p>
                            Add a picture that spans the banner and introduces myself in a sentence or two.
                    </p>
                        <p>
                            <Button variant="primary" className='mr-2' href="https://github.com/henryni914" target="_blank">Github</Button>
                            <Button variant="primary" className='mr-2'>Resume</Button>
                            <Button variant="primary" className='mr-2'>LinkedIn</Button>
                        </p>
                    </Col>
                    <Col>
                        {/* <Image
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            rounded
                            width='100%'
                            height='200px' /> */}
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
        </>
    )
}