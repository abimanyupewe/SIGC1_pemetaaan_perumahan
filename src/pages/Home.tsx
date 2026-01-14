import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { StatsSection } from '../components/StatsSection';
import { MapSection } from '../components/MapSection';
import { Navbar } from '../components/Navbar';

import { Footer } from '../components/Footer';

const Home: React.FC = () => {
    const scrollToMap = () => {
        const mapSection = document.getElementById('map-section');
        if (mapSection) {
            mapSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="">
            <Navbar />
            <HeroSection onStartClick={scrollToMap} />
            <StatsSection />
            <MapSection />

            <Footer />
        </div>
    );
};

export default Home;
