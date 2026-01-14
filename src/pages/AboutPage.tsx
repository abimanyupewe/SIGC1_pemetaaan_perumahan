import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { AboutHero } from '../components/about/AboutHero';
import { TechStack } from '../components/about/TechStack';
import { ProfileSection } from '../components/about/ProfileSection';
import { ThankYouSection } from '../components/about/ThankYouSection';
import { MouseFollower } from '../components/ui/MouseFollower';

export const AboutPage = () => {
    useDocumentTitle('Tentang Kami - SIG Perumahan');

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-background font-sans flex flex-col cursor-none"> {/* Added cursor-none for better effect if desired, or keep default */}
            <MouseFollower />
            <Navbar />

            <main className="">
                <AboutHero />
                <ProfileSection />
                <TechStack />
                <ThankYouSection />
            </main>

            <Footer />
        </div>
    );
};
