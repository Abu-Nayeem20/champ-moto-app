import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';

const AddProduct = () => {

    const [smShow, setSmShow] = useState(false);
    const [productInfo, setProductInfo] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newInfo = { ...productInfo };
        newInfo[field] = value;
        setProductInfo(newInfo);
    }

    const handleAddProduct = e => {
        // console.log(productInfo);
        fetch('https://secret-mountain-73898.herokuapp.com/products', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                // console.log('Ok');
                setSmShow(true);
                e.target.reset();
            }
        })
        e.preventDefault();
    };

    const bgStyle = {
        background: '#36D1DC',
        backgroundImage: 'linear-gradient(to right, #5B86E5, #36D1DC)',
        padding: '20px 0 50px'
    }

    return (
        <div style={bgStyle}>
        <div className='container'>
            <h2 className='text-center py-5 text-warning fw-bold'>Add Product</h2>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                <Form onSubmit={handleAddProduct} className='purchase-form'>
                    <h2 className='text-center pb-3 text-dark fw-bold'><i className="fas fa-info-circle"></i> Product Info</h2>
                    <Form.Control size="lg" 
                    className='mb-3' 
                    type="text"
                    name="name" 
                    placeholder="Product Name" 
                    onBlur={handleOnBlur}  
                    required />

                    <Form.Control size="lg" 
                    className='mb-3' 
                    type="text"
                    name="img"
                    onBlur={handleOnBlur} 
                    placeholder="Product Image URL"
                    required />

                    <Form.Control size="lg" 
                    className='mb-3' 
                    type="text"
                    name="price"
                    onBlur={handleOnBlur} 
                    placeholder="Price" 
                    required />

                    <Form.Control size="lg" 
                    className='mb-3'
                    as="textarea" 
                    type="text"
                    onBlur={handleOnBlur}
                    name="desc" 
                    placeholder="Description"
                    style={{ height: '150px' }} 
                    required />

                    <button className='btn btn-warning fw-bold' type="submit">
                       SUBMIT
                    </button>
                    </Form>
                </div>
            </div>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    <h4><i className="fas fa-thumbs-up text-warning"></i></h4>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>Product added.</Modal.Body>
            </Modal>
        </div>
        </div>
    );
};

export default AddProduct;