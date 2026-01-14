import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const percentRef = useRef<HTMLSpanElement>(null);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    // Slide up animation after loading finishes
                    gsap.to(containerRef.current, {
                        yPercent: -100,
                        duration: 0.8,
                        ease: "power4.inOut",
                        onComplete: onComplete
                    });
                }
            });

            // Animate progress bar and counter
            tl.to(progressRef.current, {
                width: "100%",
                duration: 2,
                ease: "power2.inOut",
                onUpdate: function () {
                    const progress = Math.round(this.progress() * 100);
                    setCounter(progress);
                }
            });

            // Optional: text reveal or other subtle animations
            tl.from(".loading-text", {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1
            }, "<");

        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-white dark:bg-background text-black dark:text-white">
            <div className="text-6xl md:text-9xl font-bold mb-8 font-sans tabular-nums tracking-tighter">
                <span ref={percentRef}>{counter}</span>%
            </div>

            <div className="w-64 md:w-96 h-[2px] bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden relative">
                <div
                    ref={progressRef}
                    className="absolute top-0 left-0 h-full bg-indigo-600 dark:bg-indigo-500 w-0"
                />
            </div>

            <div className="mt-4 text-sm font-medium tracking-widest uppercase text-neutral-500 loading-text">
                Memuat Data Spasial...
            </div>
        </div>
    );
};
