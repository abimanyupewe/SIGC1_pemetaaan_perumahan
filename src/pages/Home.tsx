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
import { HowToUseSection } from '../components/HowToUseSection';

const Home: React.FC = () => {
    useDocumentTitle('Beranda - SIG Perumahan Mulyorejo');

    const scrollToHowToUse = () => {
        const howToUseSection = document.getElementById('how-to-use-section');
        if (howToUseSection) {
            howToUseSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="">
            <Navbar />
            <HeroSection onLearnMoreClick={scrollToHowToUse} />
            <StatsSection />
            <HowToUseSection />
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
