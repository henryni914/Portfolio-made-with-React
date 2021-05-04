import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function ProjectModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" className='ml-2 mt-2' onClick={handleShow}>
                Technologies
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.tech.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Front End:</h6>
                    {props.tech.front}
                </Modal.Body>
                <Modal.Body>
                    <h6>Back End:</h6>
                    {props.tech.back}
                </Modal.Body>
                <Modal.Body>
                    <h6>Other Resources:</h6>
                    {props.tech.others}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}