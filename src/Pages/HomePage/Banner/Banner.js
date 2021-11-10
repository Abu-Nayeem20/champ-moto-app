import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-content'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                       <div className='slider-text'>
                       <h2>BOOK YOUR <span>BIKE</span> INSTANTLY AND GET <span>DISCOUNT</span></h2>
                        <Link to='allProducts'>
                        <button className='btn btn-warning'>Explore Now</button>
                        </Link>
                       </div>
                    </div>
                    <div className='col-8'>
                    <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block img-fluid"
                    src="https://i.ibb.co/BVwpbfT/slider-Bike-3.png"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block img-fluid"
                    src="https://i.ibb.co/VTT8CmQ/slider-Bike-2.png"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block img-fluid"
                    src="https://i.ibb.co/hCrS4wf/slider-Bike-1.png"
                    alt="First slide"
                    />
                </Carousel.Item>
                </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;