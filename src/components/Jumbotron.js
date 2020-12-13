import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../index.css'

export default function PageJumbotron() {

    return (

        <>
            <div className='mainJumbo d-flex justify-content-center align-items-center text-center'>
                <Row>
                    <Col xs={12}>
                        <h1>Henry Ni</h1>
                        <br></br>
                        <h2>Full Stack Web Developer</h2>
                    </Col>
                </Row>

            </div>
        </>
    )
}