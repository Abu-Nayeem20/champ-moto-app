import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();

    const [smShow, setSmShow] = useState(false);

    const initialInfo = { 
        name: user.displayName,
        img: user.photoURL, 
        title: '',
        star: '', 
        comment: '' 
    }
    const [reviewInfo, setReviewInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;
        setReviewInfo(newInfo);
    }

    const handleReviewSubmit = e => {
        // console.log(reviewInfo);
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(reviewInfo)
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
        padding: '50px 0 100px'
    }

    return (
        <div style={bgStyle}>
        <div className='container'>
            <h2 className='text-center fs-2 fw-bold py-5'>Give Your Valuable Feedback</h2>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                <Form onSubmit={handleReviewSubmit} className='purchase-form'>
                <div className='w-25 mx-auto pb-4'>
                        <img className='img-fluid rounded-circle' src={user?.photoURL} alt='' />
                    </div>
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
                    type="text"
                    name="title"
                    onBlur={handleOnBlur} 
                    placeholder="Your title"
                    required />

                    <Form.Control size="lg" 
                    className='mb-3' 
                    type="number"
                    name="star"
                    max="5"
                    min="0"
                    onBlur={handleOnBlur} 
                    placeholder="Rating 0 - 5" 
                    required />

                    <Form.Control size="lg" 
                    className='mb-3'
                    as="textarea" 
                    type="text"
                    onBlur={handleOnBlur}
                    name="comment" 
                    placeholder="Your Comment"
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
                <Modal.Body>Thanks For Your Feedback.</Modal.Body>
            </Modal>
        </div>
        </div>
    );
};

export default AddReview;