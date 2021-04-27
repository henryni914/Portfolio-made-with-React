import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                {/* <img
                    alt=""
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top rounded"
                />{' '} */}
          HN
        </Navbar.Brand>
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