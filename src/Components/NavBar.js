import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "./styles/NavBar.css";

library.add(faBars);

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={{minHeight:"60px"}}>
            <img src="./images/Logo.svg" alt="/" />
            <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                {/* <span className="navbar-toggler-icon"></span> */}
                {/* <i className="fas fa-bars"></i> */}
                <FontAwesomeIcon icon="bars" className="navOpenBtn"/>

            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <Link className="nav-item px-3" to="/">
                        <p className="nav-link text-light">Home</p>
                    </Link>
                    <Link className="nav-item px-3" to="/swags">
                        <p className="nav-link text-light">Swags</p>
                    </Link>
                    <a className="nav-item px-3" href="/#aboutusLink">
                        <p className="nav-link text-light">About Us</p>
                    </a>
                    <a className="nav-item px-3" href="/#sponserLink">
                        <p className="nav-link text-light">Sponsors</p>
                    </a>
                    <a className="nav-item px-3" href="#faqclick">
                        <p className="nav-link text-light">FAQs</p>
                    </a>
                    <a className="nav-item px-3" href="/#reg">
                        <p className="nav-link text-light">Register</p>
                    </a>
                </ul>
            </div>
        </nav>
    );
}
export default NavBar;
