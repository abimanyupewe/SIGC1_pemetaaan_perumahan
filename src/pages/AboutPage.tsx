import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { AboutHero } from '../components/about/AboutHero';
import { TechStack } from '../components/about/TechStack';

export const AboutPage = () => {
    useDocumentTitle('Tentang Kami - SIG Perumahan');

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-background font-sans flex flex-col">
            <Navbar />

            <main className="">
                <AboutHero />
                <TechStack />
            </main>

            <Footer />
        </div>
    );
};
