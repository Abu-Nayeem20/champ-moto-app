import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    const [smShow, setSmShow] = useState(false);

    const handleProductDelete = id => {
        const proceed = window.confirm("Want to Delete Product?");
        if(proceed){
            const url = `https://secret-mountain-73898.herokuapp.com/products/${id}`;
        fetch(url, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                setSmShow(true);
                const remainingProducts = products.filter(product => product._id !== id);
                setProducts(remainingProducts); 
            }
        });
        }
    };

    useEffect( () => {
        fetch('https://secret-mountain-73898.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
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
            <h2 className='text-center fw-bold py-5 text-warning'>Manage All Products</h2>
            <div>
            {
                products.map(product => <ManageProduct
                key={product._id}
                handleProductDelete={handleProductDelete}
                product={product}
                ></ManageProduct>)
            }
            </div>
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
                <Modal.Body>Deleted</Modal.Body>
            </Modal>
        </div>
        </div>
    );
};

export default ManageProducts;