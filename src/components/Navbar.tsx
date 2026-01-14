import React, { useState } from 'react';
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
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [activeSection, setActiveSection] = React.useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    React.useEffect(() => {
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
        setIsMobileMenuOpen(false); // Close mobile menu on navigate

        if (target === '/data') {
            navigate('/data');
            return;
        }

        if (location.pathname !== '/') {
            navigate('/');
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

    const navItems = [
        { id: 'home', label: 'Beranda' },
        { id: 'stats-section', label: 'Statistik' },
        { id: 'data', label: 'Data', path: '/data' },
        { id: 'map-section', label: 'Peta' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white/80 dark:bg-background/80 backdrop-blur-md border-neutral-200/50 dark:border-neutral-800 shadow-sm"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <div
                    className="text-xl font-bold font-sans cursor-pointer z-50 relative"
                    onClick={() => handleNavigation('home')}
                >
                    <span className="bg-clip-text text-transparent! bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 inline-block pb-1">
                        SIG Perumahan
                    </span>
                </div>

                {/* Desktop Menu */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="gap-8">
                        {navItems.map((item) => (
                            <NavigationMenuItem key={item.id}>
                                <NavigationMenuLink
                                    className={cn(
                                        "text-sm font-medium cursor-pointer transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                                        isActive(item.id)
                                            ? "text-indigo-600 dark:text-indigo-400 font-bold"
                                            : "text-neutral-600 dark:text-neutral-300"
                                    )}
                                    onClick={() => handleNavigation(item.path || item.id)}
                                >
                                    {item.label}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-2">
                    <ModeToggle />
                    <Button variant="ghost" size="sm" onClick={() => handleNavigation('map-section')}>
                        Mulai
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden items-center gap-2 z-50">
                    <ModeToggle />
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-neutral-600 dark:text-neutral-300"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 top-0 left-0 w-full h-screen bg-white dark:bg-background pt-24 px-6 flex flex-col gap-6 md:hidden z-40"
                        >
                            {navItems.map((item) => (
                                <div
                                    key={item.id}
                                    className={cn(
                                        "text-2xl font-medium cursor-pointer py-2 border-b border-neutral-100 dark:border-neutral-800",
                                        isActive(item.id)
                                            ? "text-indigo-600 dark:text-indigo-400"
                                            : "text-neutral-600 dark:text-neutral-300"
                                    )}
                                    onClick={() => handleNavigation(item.path || item.id)}
                                >
                                    {item.label}
                                </div>
                            ))}
                            <Button
                                className="mt-4 w-full text-lg py-6"
                                onClick={() => handleNavigation('map-section')}
                            >
                                Mulai Jelajahi
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};
