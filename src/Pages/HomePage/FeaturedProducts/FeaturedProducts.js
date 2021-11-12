import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleProduct from './SingleProduct';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setFeaturedProducts(data);
        })
    }, []);

    const slicedFeatureProducts = featuredProducts.slice(0, 6);

    return (
        <div className='container' id='topProducts'>
            <div className='section-heading'>
            <h2>CHOOSE YOUR <span>BIKE</span></h2>
            <p><span>CHAMP MOTO</span> the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle</p>
            </div>
            <div>
            <Row xs={1} md={2} className="g-4">
                {
                    slicedFeatureProducts.map(product => <SingleProduct
                    key={product._id}
                    product={product}
                    ></SingleProduct>)
                }
            </Row>
            </div>
        </div>
    );
};

export default FeaturedProducts;