import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {user, admin, loading} = useAuth();

    if(loading){
        return <div className='text-center'><Spinner animation="grow" variant="danger" /></div>
    }

    return (
        <Route
            {...rest}
            render = {({location}) => user.email && admin ?
            children : 
            <Redirect
                to={{
                    pathname: '/',
                    state: { from: location }
                }}
            ></Redirect>
        }
    > 
        </Route>
    );
};

export default AdminRoute;