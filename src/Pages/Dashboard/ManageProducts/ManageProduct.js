import React from 'react';

const ManageProduct = ({product, handleProductDelete}) => {
    const {_id, name, img, price, desc} = product;

    const imgStyle = {
        width: '100px',
        margin: 'auto',
        padding: '30px 0'
    }
    const shortDesc = desc.slice(0, 100);

    return (
        <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <div style={imgStyle}>
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5 className="card-title">{price}</h5>
                        <p className="card-text">{shortDesc}...</p>
                        <div>
                            <button onClick={ () => handleProductDelete(_id)} className='btn btn-danger'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;