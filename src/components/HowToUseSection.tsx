
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Map, Database, BarChart, Search } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Jelajahi Peta Digital",
        description: "Gunakan peta interaktif untuk melihat sebaran perumahan di wilayah Mulyorejo secara visual.",
        icon: <Map className="w-8 h-8 text-indigo-500" />,
    },
    {
        id: 2,
        title: "Cari Data Perumahan",
        description: "Temukan informasi detail seperti luas area, jumlah unit, dan status legalitas perumahan.",
        icon: <Search className="w-8 h-8 text-pink-500" />,
    },
    {
        id: 3,
        title: "Analisis Statistik",
        description: "Pantau pertumbuhan dan persebaran perumahan melalui dashboard statistik yang informatif.",
        icon: <BarChart className="w-8 h-8 text-emerald-500" />,
    },
    {
        id: 4,
        title: "Akses Database",
        description: "Lihat tabel data lengkap untuk keperluan validasi dan perencanaan pembangunan.",
        icon: <Database className="w-8 h-8 text-amber-500" />,
    }
];

export const HowToUseSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="how-to-use-section" className="py-24 relative overflow-hidden bg-white dark:bg-background" ref={ref}>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-white mb-6 tracking-tight">
                            Panduan Penggunaan
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                            Maksimalkan fitur Sistem Informasi Geografis ini dengan mengikuti langkah-langkah mudah berikut.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="relative p-8 rounded-2xl bg-neutral-50 dark:bg-card border border-neutral-100 dark:border-border shadow-sm hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-xl bg-white dark:bg-background border border-neutral-100 dark:border-border flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform duration-300">
                                {step.icon}
                            </div>

                            <div className="absolute top-8 right-8 text-4xl font-black text-neutral-200 dark:text-neutral-800 opacity-50 select-none">
                                {step.id}
                            </div>

                            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
