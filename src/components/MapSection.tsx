import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { Maximize2 } from 'lucide-react';
import { Button } from './ui/button';
import MapComponent from '../web_gis';

gsap.registerPlugin(ScrollTrigger);

export const MapSection: React.FC = () => {
    const mapSectionRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

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
        }, mapSectionRef); // Scope to mapSectionRef

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={mapSectionRef}
            id="map-section"
            className="min-h-screen relative py-20 px-4 md:px-10 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-background dark:to-background/50 overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="container mx-auto relative z-10 flex flex-col h-full gap-8">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                        Peta Digital Interaktif
                    </h2>
                    <p className="text-neutral-600 dark:text-muted-foreground text-lg">
                        Jelajahi sebaran perumahan di wilayah Mulyorejo dan Sukun secara visual.
                        Klik pada marker untuk melihat detail informasi.
                    </p>
                </div>

                {/* Map Card */}
                <div className="flex-grow w-full h-[70vh] md:h-[75vh] relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative h-full w-full bg-white dark:bg-card rounded-[2rem] shadow-2xl overflow-hidden border border-neutral-200 dark:border-white/10 ring-1 ring-black/5 dark:ring-white/10">

                        <MapComponent className="w-full h-full" />

                        {/* Top Overlay Controls */}
                        <div className="absolute top-6 inset-x-6 flex justify-between items-start pointer-events-none">
                            <div className="bg-white/80 dark:bg-background/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20 dark:border-white/10 pointer-events-auto">
                                <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                                    <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                                    Live Data
                                </p>
                            </div>

                            <Button
                                onClick={() => navigate('/map')}
                                variant="secondary"
                                size="sm"
                                className="pointer-events-auto shadow-lg bg-white/90 dark:bg-neutral-800/90 hover:bg-white dark:hover:bg-neutral-800 backdrop-blur-sm text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 transition-all duration-300 hover:scale-105"
                            >
                                <Maximize2 className="w-4 h-4 mr-2" />
                                Layar Penuh
                            </Button>
                        </div>

                        {/* Bottom Instruction Overlay */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none w-full max-w-md px-4">
                            <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 dark:border-white/10 text-center pointer-events-auto transition-transform hover:-translate-y-1 duration-300">
                                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Tips:</span> Gunakan <span className="font-bold">scroll</span> untuk zoom, dan <span className="font-bold">drag</span> untuk menggeser peta.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
