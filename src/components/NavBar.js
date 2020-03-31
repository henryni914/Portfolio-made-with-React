import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {

    const location = useLocation();

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/" className={location.pathname === "/project" ? "nav-link active" : "nav-link"}>
                    Project
                </Link>
            </li>
        </ul>
    )
}

export default NavBar;