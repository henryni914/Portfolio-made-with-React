import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Footer() {

    return (
        <Navbar bg="dark" variant="dark" sticky="bottom" className="text-white"> 
        {/* className="mt-2" */}
        <Container>
            <p>Copyright 2020</p>
        </Container>
        </Navbar>
    )
}