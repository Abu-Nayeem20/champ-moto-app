import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [smShow, setSmShow] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    };
    const handleMakingAdmin = e => {
        const user = { email };

        fetch('https://secret-mountain-73898.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                setSmShow(true);
                e.target.reset();
            }
        })
        e.preventDefault();
    };

    const bgStyle = {
        background: '#36D1DC',
        backgroundImage: 'linear-gradient(to right, #5B86E5, #36D1DC)',
        height: '100vh'
    }

    return (
        <div style={bgStyle}>
        <div className='container'>
            <h2 className='text-center fw-bold py-5 text-warning'><i className="fas fa-user-shield"></i> Make an Admin</h2>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <Form  onSubmit={handleMakingAdmin}>
                    <Form.Control size="lg" 
                    className='mb-3' 
                    type="email"
                    name="email" 
                    placeholder="Email" 
                    onBlur={handleOnBlur}  
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
                <Modal.Body>Admin Make Successfully</Modal.Body>
            </Modal>
        </div>
        </div>
    );
};

export default MakeAdmin;