import { MapPin, Mail, Phone, Github, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
    return (
        <footer className="bg-white dark:bg-card border-t border-neutral-200 dark:border-border pt-16 pb-8 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <div className="text-2xl font-bold bg-clip-text text-transparent! bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 font-sans mb-4 inline-block">
                            SIG Perumahan
                        </div>
                        <p className="text-neutral-600 dark:text-muted-foreground max-w-sm mb-6 leading-relaxed">
                            Sistem Informasi Geografis untuk pemetaan dan pendataan perumahan di wilayah Mulyorejo, Sukun, Kota Malang. Menyajikan data spasial yang akurat dan transparan.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="ghost" size="icon" className="hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950 dark:hover:text-indigo-400 rounded-full">
                                <Github className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-950 dark:hover:text-pink-400 rounded-full">
                                <Instagram className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-sky-950 dark:hover:text-sky-400 rounded-full">
                                <Mail className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-6">Navigasi</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="/" className="text-neutral-600 dark:text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    Beranda
                                </a>
                            </li>
                            <li>
                                <a href="/data" className="text-neutral-600 dark:text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    Data Perumahan
                                </a>
                            </li>
                            <li>
                                <a href="/map" className="text-neutral-600 dark:text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    Peta Fullscreen
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-6">Kontak</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-neutral-600 dark:text-muted-foreground">
                                <MapPin className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                                <span>Jl. Raya Mulyorejo No. 123, Sukun, Kota Malang, Jawa Timur</span>
                            </li>
                            <li className="flex items-center gap-3 text-neutral-600 dark:text-muted-foreground">
                                <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
                                <span>(0341) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-neutral-600 dark:text-muted-foreground">
                                <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
                                <span>info@sigperumahan.id</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-neutral-100 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center md:text-left">
                        &copy; {new Date().getFullYear()} SIG Pemetaan Perumahan. Developed by Clara.
                    </p>
                    <div className="flex gap-6 text-sm text-neutral-500 dark:text-neutral-400">
                        <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
