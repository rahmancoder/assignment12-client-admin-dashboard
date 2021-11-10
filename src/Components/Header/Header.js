import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerimage from '../../images/drone/b1.webp'

import './Header.css';

const Header = () => {
    return (
        <div>
            <h1> This is Header</h1>
            <Navbar sticky="top" bg="dark" variant="dark">
                <Container>
                    {/* <img className="img-fluid mt-5 custom-width" src={headerimage} alt="" /> */}
                    <Link className="m-2 text-decoration-none text-light" to="/home">My Drone Information</Link>
                    <Nav className="me-5 p-2 text-center">
                        <Button className="bg-warning"><Link className="m-2 text-decoration-none" to="/home">Home</Link> </Button>

                        <Link className="m-2 text-decoration-none text-light" to="/products">All Products</Link>
                        <Link className="m-2 text-decoration-none text-light" to="/dashboard">Dashboard</Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;