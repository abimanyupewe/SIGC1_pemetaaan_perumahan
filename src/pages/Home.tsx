import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { StatsSection } from '../components/StatsSection';
import { MapSection } from '../components/MapSection';
import { Navbar } from '../components/Navbar';

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

            {/* Simple Footer */}
            <footer className="py-8 text-center text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} SIG Pemetaan Perumahan. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;
