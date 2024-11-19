import React from 'react';
import Testimonials from '../components/Testimonials';
import Carousel from '../components/Carousel';
import ContactPage from '../components/ContactPage';
import HeroPage from '../components/HeroPage';
import ImageGallery from '../components/ImageGallery';

function Home() {
    return (
        <div>
            <Carousel />
            <Testimonials />
            <HeroPage />
            <ImageGallery />
            <ContactPage />
        </div>
    )
}

export default Home