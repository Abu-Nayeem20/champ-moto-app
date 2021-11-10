import React from 'react';
import img from '../../../images/aboutBike.jpg';
import './About.css';

const About = () => {
    return (
        <div className='container' id='about'>
            <div className='about-content'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='about-text'>
                        <h2><span>CHAMP MOTO</span> WORLD MOST LATGEST MOTORCYCLE STORE</h2>
                        <p><span>CHAMP MOTO</span> the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle it quo minus iduod maxie placeat facere possimus, omnis voluptas assumenda est, omnis dolor llendus. Temporibus autem quibusdam</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='about-img'>
                        <img className='img-fluid' src={img} alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;