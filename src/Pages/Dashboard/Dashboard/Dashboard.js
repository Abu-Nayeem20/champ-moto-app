import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/champ-moto.png';

const Dashboard = () => {
    return (
        <div>
            <Navbar.Brand className='logo-area' as={NavLink} to="/home"><img className='img-fluid' src={logo} alt="" /></Navbar.Brand>
            <h2>This is Dashboard</h2>
        </div>
    );
};

export default Dashboard;