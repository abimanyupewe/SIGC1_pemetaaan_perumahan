import { useState } from 'react';
import Assets from '../assets/assets';
import { Map, Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const LayoutMapSection = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <section className="py-24 relative bg-white dark:bg-card overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Column */}
                    <div className="order-2 lg:order-1 space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium mb-6">
                                <Map className="w-4 h-4" />
                                <span>Layout Peta</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 leading-tight">
                                Visualisasi Lengkap<br />Wilayah Perumahan
                            </h2>
                            <p className="text-neutral-600 dark:text-muted-foreground text-lg leading-relaxed">
                                Gambaran statis layout area perumahan di Mulyorejo yang mencakup pembagian blok, fasilitas umum, dan akses jalan utama.
                                Peta ini membantu Anda memahami orientasi spasial kawasan sebelum menjelajahinya secara interaktif.
                            </p>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="order-1 lg:order-2">
                        <div
                            className="relative group rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 cursor-pointer"
                            onClick={() => setIsLightboxOpen(true)}
                        >
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>
                            <img
                                src={Assets.layout_perumahan}
                                alt="Layout Area Perumahan Mulyorejo"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <div className="bg-white/90 dark:bg-black/80 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <Maximize2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                    <span className="font-medium text-neutral-900 dark:text-white text-sm">Lihat Detail</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-xs text-neutral-400 mt-3 italic">
                            Klik gambar untuk memperbesar
                        </p>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <button
                            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer z-50"
                            onClick={() => setIsLightboxOpen(false)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img
                            src={Assets.layout_perumahan}
                            alt="Full Layout View"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
