import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import Assets from '../../assets/assets';

// Custom Tiktok Icon since it might not be in all Lucide versions or we want a specific look
const TiktokIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

export const AboutHero = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Animate scale of the photo
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

    // Orbit Animation Variables
    const radius = 280;

    // Icon 1: Github - Top Left
    const x1 = useTransform(scrollYProgress, [0.4, 0.8], [0, -radius * 0.7]);
    const y1 = useTransform(scrollYProgress, [0.4, 0.8], [0, -radius * 0.7]);

    // Icon 2: Instagram - Top Right
    const x2 = useTransform(scrollYProgress, [0.4, 0.8], [0, radius * 0.7]);
    const y2 = useTransform(scrollYProgress, [0.4, 0.8], [0, -radius * 0.7]);

    // Icon 3: Linkedin - Bottom Left
    const x3 = useTransform(scrollYProgress, [0.4, 0.8], [0, -radius * 0.7]);
    const y3 = useTransform(scrollYProgress, [0.4, 0.8], [0, radius * 0.7]);

    // Icon 4: Tiktok - Bottom Right
    const x4 = useTransform(scrollYProgress, [0.4, 0.8], [0, radius * 0.7]);
    const y4 = useTransform(scrollYProgress, [0.4, 0.8], [0, radius * 0.7]);

    // Opacity and Rotation for entrance effect
    const opacityIcons = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
    const rotateIcons = useTransform(scrollYProgress, [0.3, 0.8], [180, 0]);

    // Badge Opacity (Fades out quickly on scroll)
    const opacityBadge = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const yBadge = useTransform(scrollYProgress, [0, 0.2], [0, -20]);

    return (
        <section ref={targetRef} className="h-[250vh] relative bg-neutral-50 dark:bg-background">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* Background Decoration */}
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

                {/* Glow Effect */}
                <div className="absolute w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />

                <div className="container mx-auto px-4 text-center z-10 relative flex flex-col items-center justify-center h-full">

                    {/* Top Badge - Fades out on scroll */}
                    <motion.div
                        style={{ opacity: opacityBadge, y: yBadge }}
                        className="absolute top-[15%] md:top-[20%] px-4 py-1.5 rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-600 dark:text-neutral-300"
                    >
                        ✨ Meet the Developer
                    </motion.div>

                    {/* Photo Container */}
                    <motion.div
                        style={{ scale }}
                        className="relative w-64 h-64 md:w-96 md:h-96 z-20"
                    >
                        {/* Premium Card Effect Background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-50 transform scale-105" />

                        <img
                            src={Assets.foto}
                            alt="Profile"
                            className="w-full h-full object-cover relative z-10 rounded-[2rem] shadow-2xl border-2 border-white/20 dark:border-white/10"
                        />

                        {/* Glass Reflection Overlay */}
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent z-20 pointer-events-none" />
                    </motion.div>

                    {/* Social Icons - Orbiting */}

                    {/* Icon 1: Github - Top Left */}
                    <motion.a
                        href="#"
                        style={{ x: x1, y: y1, opacity: opacityIcons, rotate: rotateIcons }}
                        className="absolute z-10 p-5 bg-white dark:bg-neutral-800/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400 transition-all border border-white/20 dark:border-white/10"
                    >
                        <Github className="w-7 h-7" />
                    </motion.a>

                    {/* Icon 2: Instagram - Top Right */}
                    <motion.a
                        href="#"
                        style={{ x: x2, y: y2, opacity: opacityIcons, rotate: rotateIcons }}
                        className="absolute z-10 p-5 bg-white dark:bg-neutral-800/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl hover:text-pink-600 dark:text-white dark:hover:text-pink-400 transition-all border border-white/20 dark:border-white/10"
                    >
                        <Instagram className="w-7 h-7" />
                    </motion.a>

                    {/* Icon 3: Linkedin - Bottom Left */}
                    <motion.a
                        href="#"
                        style={{ x: x3, y: y3, opacity: opacityIcons, rotate: rotateIcons }}
                        className="absolute z-10 p-5 bg-white dark:bg-neutral-800/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-all border border-white/20 dark:border-white/10"
                    >
                        <Linkedin className="w-7 h-7" />
                    </motion.a>

                    {/* Icon 4: Tiktok - Bottom Right */}
                    <motion.a
                        href="#"
                        style={{ x: x4, y: y4, opacity: opacityIcons, rotate: rotateIcons }}
                        className="absolute z-10 p-5 bg-white dark:bg-neutral-800/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl hover:text-black dark:text-white dark:hover:text-gray-300 transition-all border border-white/20 dark:border-white/10"
                    >
                        <TiktokIcon className="w-7 h-7" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};
