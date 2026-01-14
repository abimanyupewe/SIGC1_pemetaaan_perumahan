import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { StatsSection } from '../components/StatsSection';
import { MapSection } from '../components/MapSection';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FaqSection } from '../components/FaqSection';
import { LayoutMapSection } from '../components/LayoutMapSection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

import { ContributorSection } from '../components/ContributorSection';

import { DataPreviewSection } from '../components/DataPreviewSection';

const Home: React.FC = () => {
    useDocumentTitle('Beranda - SIG Perumahan Mulyorejo');

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
            <DataPreviewSection />
            <LayoutMapSection />
            <MapSection />
            <FaqSection />
            <ContributorSection />
            <Footer />
        </div>
    );
};

export default Home;
