import React, { useState } from 'react';
import { Card, Col, Form, Modal } from 'react-bootstrap';

const Order = ({order, handleCancelOrder }) => {

    const [singleOrder, setSingleOrder] = useState(order);

    const {_id, productImg, productName, productPrice, name, email, phone, address, status} = singleOrder;

    const [smShow, setSmShow] = useState(false);


    const updateStatusField = e => {
        const updatedStatus = e.target.value;
        updateStatus(_id, updatedStatus);
    };

    const updateStatus = (id, updatedStatus) => {
        // console.log(id, updatedStatus);
        const updateStatus = {status: updatedStatus};

        const url = `http://localhost:5000/allOrders/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                const updatedOrder = {...singleOrder, status: updatedStatus };
                setSingleOrder(updatedOrder);
                setSmShow(true);
            }
        })

    }
    

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
        <div className='d-flex justify-content-around align-items-center mb-4'>
            <div>
            <button onClick={ () => handleCancelOrder(_id)} className='btn btn-danger fw-bold'>Delete</button>
            </div>
            <div>
            <Form.Select size="lg" className='' onChange={updateStatusField}>
                <option>Pending</option>
                <option>Shipped</option>
                <option>Rejected</option>
            </Form.Select>
            </div>
        </div>
      </Card>
      <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    <h4><i className="fas fa-thumbs-up"></i></h4>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>Approved Successfully</Modal.Body>
            </Modal>
    </Col>
    );
};

export default Order;