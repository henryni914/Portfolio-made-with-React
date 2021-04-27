import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../index.css'

export default function PageJumbotron() {

    return (
        // d-flex justify-content-center align-items-center text-center
        <div className='mainJumbo '>
            <div className='mainJumbo_text-box'>
                <h1 className='mainJumbo-primary'>
                    <span className='mainJumbo-primary--main'>Henry Ni</span>
                    <span className='mainJumbo-primary--sub'>Full Stack Web Developer</span>
                </h1>
            </div>
        </div>
    )
}

{/* <Row>
                <Col xs={12}>
                    <h1>Henry Ni</h1>
                    <br></br>
                    <h2>Full Stack Web Developer</h2>
                </Col>
            </Row> */}
