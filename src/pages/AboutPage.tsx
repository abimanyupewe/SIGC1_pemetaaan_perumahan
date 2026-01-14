import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const contributors = [
    {
        name: "Clara",
        role: "Lead Developer",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Clara", // Placeholder avatar
        bio: "Mahasiswa Semester 5 yang bersemangat dalam pengembangan WebGIS dan teknologi spasial.",
        social: {
            github: "#",
            linkedin: "#",
            email: "mailto:clara@example.com"
        }
    },
    // Add more contributors here if needed
];

export const AboutPage = () => {
    useDocumentTitle('Tentang Kami - SIG Perumahan');

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-background font-sans flex flex-col">
            <Navbar />

            <main className="grow pt-32 pb-20">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6"
                        >
                            Tentang Kami
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-neutral-600 dark:text-muted-foreground leading-relaxed"
                        >
                            Kami adalah tim yang berdedikasi untuk memetakan dan menyajikan informasi perumahan di wilayah Mulyorejo dan sekitarnya agar lebih mudah diakses oleh masyarakat.
                        </motion.p>
                    </div>

                    {/* Contributors Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {contributors.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="bg-white dark:bg-card rounded-2xl p-8 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-shadow duration-300 text-center group"
                            >
                                <div className="relative w-32 h-32 mx-auto mb-6">
                                    <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full rounded-full object-cover border-4 border-white dark:border-neutral-800 relative z-10 shadow-md"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{member.name}</h3>
                                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">{member.role}</p>
                                <p className="text-neutral-600 dark:text-muted-foreground mb-6 leading-relaxed text-sm">
                                    {member.bio}
                                </p>

                                <div className="flex justify-center gap-4">
                                    <a href={member.social.github} className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors bg-neutral-50 dark:bg-neutral-900 rounded-full">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={member.social.linkedin} className="p-2 text-neutral-500 hover:text-blue-600 transition-colors bg-neutral-50 dark:bg-neutral-900 rounded-full">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href={member.social.email} className="p-2 text-neutral-500 hover:text-red-500 transition-colors bg-neutral-50 dark:bg-neutral-900 rounded-full">
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
