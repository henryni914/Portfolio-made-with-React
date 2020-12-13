import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../index.css'

export default function PageJumbotron() {

    // const styles = {
    //     backgroundimage: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
    // }
    return (

        <>
            <div className='mainJumbo d-flex justify-content-center align-items-center text-center'>
                <Row>
                    <Col xs={12}>
                        <h1>Henry Ni</h1>
                        <br></br>
                        <h2>Full Stack Web Developer</h2>
                        {/* <p>
                            Hello, I am a full stack web developer with a background in JavaScript, React, Node.js, MongoDB, MySQL, Bootstrap, and more.
                    </p>
                        <p>
                            I enjoy the challenges of learning new technologies and languages in order to create modern and functional web applications.
                    </p>
                        <p>
                            Please see below for links to my resume, projects, and contact information.
                    </p>
                        <p>
                            Email: ni.henry914@gmail.com
                    </p>
                        <p>
                            Phone: (302) 358-1294
                    </p> */}
                        {/* <p>
                            <Button variant="primary" className='mr-2 mt-2' href="https://github.com/henryni914" target="_blank">Github</Button>
                            <Button variant="primary" className='mr-2 mt-2' href="https://drive.google.com/file/d/16BnBU24hodbMOze6REZ7yxqTd4uyUEd5/view?usp=sharing" target="_blank">Resume</Button>
                            <Button variant="primary" className='mr-2 mt-2' href="https://www.linkedin.com/in/henry-ni-79b118102/" target="_blank">LinkedIn</Button>
                        </p> */}
                    </Col>
                    {/* <Col> */}
                    {/* <Image
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            rounded
                            width='100%'
                            height='250px' /> */}
                    {/* <img
                        className='rounded circle'
                        width='100%'
                        height='100%'
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="Third slide"
                    /> */}
                    {/* </Col> */}
                </Row>

            </div>
        </>
    )
}