import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/champ-moto.png';

const Navigation = () => {

    return (
        <div className='header-section'>
            <Navbar expand={false}>
            <Container>
            <Navbar.Brand className='logo-area' as={NavLink} to="/home"><img className='img-fluid' src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel"><i className="fas fa-house-user"></i> DASHBOARD</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to='/dashboard/payment'>Payment</Nav.Link>
                    
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;