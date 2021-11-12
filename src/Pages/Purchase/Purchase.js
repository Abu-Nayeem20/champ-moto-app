import React, { useEffect, useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../SharedItems/Footer/Footer';
import Header from '../SharedItems/Header/Header';
import './Purchase.css';

const Purchase = () => {
    const {productId} = useParams();
    const [purchase, setPurchase] = useState({});
    const [smShow, setSmShow] = useState(false);

    const { user } = useAuth();

    useEffect( () => {
        const url = `https://secret-mountain-73898.herokuapp.com/products/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPurchase(data);
        })
    }, []);

    const initialInfo = { 
        name: user.displayName, 
        email: user.email,
        phone: '', 
        address: '' 
    }
    const [purchaseInfo, setpurchaseInfo] = useState(initialInfo);
    // console.log(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value)
        const {name, img, price} = purchase;
        const newInfo = { ...purchaseInfo, 
                        productName: name, 
                        productImg: img,
                        productPrice: price    
                    };
        newInfo[field] = value;
        setpurchaseInfo(newInfo);
        // console.log(newInfo);
    }
    

    const handlePurchase = e => {
        // console.log(purchaseInfo);
        fetch('https://secret-mountain-73898.herokuapp.com/orders', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(purchaseInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setSmShow(true);
                e.target.reset();
            }
        })
        e.preventDefault();
    }

    return (
        <div>
            <Header />
            <div className='container'>
                <div className='page-heading'>
                    <h2>Product Information</h2>
                </div>
                <div className='row product-information'>
                    <div className='col-md-6'>
                        <div className='product-img'>
                            <img src={purchase.img} alt="" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='product-info'>
                            <h2>{purchase.name}</h2>
                            <h2><i className="fas fa-money-check-alt"></i> { purchase.price}</h2>
                            <h3>Product Overview</h3>
                            <p>{purchase.desc}</p>
                        </div>
                    </div>
                </div>
                <div className='confirm-text'>
                    <h2>Confirm Purchase By Giving Your Information</h2>
                </div>
                <div className='row'>
                    <div className='col-md-8 offset-md-2'>
                    <Form onSubmit={handlePurchase} className='purchase-form'>
                    <Form.Control size="lg" 
                    className='mb-3' 
                    type="text"
                    name="name" 
                    placeholder="Your Name" 
                    onBlur={handleOnBlur} 
                    defaultValue={user?.displayName || ''} 
                    required />

                    <Form.Control size="lg" 
                    className='mb-3' 
                    type="email"
                    name="email"
                    onBlur={handleOnBlur} 
                    placeholder="Your email" 
                    defaultValue={user?.email || ''} 
                    required />

                    <Form.Control size="lg" 
                    className='mb-3' 
                    type="text"
                    name="phone"
                    onBlur={handleOnBlur} 
                    placeholder="Your Phone" 
                    required />

                    <Form.Control size="lg" 
                    className='mb-3' 
                    type="text"
                    onBlur={handleOnBlur}
                    name="address" 
                    placeholder="Shipping Address" 
                    required />

                    <button className='btn btn-warning fw-bold' type="submit">
                       Confirm Purchase
                    </button>
                    </Form>
                    </div>
                </div>
            </div>
            <Footer />

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
                <Modal.Body>Congrats! Purchase Successfully.</Modal.Body>
            </Modal>

        </div>
    );
};

export default Purchase;