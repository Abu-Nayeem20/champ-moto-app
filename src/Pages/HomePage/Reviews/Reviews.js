import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import './Reviews.css';

import SwiperCore, {
    Autoplay, EffectCoverflow
  } from 'swiper';
import Rating from 'react-rating';
SwiperCore.use([Autoplay, EffectCoverflow]);


const Reviews = () => {

    const [slides, setSlides] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setSlides(data);
        })
    }, [])

    return (
        <div className='review-content' id='reviews'>
            <div className='container'>
            <div className='section-heading'>
                <h2>OUR <span>CLIENTS</span> REVIEW</h2>
                <p> <span>CHAMP MOTO</span> is the largest bike store in the world can serve you latest qulity of motorcycle </p>
            </div>
            <div>
            <Swiper effect={'coverflow'} slidesPerView={3} centeredSlides={true} spaceBetween={30} grabCursor={true} autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
          }} coverflowEffect={{
            "rotate": 50,
            "stretch": 0,
            "depth": 100,
            "modifier": 1,
            "slideShadows": true
          }} breakpoints={{
            "320": {
              "slidesPerView": 1,
              "spaceBetween": 20
            },
            "640": {
              "slidesPerView": 2,
              "spaceBetween": 20
            },
            "1024": {
              "slidesPerView": 3,
              "spaceBetween": 30
            }
          }} className="mySwiper">
            
            {
                slides.map(slide => <SwiperSlide
                key={slide._id}
                >
                    <div className='single-review'>
                        <img src={slide.img} alt="" />
                        <h4>{slide.name}</h4>
                        <h6>{slide.title}</h6>
                        <Rating
                        readonly
                        emptySymbol="far fa-star empty-star"
                        fullSymbol="fas fa-star filled-star"
                        initialRating={slide.star}
                        ></Rating>
                        <p><i className="fas fa-quote-left"></i> {slide.comment} <i className="fas fa-quote-right"></i></p>
                    </div>
                </SwiperSlide>)
            }
            </Swiper>
            </div>
        </div>
        </div>
    );
};

export default Reviews;