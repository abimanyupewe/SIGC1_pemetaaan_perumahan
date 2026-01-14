import { motion } from 'framer-motion';
import { Atom, FileCode, Map, Wind, Zap, Layers } from 'lucide-react';

const technologies = [
    {
        name: "React",
        description: "Frontend Library",
        icon: <Atom className="w-6 h-6 text-blue-400" />,
        color: "bg-blue-500/10 border-blue-200/20"
    },
    {
        name: "TypeScript",
        description: "Type Safety",
        icon: <FileCode className="w-6 h-6 text-blue-600" />,
        color: "bg-blue-600/10 border-blue-400/20"
    },
    {
        name: "Tailwind CSS",
        description: "Utility First Styling",
        icon: <Wind className="w-6 h-6 text-cyan-400" />,
        color: "bg-cyan-500/10 border-cyan-200/20"
    },
    {
        name: "OpenLayers",
        description: "Interactive Maps",
        icon: <Map className="w-6 h-6 text-green-500" />,
        color: "bg-green-500/10 border-green-200/20"
    },
    {
        name: "Framer Motion",
        description: "Smooth Animations",
        icon: <Zap className="w-6 h-6 text-purple-500" />,
        color: "bg-purple-500/10 border-purple-200/20"
    },
    {
        name: "Vite",
        description: "Fast Build Tool",
        icon: <Layers className="w-6 h-6 text-yellow-500" />,
        color: "bg-yellow-500/10 border-yellow-200/20"
    }
];

export const TechStack = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                        Teknologi di Balik Layar
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-muted-foreground max-w-2xl mx-auto">
                        Dibangun dengan tools modern untuk memastikan performa maksimal dan pengalaman pengguna yang mulus.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className={`p-6 rounded-2xl border backdrop-blur-sm ${tech.color} hover:bg-white/10 hover:shadow-lg transition-all text-center group cursor-default`}
                        >
                            <div className="w-12 h-12 mx-auto mb-4 bg-white dark:bg-white/10 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                {tech.icon}
                            </div>
                            <h3 className="font-bold text-neutral-800 dark:text-white mb-1">{tech.name}</h3>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">{tech.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
