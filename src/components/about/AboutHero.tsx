import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mouse, ChevronDown, MapPin } from 'lucide-react';
import Assets from '../../assets/assets';

// Custom Tiktok Icon
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

    // Responsive Radius State
    const [radius, setRadius] = useState(350);

    useEffect(() => {
        const updateRadius = () => {
            if (window.innerWidth < 768) {
                setRadius(160); // Mobile Radius
            } else if (window.innerWidth < 1024) {
                setRadius(250); // Tablet Radius
            } else {
                setRadius(350); // Desktop Radius
            }
        };

        updateRadius();
        window.addEventListener('resize', updateRadius);
        return () => window.removeEventListener('resize', updateRadius);
    }, []);

    // Animate scale of the photo
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

    // Fade out elements on scroll
    const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const yFade = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // Fade IN "Enjoy" text at the end - Delayed start for "jeda"
    const opacityEnjoy = useTransform(scrollYProgress, [0.95, 1], [0, 1]);
    const yEnjoy = useTransform(scrollYProgress, [0.92, 1], [30, 0]);
    const scaleEnjoy = useTransform(scrollYProgress, [0.92, 1], [0.9, 1]);

    // Icon 1: Github - Left Top Side
    const x1 = useTransform(scrollYProgress, [0.4, 0.8], [0, -radius]);
    const y1 = useTransform(scrollYProgress, [0.4, 0.8], [0, -50]);

    // Icon 2: Instagram - Right Top Side
    const x2 = useTransform(scrollYProgress, [0.4, 0.8], [0, radius]);
    const y2 = useTransform(scrollYProgress, [0.4, 0.8], [0, -50]);

    // Icon 3: Linkedin - Left Bottom Side
    const x3 = useTransform(scrollYProgress, [0.4, 0.8], [0, -radius * 0.8]);
    const y3 = useTransform(scrollYProgress, [0.4, 0.8], [0, 80]);

    // Icon 4: Tiktok - Right Bottom Side
    const x4 = useTransform(scrollYProgress, [0.4, 0.8], [0, radius * 0.8]);
    const y4 = useTransform(scrollYProgress, [0.4, 0.8], [0, 80]);

    // Opacity and Rotation for entrance effect
    const opacityIcons = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
    const rotateIcons = useTransform(scrollYProgress, [0.3, 0.8], [180, 0]);

    return (
        <section ref={targetRef} className="h-[250vh] relative bg-neutral-50 dark:bg-background">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* Background Decoration */}

                {/* GIS Topographic Pattern - Subtle Map Lines */}
                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-cover bg-center"
                    style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Topographic_map_contour_lines.svg')" }}
                />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

                {/* Radar Scan Effect for GIS Theme */}
                <div className="absolute w-[300px] h-[300px] md:w-[800px] md:h-[800px] rounded-full border border-indigo-500/10 dark:border-white/5 animate-[spin_20s_linear_infinite] pointer-events-none">
                    <div className="absolute inset-0 rounded-full bg-linear-to-tr from-transparent via-transparent to-indigo-500/10 dark:to-white/5" />
                </div>

                {/* Glow Effect */}
                <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-indigo-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 animate-pulse" />

                <div className="container mx-auto px-4 text-center z-10 relative flex flex-col items-center justify-center h-full">

                    {/* Intro Title - Fades out */}
                    <motion.div
                        style={{ opacity: opacityFade, y: yFade }}
                        className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none"
                    >
                        <div className="px-5 py-2 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-6 shadow-sm">
                            Meet the Developer
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold text-neutral-800 dark:text-white mb-4 tracking-tighter drop-shadow-xl filter drop-shadow-sm">
                            Hi, I'm Abimanyu
                        </h1>
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-sm border border-neutral-200/50 dark:border-white/10">
                            <MapPin className="w-4 h-4 text-rose-500 animate-bounce" />
                            <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-medium">
                                Based in Malang, Indonesia
                            </p>
                        </div>
                    </motion.div>

                    {/* "Enjoy" Text - Fades IN at the end */}
                    <motion.div
                        style={{ opacity: opacityEnjoy, y: yEnjoy, scale: scaleEnjoy }}
                        className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none"
                    >
                        <div className="relative flex flex-col items-center">
                            <span className="text-3xl md:text-5xl font-light italic text-indigo-600 dark:text-indigo-300 -mb-2 md:-mb-4 transform -rotate-6 self-start move-x-12">
                                Enjoy
                            </span>
                            <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-neutral-900 to-neutral-500 dark:from-white dark:to-white/10 drop-shadow-2xl">
                                EXPLORING
                            </h2>
                            <span className="text-sm md:text-base font-mono text-neutral-600 dark:text-neutral-400 mt-4 tracking-[0.5em] uppercase border-t border-neutral-300 dark:border-neutral-800 pt-4 w-full">
                                Scroll For More
                            </span>
                        </div>
                    </motion.div>


                    {/* Photo Container */}
                    <motion.div
                        style={{ scale }}
                        className="relative w-64 h-64 md:w-96 md:h-96 z-20 mt-12 md:mt-0"
                    >
                        <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-50 transform scale-105" />

                        {/* Dim Overlay for Text Readability - Fades out with text */}
                        <motion.div
                            style={{ opacity: opacityFade }}
                            className="absolute inset-0 bg-white/40 dark:bg-black/40 z-20 rounded-[2rem] backdrop-blur-[2px]"
                        />

                        <img
                            src={Assets.foto}
                            alt="Profile"
                            className="w-full h-full object-cover relative z-10 rounded-[2rem] shadow-2xl"
                        />

                        {/* Glass Reflection Overlay */}
                        <div className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-white/10 to-transparent z-20 pointer-events-none" />
                    </motion.div>

                    {/* Social Icons - Orbiting */}

                    {/* Icon 1: Github - Top Left */}
                    <motion.a
                        href="#"
                        style={{ x: x1, y: y1, opacity: opacityIcons, rotate: rotateIcons }}
                        className="absolute z-10 p-4 md:p-5 bg-white dark:bg-neutral-800/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400 transition-all border border-white/20 dark:border-white/10"
                    >
                        <Github className="w-6 h-6 md:w-7 md:h-7" />
                    </motion.a>

                    {/* Icon 2: Instagram - Top Right */}
                    <motion.a
                        href="#"
                        style={{ x: x2, y: y2, opacity: opacityIcons, rotate: rotateIcons }}
                        className="absolute z-10 p-4 md:p-5 bg-white dark:bg-neutral-800/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl hover:text-pink-600 dark:text-white dark:hover:text-pink-400 transition-all border border-white/20 dark:border-white/10"
                    >
                        <Instagram className="w-6 h-6 md:w-7 md:h-7" />
                    </motion.a>

                    {/* Icon 3: Linkedin - Bottom Left */}
                    <motion.a
                        href="#"
                        style={{ x: x3, y: y3, opacity: opacityIcons, rotate: rotateIcons }}
                        className="absolute z-10 p-4 md:p-5 bg-white dark:bg-neutral-800/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-all border border-white/20 dark:border-white/10"
                    >
                        <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
                    </motion.a>

                    {/* Icon 4: Tiktok - Bottom Right */}
                    <motion.a
                        href="#"
                        style={{ x: x4, y: y4, opacity: opacityIcons, rotate: rotateIcons }}
                        className="absolute z-10 p-4 md:p-5 bg-white dark:bg-neutral-800/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl hover:text-black dark:text-white dark:hover:text-gray-300 transition-all border border-white/20 dark:border-white/10"
                    >
                        <TiktokIcon className="w-6 h-6 md:w-7 md:h-7" />
                    </motion.a>

                    {/* Scroll Indicator */}
                    <motion.div
                        style={{ opacity: opacityFade }}
                        className="absolute bottom-10 z-30 flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-500 animate-bounce"
                    >
                        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
                        <Mouse className="w-6 h-6" />
                        <ChevronDown className="w-4 h-4 -mt-1" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
