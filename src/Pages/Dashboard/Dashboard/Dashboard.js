import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/champ-moto.png';
import AdminRoute from '../../AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import AllOrders from '../AllOrders/AllOrders';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import './Dashboard.css'

const Dashboard = () => {

    const { user, logOut, admin } = useAuth();

    const activeStyle ={
        color: "#a7e0f8",
        // borderBottom: '2px solid #a7e0f8'
      }

    let { path, url } = useRouteMatch();

    return (
        <div className=''>
            <div className='header-section'>
            <Navbar collapseOnSelect expand="lg" sticky="top">
            <Container>
            <Navbar.Brand className='logo-area' as={Link} to="/home"><img className='img-fluid' src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                <Nav className="menu-items">
                    <Nav.Link as={NavLink} to={`${url}`} activeStyle={activeStyle}>Home</Nav.Link>
                    {!admin ?
                    <>
                    <Nav.Link as={NavLink} to={`${url}/payment`} activeStyle={activeStyle}>Payment</Nav.Link>

                    <Nav.Link as={NavLink} to={`${url}/myOrders`} activeStyle={activeStyle}>My Orders</Nav.Link>

                    <Nav.Link as={NavLink} to={`${url}/addReview`} activeStyle={activeStyle}>Review</Nav.Link>
                    </>
                    :
                    <>      
                    <Nav.Link as={NavLink} to={`${url}/allOrders`} activeStyle={activeStyle}>Manage Orders</Nav.Link>

                    <Nav.Link as={NavLink} to={`${url}/addProduct`} activeStyle={activeStyle}>Add Product</Nav.Link>

                    <Nav.Link as={NavLink} to={`${url}/manageProducts`} activeStyle={activeStyle}>Manage Products</Nav.Link>

                    <Nav.Link as={NavLink} to={`${url}/makeAdmin`} activeStyle={activeStyle}>Make Admin</Nav.Link>
                    </>
                    }

                    <NavDropdown title={<img className='profile-icon' src={user?.photoURL} alt="" />} id="collasible-nav-dropdown">
                        <p>{user?.displayName}</p>
                        <p>{user?.email}</p>
                    
                    <NavDropdown.Divider />
                    <NavDropdown.Item><button onClick={logOut} className='btn btn-danger'>Logout</button></NavDropdown.Item>
                  </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
            <div>
                 <Switch>
                    <Route exact path={path}>
                        <DashboardHome />
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment />
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview />
                    </Route>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </AdminRoute>
                    <AdminRoute path={`${path}/allOrders`}>
                        <AllOrders />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;