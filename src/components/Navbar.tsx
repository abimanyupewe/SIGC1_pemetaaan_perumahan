import React from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from './ui/navigation-menu';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const [activeSection, setActiveSection] = React.useState('home');
    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
        // Only run observer on home page
        if (location.pathname !== '/') return;

        const sections = document.querySelectorAll('div[id], section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, [location.pathname]);

    const handleNavigation = (target: string) => {
        if (target === '/data') {
            navigate('/data');
            return;
        }

        // For sections (home, stats, map)
        if (location.pathname !== '/') {
            navigate('/');
            // Add a small delay to allow navigation to complete before scrolling
            setTimeout(() => {
                const section = document.getElementById(target);
                if (section) section.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const section = document.getElementById(target);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(target);
            }
        }
    };

    const isActive = (id: string) => {
        if (location.pathname === '/data') return id === 'data';
        return activeSection === id;
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-background/80 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800 transition-all duration-300">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo / Brand */}
                <div
                    className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 font-sans cursor-pointer"
                    onClick={() => handleNavigation('home')}
                >
                    SIG Perumahan
                </div>

                {/* Navigation Menu (Center) */}
                <NavigationMenu className="flex">
                    <NavigationMenuList className="gap-4 md:gap-8 overflow-x-auto no-scrollbar px-2">
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                className={cn(
                                    "text-sm font-medium cursor-pointer transition-colors duration-300 whitespace-nowrap hover:text-indigo-600 dark:hover:text-indigo-400",
                                    isActive('home')
                                        ? "text-indigo-600 dark:text-indigo-400 font-bold"
                                        : "text-neutral-600 dark:text-neutral-300"
                                )}
                                onClick={() => handleNavigation('home')}
                            >
                                Beranda
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                className={cn(
                                    "text-sm font-medium cursor-pointer transition-colors duration-300 whitespace-nowrap hover:text-indigo-600 dark:hover:text-indigo-400",
                                    isActive('stats-section')
                                        ? "text-indigo-600 dark:text-indigo-400 font-bold"
                                        : "text-neutral-600 dark:text-neutral-300"
                                )}
                                onClick={() => handleNavigation('stats-section')}
                            >
                                Statistik
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                className={cn(
                                    "text-sm font-medium cursor-pointer transition-colors duration-300 whitespace-nowrap hover:text-indigo-600 dark:hover:text-indigo-400",
                                    isActive('data')
                                        ? "text-indigo-600 dark:text-indigo-400 font-bold"
                                        : "text-neutral-600 dark:text-neutral-300"
                                )}
                                onClick={() => handleNavigation('/data')}
                            >
                                Data
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                className={cn(
                                    "text-sm font-medium cursor-pointer transition-colors duration-300 whitespace-nowrap hover:text-indigo-600 dark:hover:text-indigo-400",
                                    isActive('map-section')
                                        ? "text-indigo-600 dark:text-indigo-400 font-bold"
                                        : "text-neutral-600 dark:text-neutral-300"
                                )}
                                onClick={() => handleNavigation('map-section')}
                            >
                                Peta
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Right Action (e.g. Fullscreen Button) */}
                <div className="flex items-center gap-2">
                    <ModeToggle />
                    <Button variant="ghost" size="sm" onClick={() => handleNavigation('map-section')}>
                        Mulai
                    </Button>
                </div>
            </div>
        </header>
    );
};
