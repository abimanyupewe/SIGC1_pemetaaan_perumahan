import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
    question: string;
    answer: string;
}

const faqs: FaqItem[] = [
    {
        question: "Apa itu SIG Pemetaan Perumahan?",
        answer: "Sistem Informasi Geografis (SIG) ini adalah platform digital yang memetakan sebaran perumahan di wilayah Mulyorejo dan Sukun, Kota Malang. Sistem ini menyajikan data lokasi, luas area, jumlah unit, dan status legalitas perumahan secara interaktif."
    },
    {
        question: "Bagaimana cara menggunakan peta interaktif?",
        answer: "Anda dapat menggunakan mouse untuk menggeser (drag) peta dan scroll untuk memperbesar/memperkecil (zoom). Klik pada marker atau area perumahan yang muncul untuk melihat detail informasi seperti nama pengembang, luas, dan status perizinan."
    },
    {
        question: "Apakah data yang ditampilkan akurat?",
        answer: "Data yang kami sajikan bersumber dari survei lapangan dan instansi terkait. Kami berupaya memperbarui data secara berkala (Live Data), namun disarankan untuk memverifikasi langsung ke pihak pengembang atau dinas terkait untuk keperluan legalitas resmi."
    },
    {
        question: "Bisakah saya mengunduh data perumahan?",
        answer: "Saat ini fitur unduh data belum tersedia untuk publik. Namun, Anda dapat melihat ringkasan data melalui halaman 'Data Perumahan' yang menyajikan tabel lengkap dengan fitur pencarian."
    },
    {
        question: "Bagaimana cara melaporkan data yang tidak sesuai?",
        answer: "Jika Anda menemukan kesalahan data, silakan hubungi kami melalui kontak yang tersedia di bagian Footer situs ini. Kami sangat menghargai partisipasi masyarakat dalam menjaga akurasi data."
    }
];

const AccordionItem = ({ item, isOpen, onClick }: { item: FaqItem, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden bg-white dark:bg-card mb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={onClick}
            >
                <span className="font-semibold text-neutral-800 dark:text-neutral-200 text-lg">{item.question}</span>
                <ChevronDown
                    className={`w-5 h-5 text-indigo-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-neutral-600 dark:text-muted-foreground leading-relaxed">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleItemClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 relative bg-neutral-50 dark:bg-background/50 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium mb-6">
                        <HelpCircle className="w-4 h-4" />
                        <span>FAQ</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <p className="text-neutral-600 dark:text-muted-foreground text-lg">
                        Temukan jawaban cepat mengenai penggunaan sistem dan informasi data perumahan.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            item={faq}
                            isOpen={openIndex === index}
                            onClick={() => handleItemClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
