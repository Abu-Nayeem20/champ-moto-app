import React from 'react';
import Footer from '../../SharedItems/Footer/Footer';
import Header from '../../SharedItems/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner></Banner>
            <About />
            <FeaturedProducts />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;