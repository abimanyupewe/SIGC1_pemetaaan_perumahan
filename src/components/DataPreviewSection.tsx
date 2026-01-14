
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const DataPreviewSection = () => {
    const navigate = useNavigate();

    return (
        <section className="py-20 relative overflow-hidden bg-white dark:bg-background">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-50/50 dark:bg-indigo-950/20 -skew-x-12 transform translate-x-20 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Content Side */}
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium">
                            <Database className="w-4 h-4" />
                            <span>Database Terbuka</span>
                        </div>

                        <h2
                            className="text-3xl md:text-5xl font-bold leading-tight"
                        >
                            <span
                                className="inline-block"
                                style={{
                                    background: "linear-gradient(to right, #4f46e5, #9333ea)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    color: "transparent"
                                }}
                            >
                                Akses Data Perumahan
                            </span>
                            <br />
                            <span className="text-neutral-800 dark:text-white">
                                Secara Lengkap & Transparan
                            </span>
                        </h2>

                        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Informasi data perumahan di Mulyorejo, menampilkan nama perumahan, alamat lengkap, luas area, dan status pemetaan terkini.
                        </p>
                        <Button
                            size="lg"
                            onClick={() => navigate('/data')}
                            className="group bg-neutral-900 hover:bg-neutral-800 text-white rounded-full px-8 shadow-lg hover:shadow-indigo-500/20 transition-all font-medium text-base h-12"
                        >
                            Lihat Data Lengkap
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    {/* Visual Side (Mock Data Card) */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-none">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            {/* Card Container */}
                            <div className="bg-white dark:bg-card rounded-2xl shadow-2xl border border-neutral-200 dark:border-border overflow-hidden">
                                {/* Fake Browser Header */}
                                <div className="px-4 py-3 border-b border-neutral-100 dark:border-border flex items-center gap-2 bg-neutral-50 dark:bg-neutral-900/50">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                        <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                    </div>
                                    <div className="ml-4 text-xs font-mono text-neutral-400 overflow-hidden text-ellipsis whitespace-nowrap">
                                        data-perumahan.json
                                    </div>
                                </div>

                                {/* Mock Table Content */}
                                <div className="p-6 space-y-4">
                                    {/* Table Header */}
                                    <div className="grid grid-cols-4 gap-4 text-xs font-semibold text-neutral-400 uppercase tracking-wider pb-2 border-b border-neutral-100 dark:border-border">
                                        <div>Nama</div>
                                        <div>Alamat</div>
                                        <div>Luas</div>
                                        <div className="text-right">Status</div>
                                    </div>

                                    {/* Rows */}
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="grid grid-cols-4 gap-4 text-sm items-center">
                                            <div className="font-medium text-neutral-700 dark:text-neutral-200 truncate">Residen {String.fromCharCode(64 + i)}</div>
                                            <div className="text-neutral-500 truncate">
                                                Jl. Mulyorejo No. {10 + i}
                                            </div>
                                            <div className="text-neutral-500">{60 + (i * 15)}m²</div>
                                            <div className="text-right">
                                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${i % 2 === 0
                                                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                                                    : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                                                    }`}>
                                                    {i % 2 === 0 ? 'Terpetakan' : 'Dalam Proses'}
                                                </span>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Blur overlay for "more data" effect */}
                                    <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white dark:from-card to-transparent pointer-events-none" />
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-indigo-600/5 rounded-2xl transform rotate-3" />
                            <div className="absolute -z-20 -bottom-12 -right-12 w-full h-full bg-purple-600/5 rounded-2xl transform rotate-6" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
