import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import About from '../../HomePage/About/About';
import SingleProduct from '../../HomePage/FeaturedProducts/SingleProduct';
import Footer from '../../SharedItems/Footer/Footer';
import Header from '../../SharedItems/Header/Header';
import './AllProducts.css'

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }, []);

    return (
        <div>
            <Header />
            <div className='container'>
                <div className='page-top-text'>
                    <h2>SHOP PAGE</h2>
                    <h3>Our all products display here</h3>
                </div>
                <div className='all-products'>
                <Row xs={1} md={3} className="g-4">
                {
                    products.map(product => <SingleProduct
                    key={product._id}
                    product={product}
                    ></SingleProduct>)
                }
            </Row>
                </div>
            </div>
            <About />
            <Footer />
        </div>
    );
};

export default AllProducts;