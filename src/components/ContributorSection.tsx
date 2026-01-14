import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';

export const ContributorSection = () => {
    const navigate = useNavigate();

    return (
        <section className="py-20 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white relative overflow-hidden transition-colors duration-300">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-full text-indigo-600 dark:text-indigo-300 text-sm font-medium border border-neutral-200 dark:border-white/10">
                        <Users className="w-4 h-4" />
                        <span>Tim Pengembang</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-neutral-900 dark:text-white">
                        Penasaran siapa yang <br className="hidden md:block" />
                        <span className="text-transparent! bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 inline-block">
                            berkontribusi?
                        </span>
                    </h2>

                    <p className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Kenali tim di balik pengembangan Sistem Informasi Geografis ini. Dedikasi kami untuk menyajikan data spasial yang akurat dan bermanfaat.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <Button
                            onClick={() => navigate('/about')}
                            size="lg"
                            className="bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-indigo-900/10 dark:shadow-indigo-900/20"
                        >
                            Lihat Tim Kami
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
