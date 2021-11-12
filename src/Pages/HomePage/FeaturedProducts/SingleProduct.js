import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {_id, name, img, price, desc} = product;
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
        <Link to={`/purchase/${_id}`}>
        <button className='btn btn-warning fw-bold m-3'>PURCHASE</button>
        </Link>
      </Card>
    </Col>
    );
};

export default SingleProduct;