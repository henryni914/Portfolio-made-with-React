import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SkillContainer() {
    return (
        <Jumbotron className='d-block w-100'>
            <Row>
               <ol>
                   <li>JavaScript</li>
                   <li>ReactJS</li>
                   <li>CSS</li>
                   <li>MERN Stack</li>
               </ol>
            </Row>

        </Jumbotron>
    )
}