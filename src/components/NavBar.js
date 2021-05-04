import React from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import Icon from '../images/favicon-32x32.png'

export default function NavBar() {

    return (
        <Navbar bg="dark" variant="dark" id='home' >
            <Navbar.Brand href="#home">
                {/* <img
                    alt=""
                    src={Icon}
                    width="30"
                    height="30"
                    className="d-inline-block align-top rounded"
                />{' '} */}
          HN
        </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#about">About Me</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            {/* <Navbar.Text>
            Web Developer
        </Navbar.Text> */}

        </Navbar>
    )
}


// import { Link, useLocation } from "react-router-dom";

// function NavBar() {

//     const location = useLocation();

//     return (
//         <ul className="nav nav-tabs">
//             <li className="nav-item">
//                 <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
//                     Home
//                 </Link>
//             </li>
//             <li className="nav-item">
//                 <Link to="/project" className={location.pathname === "/project" ? "nav-link active" : "nav-link"}>
//                     Project
//                 </Link>
//             </li>
//             <li className="nav-item">
//                 <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
//                     Contact
//                 </Link>
//             </li>
//         </ul>
//     )
// }

// export default NavBar;