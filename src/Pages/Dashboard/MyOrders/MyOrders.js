import React, { useEffect, useState } from 'react';
import { Modal, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import SingleOrder from './SingleOrder';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [smShow, setSmShow] = useState(false);

    const { user } = useAuth();

    const handleCancelOrder = id => {
        const proceed = window.confirm("Want to Cancel Order?");
        if(proceed){
            const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                setSmShow(true);
                const remainingMyOrders = myOrders.filter(order => order._id !== id);
                setMyOrders(remainingMyOrders); 
            }
        });
        }
    }

    useEffect( () => {
        const url = `http://localhost:5000/orders?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMyOrders(data);
        })
    }, []);

    const bgStyle = {
        background: '#36D1DC',
        backgroundImage: 'linear-gradient(to right, #5B86E5, #36D1DC)',
        padding: '50px 0 100px'
    }


    return (
        <div style={bgStyle}>
        <div className='container'>
            <h2 className='text-center fs-1 fw-bold text-dark'>My Orders <i className="fas fa-shopping-cart"></i> {myOrders.length}</h2>
            <Row xs={1} md={3} className="g-4 py-5">
                {
                    myOrders.map(order => <SingleOrder
                    key={order._id}
                    handleCancelOrder={handleCancelOrder}
                    orders={order}
                    ></SingleOrder>)
                }
            </Row>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    <h4><i className="far fa-sad-cry text-warning fs-3"></i></h4>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>Order Canceled</Modal.Body>
            </Modal>
        </div>
        </div>
    );
};

export default MyOrders;