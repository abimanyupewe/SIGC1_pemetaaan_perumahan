import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroHighlight, Highlight } from '../components/ui/hero-highlight';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import MapComponent from '../web_gis';
import { useNavigate } from 'react-router-dom';
import { Maximize2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    const mapSectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                mapSectionRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: mapSectionRef.current,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: 1,
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const scrollToMap = () => {
        mapSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
            {/* Hero Section */}
            <HeroHighlight>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: [20, -5, 0] }}
                    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                >
                    <Highlight className="text-black dark:text-white">
                        Pemetaan Perumahan
                    </Highlight>
                    <br />
                    <span className="text-slate-600 dark:text-slate-300 text-lg md:text-xl font-normal mt-4 block">
                        Sistem Informasi Geografis Kelurahan Mulyorejo
                    </span>
                    <div className="mt-8">
                        <Button
                            onClick={scrollToMap}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
                        >
                            Mulai Jelajahi Peta
                        </Button>
                    </div>
                </motion.h1>
            </HeroHighlight>

            {/* Stats/About Section (Simple Bento Grid Placeholder) */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-indigo-600 mb-2">Data Akurat</h3>
                        <p className="text-slate-600">Integrasi data spasial real-time dengan akurasi tinggi.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-teal-600 mb-2">Interaktif</h3>
                        <p className="text-slate-600">Fitur pencarian dan filter layer yang mudah digunakan.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-purple-600 mb-2">Informative</h3>
                        <p className="text-slate-600">Statistik lengkap persebaran perumahan di wilayah Mulyorejo.</p>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section
                ref={mapSectionRef}
                id="map-section"
                className="min-h-screen relative py-10 px-4 md:px-10 bg-slate-50"
            >
                <div className="max-w-[95%] mx-auto h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                    <div className="h-full w-full relative">
                        <MapComponent className="w-full h-full" />
                        {/* Overlay Instruction if needed */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10 pointer-events-none">
                            <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm">
                                <p className="text-sm font-medium text-slate-600">Gunakan mouse untuk navigasi peta</p>
                            </div>
                        </div>
                        <div className="absolute top-4 right-4 z-10">
                            <Button
                                onClick={() => navigate('/map')}
                                variant="secondary"
                                size="sm"
                                className="shadow-md bg-white hover:bg-slate-50 text-indigo-600"
                            >
                                <Maximize2 className="w-4 h-4 mr-2" />
                                Login Fullscreen
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="py-8 text-center text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} SIG Pemetaan Perumahan. All rights reserved.
            </footer>
        </div>
    );
};

export default LandingPage;
