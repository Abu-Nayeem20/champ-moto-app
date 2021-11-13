import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='container'>
            <div className='notFound-area'>
            <div className='notfound-img'>
                <img src="https://i.ibb.co/2jwqnkD/notFound.jpg" alt="" />
            </div>
            <div className='home-button'>
            <Link to='/home'>
                <button className='not-found-btn'>Back To Home</button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default NotFound;