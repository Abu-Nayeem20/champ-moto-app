import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleOrder.css'

const SingleOrder = (props) => {
    const {_id, productImg, productName, productPrice, name, email, phone, address, status} = props.orders;
    return (

        <Col>
      <Card className="shadow-lg rounded border-0 h-100">
        <div className='productImage'>
        <Card.Img variant="top" src={productImg} />
        </div>
        <Card.Body>
            <div className='order-summary'>
            <h4>Order Summary</h4>
            <p>Product: {productName}</p>
            <p>Price: {productPrice}</p>
            <p>Name: {name}</p>
            <p>E-mail: {email}</p>
            <p>Phone: {phone}</p>
            <p>Address: {address}</p>
            <p>Status: <span className='status'> {status}</span></p>
        </div>
        </Card.Body>
        <button onClick={ () => props.handleCancelOrder(_id)} className='btn btn-danger fw-bold m-3'>Cancel</button>
      </Card>
    </Col>
    );
};

export default SingleOrder;