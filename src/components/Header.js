import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Components.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return <div className="header">
        <Navbar variant="dark" className="color-nav" >
            <Container>
                <Navbar.Brand href="/">
                    Home
                    <span className='home-icon'>
                        <FontAwesomeIcon icon={faHouse} />
                    </span>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/addcontact">Add Contact
                        <span className='home-icon'>
                            <FontAwesomeIcon icon={faUserPlus} />
                        </span>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
}

export default Header;