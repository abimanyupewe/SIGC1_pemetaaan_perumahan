import { useEffect, useRef } from "react";
import gsap from "gsap";

export const MouseFollower = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        // Hide default cursor (optional, but usually we just overlay)
        // document.body.style.cursor = 'none'; 

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5, // Slower for trailing effect
                ease: "power2.out"
            });
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            // document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <div className="pointer-events-none fixed top-0 left-0 z-50 mix-blend-difference hidden md:block">
            {/* Small Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
            />
            {/* Larger Trail */}
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"
            />
        </div>
    );
};
