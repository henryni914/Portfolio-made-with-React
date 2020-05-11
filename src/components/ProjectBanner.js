import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default function ProjectBar() {

    return (
        <Navbar bg="dark" variant="dark" text-align='center'>
            <Navbar.Brand>
                Projects
            </Navbar.Brand>
            {/* <Navbar.Text>
                Projects
        </Navbar.Text> */}
        </Navbar>
    )
}