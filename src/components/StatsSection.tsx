import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Building2, Map, Users, TrendingUp } from "lucide-react";

const stats = [
    {
        icon: <Building2 className="w-8 h-8 text-indigo-500" />,
        value: 14,
        suffix: "+",
        label: "Perumahan Terdata",
        description: "Kompleks perumahan yang telah terpetakan dengan detail.",
    },
    {
        icon: <Map className="w-8 h-8 text-teal-500" />,
        value: 45,
        suffix: "Ha",
        label: "Luas Wilayah",
        description: "Total luas area pemetaan yang mencakup Mulyorejo.",
    },
    {
        icon: <Users className="w-8 h-8 text-orange-500" />,
        value: 1250,
        suffix: "+",
        label: "Unit Rumah",
        description: "Estimasi jumlah unit rumah yang tercakup dalam sistem.",
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
        value: 98,
        suffix: "%",
        label: "Akurasi Data",
        description: "Validitas data spasial dan atribut yang terverifikasi.",
    },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = String(Math.floor(latest));
            }
        });
    }, [springValue]);

    return (
        <span className="text-4xl font-bold text-neutral-800 dark:text-neutral-100">
            <span ref={ref}>0</span>
            {suffix}
        </span>
    );
};

export const StatsSection = () => {
    return (
        <section id="stats-section" className="py-12 md:py-24 bg-white dark:bg-background relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl dark:bg-indigo-500/5"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl dark:bg-purple-500/5"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent! bg-linear-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 mb-4 inline-block">
                        Statistik Wilayah Mulyorejo
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        Gambaran umum data spasial dan demografis perumahan yang telah kami himpun dalam sistem informasi geografis ini.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-neutral-50 dark:bg-card border border-neutral-100 dark:border-border p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="mb-4 bg-white dark:bg-background w-14 h-14 rounded-xl flex items-center justify-center shadow-sm border border-neutral-100 dark:border-border">
                                {stat.icon}
                            </div>
                            <div className="mb-2">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                                {stat.label}
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-muted-foreground leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
