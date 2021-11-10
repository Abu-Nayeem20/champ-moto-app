import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/champ-moto.png';
import './Header.css';

const Header = () => {
    const activeStyle ={
        color: "#a7e0f8",
        borderBottom: '2px solid #a7e0f8'
      }
    return (
        <div>
            <div className="header-section">
            <Navbar collapseOnSelect expand="lg" sticky="top">
            <Container>
            <Navbar.Brand className='logo-area' as={NavLink} to="/home"><img className='img-fluid' src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                <Nav className="menu-items">
                <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">Home</Nav.Link>
                <Nav.Link as={NavLink} activeStyle={activeStyle} to="/allProducts">All Products</Nav.Link>
                <Nav.Link as={NavLink} activeStyle={activeStyle} to="/dashboard">Dashboard</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>

        </div>
    );
};

export default Header;