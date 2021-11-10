import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-area' id='contact'>
            <div className='container'>
                <div className='contact-heading'>
                    <h2>CONTACT US</h2>
                    <h5>Always Get In Touch</h5>
                 </div>
                 <div>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Your Email*"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Subject*" className='mb-3'>
                        <Form.Control type="text" placeholder="Subject" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments*">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '150px' }}
                    />
                </FloatingLabel>
                <button className='btn btn-warning mt-5 fw-bold'>SUBMIT</button>
                 </div>
            </div>
        </div>
    );
};

export default Contact;