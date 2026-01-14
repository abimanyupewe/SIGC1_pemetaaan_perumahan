import React from "react";
import { motion } from "framer-motion";
import Assets from "../../assets/assets";
import { Button } from "../ui/button";
import { ArrowRight, BadgeCheck, Building2, GraduationCap } from "lucide-react";

export const ProfileSection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-neutral-50 dark:bg-neutral-950">
            {/* Dot Pattern Background - Distinct from Hero's Grid */}
            <div className="absolute inset-0 bg-white dark:bg-neutral-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-50 pointer-events-none" />
            
            {/* Soft Ambient Glows - Different positions/colors */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] translate-y-1/3 translate-x-1/3 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 dark:border-white/10 relative overflow-hidden">

                        {/* Inner Card Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                        <div className="relative z-10">
                            {/* Content Centered - No Image */}
                            <div className="w-full max-w-4xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
                                    Abimanyu Priyo Widagdo
                                </h2>
                                <p className="text-neutral-500 dark:text-neutral-400 mb-8 font-medium">
                                    Fullstack Developer & App Developer
                                </p>

                                {/* Data Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
                                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-colors">
                                        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                                            <GraduationCap size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold mb-1">Prodi</p>
                                            <p className="font-semibold text-neutral-900 dark:text-white">Teknik Informatika</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 hover:border-purple-200 dark:hover:border-purple-900/50 transition-colors">
                                        <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                                            <Building2 size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold mb-1">Kampus</p>
                                            <p className="font-semibold text-neutral-900 dark:text-white">Institut Teknologi dan Bisnis Asia</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 hover:border-emerald-200 dark:hover:border-emerald-900/50 transition-colors">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                                            <BadgeCheck size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold mb-1">NIM</p>
                                            <p className="font-semibold text-neutral-900 dark:text-white">22202028</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-neutral-100 dark:border-neutral-700/50 flex flex-col sm:flex-row items-center justify-between gap-6">
                                    {/* Logos at the bottom left */}
                                    <div className="flex items-center gap-6">
                                        <img
                                            src={Assets.logo_asia}
                                            alt="Institut Asia"
                                            className="h-10 w-auto object-contain opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
                                        />
                                        <div className="w-px h-8 bg-neutral-300 dark:bg-neutral-700" />
                                        <img
                                            src={Assets.logo_ti}
                                            alt="Prodi TI"
                                            className="h-10 w-auto object-contain opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>

                                    {/* Button at the bottom right */}
                                    <Button
                                        variant="link"
                                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-base font-semibold p-0 h-auto"
                                        onClick={() => window.location.href = '#portfolio'}
                                    >
                                        Lihat Portofolio <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
