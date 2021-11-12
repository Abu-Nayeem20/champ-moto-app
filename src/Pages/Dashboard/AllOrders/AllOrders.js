import React, { useEffect, useState } from 'react';
import { Modal, Row } from 'react-bootstrap';
import Order from './Order';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [smShow, setSmShow] = useState(false);

    const handleCancelOrder = id => {
        const proceed = window.confirm("Want to Cancel Order?");
        if(proceed){
            const url = `https://secret-mountain-73898.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                setSmShow(true);
                const remainingOrders = orders.filter(order => order._id !== id);
                setOrders(remainingOrders); 
            }
        });
        }
    };

    useEffect( () => {
        fetch('https://secret-mountain-73898.herokuapp.com/allOrders')
        .then(res => res.json())
        .then(data => {
            setOrders(data);
        })
    }, []);

    const bgStyle = {
        background: '#36D1DC',
        backgroundImage: 'linear-gradient(to right, #5B86E5, #36D1DC)',
        padding: '20px 0 50px'
    }

    return (
        <div style={bgStyle}>
        <div className='container'>
            <h2 className='text-center pt-5 text-warning fw-bold'> Orders Found: {orders.length}</h2>
            <Row xs={1} md={3} className="g-4 py-5">
                {
                    orders.map(order => <Order
                    key={order._id}
                    handleCancelOrder={handleCancelOrder}
                    order={order}
                    ></Order>)
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

export default AllOrders;