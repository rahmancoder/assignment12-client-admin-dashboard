import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


import './Header.css';

const Header = () => {

    const { user, logout } = useAuth();
    return (
        <div>
            {/* <h1> This is Header</h1> */}
            <Navbar sticky="top" bg="dark" variant="dark">
                <Container>
                    {/* <img className="img-fluid mt-5 custom-width" src={headerimage} alt="" /> */}
                    <Link className="m-2 text-decoration-none text-light" to="/home">BD-Drone Custom</Link>
                    <Nav className="me-5 p-2 text-center">
                        <Button className="bg-warning"><Link className="m-2 text-decoration-none" to="/home">Home</Link> </Button>

                        <Link className="m-2 text-decoration-none text-light" to="/allproducts">All Products</Link>
                        <Link className="m-2 text-decoration-none text-light" to="/dashboard">Dashboard</Link>
                        <Link className="m-2 text-decoration-none text-light" to="/questions">FAQ</Link>
                        <Link className="m-2 text-decoration-none text-light" to="/allreviews">User Reviews</Link>
                        {/* <Link className="m-2 text-decoration-none text-light" to="/login">Login</Link> */}


                        {
                            user?.email && <Link className="m-2 text-decoration-none text-light" to="/">
                                <li className="header-items">
                                    {user.displayName}
                                </li>
                            </Link>
                        }

                        {
                            user?.email ? (<Button onClick={logout} className="bg-info "><Link className="m-2 text-decoration-none text-white" to="/home">Logout</Link> </Button>)
                                : (<Link className="m-2 text-decoration-none text-light" to="/login">Login</Link>)
                        }

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;