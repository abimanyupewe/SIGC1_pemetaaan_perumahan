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
            className="min-h-screen relative py-10 px-4 md:px-10 bg-slate-50 dark:bg-background"
        >
            <div className="max-w-[95%] mx-auto h-[85vh] bg-white dark:bg-card rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-border">
                <div className="h-full w-full relative">
                    <MapComponent className="w-full h-full" />
                    {/* Overlay Instruction */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10 pointer-events-none">
                        <div className="bg-white/90 dark:bg-background/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm border border-slate-200/50 dark:border-border/50">
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Gunakan mouse untuk navigasi peta</p>
                        </div>
                    </div>
                    <div className="absolute top-4 right-4 z-10">
                        <Button
                            onClick={() => navigate('/map')}
                            variant="secondary"
                            size="sm"
                            className="shadow-md bg-white hover:bg-slate-50 text-indigo-600 dark:bg-background dark:hover:bg-accent dark:text-indigo-400"
                        >
                            <Maximize2 className="w-4 h-4 mr-2" />
                            Login Fullscreen
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
