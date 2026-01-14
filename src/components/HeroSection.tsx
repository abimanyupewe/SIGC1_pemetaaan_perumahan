import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface HeroSectionProps {
    onStartClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartClick }) => {
    return (
        <section id="home" className="h-screen w-full relative overflow-hidden bg-white dark:bg-background flex items-center justify-center font-sans">

            {/* --- Background Layers --- */}

            {/* 1. Base Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* 2. Animated Gradient Blobs */}
            <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/50 dark:bg-indigo-950/10 rounded-full blur-[120px] pointer-events-none" />

            {/* --- Main Content --- */}
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6 leading-tight">
                        Pemetaan Perumahan <br />
                        <span
                            className="inline-block relative"
                            style={{
                                background: "linear-gradient(to right, #4f46e5, #9333ea)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                color: "transparent"
                            }}
                        >
                            Mulyorejo, Sukun
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        Menjelajahi Data Spasial Perumahan di Kecamatan Sukun, Kota Malang dengan Presisi dan Estetika.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            onClick={onStartClick}
                            size="lg"
                            className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-full px-10 py-7 text-lg shadow-2xl hover:shadow-indigo-500/20 hover:scale-105 transition-all duration-300"
                        >
                            Mulai Jelajahi
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full px-10 py-7 text-lg border-neutral-300 text-neutral-600 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
                        >
                            Pelajari Lebih Lanjut
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
