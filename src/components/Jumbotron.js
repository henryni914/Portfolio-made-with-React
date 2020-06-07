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
           

            `}
                {/*       
color: white;
            // background: url("https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80");
            background: url("https://images.unsplash.com/photo-1422207258071-70754198c4a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3882&q=80"); 
            */}

            </style>
            <Jumbotron className='d-block w-100'>
                <Row>
                    <Col xs={8}>
                        <h1>Henry Ni</h1>
                        <p>
                            Hello, I am an aspiring full stack web developer with a background in JavaScript, React, Node.js, MongoDB, MySQL, Bootstrap, and more. I enjoy the challenges of learning new technologies and languages in order to create modern and functional web applications. Please see below for links to my resume, projects, and contact information.
                    </p>
                        <p>
                            Email: ni.henry914@gmail.com
                    </p>
                        {/* <p>
                            <Button variant="primary" className='mr-2 mt-2' href="https://github.com/henryni914" target="_blank">Github</Button>
                            <Button variant="primary" className='mr-2 mt-2' href="https://drive.google.com/file/d/16BnBU24hodbMOze6REZ7yxqTd4uyUEd5/view?usp=sharing" target="_blank">Resume</Button>
                            <Button variant="primary" className='mr-2 mt-2' href="https://www.linkedin.com/in/henry-ni-79b118102/" target="_blank">LinkedIn</Button>
                        </p> */}
                    </Col>
                    <Col>
                        <Image
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            rounded
                            width='100%'
                            height='250px' />
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