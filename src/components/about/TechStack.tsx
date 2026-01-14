import React from 'react';
import { cn } from "../../lib/utils";

const technologies = [
    {
        name: "QGIS",
        description: "GIS Software",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/91/QGIS_logo_new.svg",
        className: "bg-green-50/50 dark:bg-green-900/10 border-green-100 dark:border-green-800 hover:bg-green-500/20 hover:border-green-500/50",
    },
    {
        name: "GeoJSON",
        description: "Data Format",
        // Using an Amber/Orange colored Globe Data URI
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjU5ZTBiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiPjwvY2lyY2xlPjxsaW5lIHgxPSIyIiB5MT0iMTIiIHgyPSIyMiIgeTI9IjEyIj48L2xpbmU+PHBhdGggZD0iTTEyIDJhMTUuMyAxNS4zIDAgMCAxIDQgMTAgMTUuMyAxNS4zIDAgMCAxLTQgMTAgMTUuMyAxNS4zIDAgMCAxLTQgLTEwIDE1LjMgMTUuMyAwIDAgMSA0LTEweiI+PC9wYXRoPjwvc3ZnPg==",
        className: "bg-amber-50/50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-800 hover:bg-amber-500/20 hover:border-amber-500/50",
    },
    {
        name: "Leaflet",
        description: "JS Map Library",
        // Using the user's custom uploaded leaf image
        image: "/assets/leaflet-leaf.png",
        className: "bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-800 hover:bg-emerald-500/20 hover:border-emerald-500/50",
    },
    {
        name: "React",
        description: "Frontend Library",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        className: "bg-cyan-50/50 dark:bg-cyan-900/10 border-cyan-100 dark:border-cyan-800 hover:bg-cyan-500/20 hover:border-cyan-500/50",
    },
    {
        name: "Tailwind CSS",
        description: "Utility Styling",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        className: "bg-sky-50/50 dark:bg-sky-900/10 border-sky-100 dark:border-sky-800 hover:bg-sky-500/20 hover:border-sky-500/50",
    },
    {
        name: "Vite",
        description: "Build Tool",
        image: "https://vitejs.dev/logo.svg",
        className: "bg-purple-50/50 dark:bg-purple-900/10 border-purple-100 dark:border-purple-800 hover:bg-purple-500/20 hover:border-purple-500/50",
    },
    {
        name: "TypeScript",
        description: "Type Safety",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
        className: "bg-blue-50/50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800 hover:bg-blue-500/20 hover:border-blue-500/50",
    },
    {
        name: "GSAP",
        description: "Animation",
        image: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
        className: "bg-lime-50/50 dark:bg-lime-900/10 border-lime-100 dark:border-lime-800 hover:bg-lime-500/20 hover:border-lime-500/50",
    }
];

export const TechStack = () => {
    // Duplicate list for seamless loop
    const infiniteTechs = [...technologies, ...technologies];

    return (
        <section className="py-24 relative overflow-hidden bg-white dark:bg-background border-t border-neutral-200 dark:border-neutral-800">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent! bg-linear-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400 mb-6 inline-block">
                    Teknologi Pendukung
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                    Kombinasi tools modern untuk membangun visualisasi data spasial yang cepat, interaktif, dan responsif.
                </p>
            </div>

            {/* Infinite Scroll Container */}
            <div className="relative w-full overflow-hidden mask-linear-fade">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-white dark:from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-white dark:from-background to-transparent z-10 pointer-events-none" />

                <div
                    className="flex gap-6 w-max animate-scroll hover:[animation-play-state:paused]"
                >
                    {infiniteTechs.map((tech, index) => (
                        <div
                            key={`${tech.name}-${index}`}
                            className={cn(
                                "flex flex-col items-center justify-center min-w-[200px] h-[200px] p-6 rounded-2xl border transition-all duration-300 group cursor-pointer relative backdrop-blur-sm",
                                tech.className
                            )}
                        >
                            {/* Icon Container - Moves up on hover */}
                            <div className="w-24 h-24 mb-0 group-hover:mb-4 transform group-hover:scale-90 transition-all duration-300 flex items-center justify-center">
                                <img
                                    src={tech.image}
                                    alt={tech.name}
                                    className="w-full h-full object-contain drop-shadow-sm"
                                    loading="lazy"
                                />
                            </div>

                            {/* Text Hidden by default, shown on hover */}
                            <div className="absolute bottom-6 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-lg">
                                    {tech.name}
                                </h3>
                                <p className="text-xs text-neutral-500 dark:text-neutral-300 font-medium uppercase tracking-wide mt-1">
                                    {tech.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
