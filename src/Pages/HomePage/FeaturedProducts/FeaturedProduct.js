import React from 'react';
import { Card, Col } from 'react-bootstrap';

const FeaturedProduct = ({product}) => {
    const {name, img, price, desc} = product;
    const shortDesc = desc.slice(0, 173);
    return (
        <Col>
      <Card className="shadow-lg rounded border-0 single-product">
        <div className='overflow-hidden'>
        <Card.Img variant="top" src={img} />
        </div>
        <Card.Body>
            <div className='d-flex justify-content-between title-price'>
            <Card.Title>{name}</Card.Title>
            <p>{price}</p>
            </div>
          <Card.Text>
            {shortDesc}...
          </Card.Text>
        </Card.Body>
        <button className='btn btn-warning text-light fw-bold'>Buy Now</button>
      </Card>
    </Col>
    );
};

export default FeaturedProduct;