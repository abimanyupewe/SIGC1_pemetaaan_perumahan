import React from 'react';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import { Button } from './ui/button';

interface HeroSectionProps {
    onStartClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartClick }) => {
    return (
        <div id="home" className='h-screen w-full font-sans'>
            <HeroHighlight containerClassName="h-full">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: [20, -5, 0] }}
                    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                    className="text-center px-4 max-w-5xl mx-auto"
                >
                    <span className="text-slate-400 font-medium tracking-widest uppercase text-sm md:text-base mb-4 block">
                        WebGIS Application
                    </span>
                    <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-800 dark:text-white leading-tight mb-4">
                        Pemetaan Perumahan
                        <br />
                        <Highlight className="text-black dark:text-white leading-tight">
                            Mulyorejo, Sukun
                        </Highlight>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-lg md:text-2xl font-light mt-6 max-w-2xl mx-auto leading-relaxed">
                        Menjelajahi Data Spasial Perumahan di Kecamatan Sukun, Kota Malang dengan Presisi dan Estetika.
                    </p>
                    <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Button
                            onClick={onStartClick}
                            className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-full px-10 py-7 text-lg shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 border border-transparent hover:border-neutral-700"
                        >
                            Mulai Jelajahi
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full px-10 py-7 text-lg border-neutral-300 text-neutral-600 hover:bg-neutral-50"
                        >
                            Pelajari Lebih Lanjut
                        </Button>
                    </div>
                </motion.h1>
            </HeroHighlight>
        </div>
    );
};
