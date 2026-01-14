import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ThankYouSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const heartRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Content
            gsap.from(contentRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            // Animate Heart Beat
            gsap.to(heartRef.current, {
                scale: 1.2,
                duration: 0.8,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden bg-neutral-50 dark:bg-background flex items-center justify-center">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-indigo-50/50 to-transparent dark:from-indigo-950/20 dark:to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div ref={contentRef} className="max-w-2xl mx-auto space-y-6">
                    <div ref={heartRef} className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-500 mb-4 shadow-lg shadow-rose-500/20">
                        <Heart className="w-8 h-8 fill-current" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
                        Terima Kasih Sudah Mampir!
                    </h2>

                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Semoga informasi yang disajikan bermanfaat. Jangan ragu untuk menghubungi jika ada pertanyaan atau sekadar ingin berdiskusi. Sampai jumpa! 👋
                    </p>
                </div>
            </div>
        </section>
    );
};