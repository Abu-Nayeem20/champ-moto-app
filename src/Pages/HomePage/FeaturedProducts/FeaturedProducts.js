import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import FeaturedProduct from './FeaturedProduct';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect( () => {
        fetch('./productsData.json')
        .then(res => res.json())
        .then(data => {
            setFeaturedProducts(data);
        })
    }, []);

    return (
        <div className='container' id='topProducts'>
            <div className='section-heading'>
            <h2>CHOOSE YOUR <span>BIKE</span></h2>
            <p><span>CHAMP MOTO</span> the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle</p>
            </div>
            <div>
            <Row xs={1} md={2} className="g-4">
                {
                    featuredProducts.map(product => <FeaturedProduct
                    product={product}
                    ></FeaturedProduct>)
                }
            </Row>
            </div>
        </div>
    );
};

export default FeaturedProducts;