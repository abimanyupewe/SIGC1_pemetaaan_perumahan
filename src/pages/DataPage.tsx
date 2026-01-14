import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Preloader } from '../components/Preloader';
import { Footer } from '../components/Footer';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Search, MapPin } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

// Mock Data
// Mock Data
const housingData = [
    { id: 1, name: "Perumahan Mulyorejo Indah", kelurahan: "Mulyorejo", luas: "2.5 Ha", unit: 150, status: "Terpetakan" },
    { id: 2, name: "Griya Damai Sentosa", kelurahan: "Mulyorejo", luas: "1.8 Ha", unit: 80, status: "Terpetakan" },
    { id: 3, name: "Cluster Harmony", kelurahan: "Mulyorejo", luas: "0.5 Ha", unit: 25, status: "Proses Validasi" },
    { id: 4, name: "Villa Puncak Tidar", kelurahan: "Karangbesuki", luas: "5.0 Ha", unit: 300, status: "Terpetakan" },
    { id: 5, name: "Residence Gardenia", kelurahan: "Bandulan", luas: "3.2 Ha", unit: 210, status: "Terpetakan" },
    { id: 6, name: "Permata Jingga 2", kelurahan: "Mulyorejo", luas: "4.1 Ha", unit: 180, status: "Terpetakan" },
    { id: 7, name: "Green View Regency", kelurahan: "Sukun", luas: "1.2 Ha", unit: 60, status: "Dalam Pendataan" },
    { id: 8, name: "Sapphire Hills", kelurahan: "Mulyorejo", luas: "0.9 Ha", unit: 45, status: "Terpetakan" },
    { id: 9, name: "Metro Housing", kelurahan: "Tanjungrejo", luas: "6.5 Ha", unit: 450, status: "Terpetakan" },
    { id: 10, name: "River Side Estate", kelurahan: "Mulyorejo", luas: "3.0 Ha", unit: 120, status: "Proses Validasi" },
    { id: 11, name: "Perumahan Bukit Cemara", kelurahan: "Karangbesuki", luas: "2.8 Ha", unit: 140, status: "Terpetakan" },
    { id: 12, name: "Elit Park Avenue", kelurahan: "Pisang Candi", luas: "1.5 Ha", unit: 75, status: "Terpetakan" },
    { id: 13, name: "Sunny Side Up", kelurahan: "Mulyorejo", luas: "0.7 Ha", unit: 30, status: "Dalam Pendataan" },
    { id: 14, name: "Royal Mulyorejo", kelurahan: "Mulyorejo", luas: "2.1 Ha", unit: 110, status: "Terpetakan" },
    { id: 15, name: "Grand Garden", kelurahan: "Bandulan", luas: "3.5 Ha", unit: 230, status: "Terpetakan" },
];

export const DataPage = () => {
    useDocumentTitle('Data Perumahan - SIG Mulyorejo');
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    // Simulate data fetching or page load delay
    useEffect(() => {
        // Preloader handles its own duration, but we can also ensure state is consistent
        // State will be unset by onComplete callback from Preloader
    }, []);

    // Filter logic
    const filteredData = housingData.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.kelurahan.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {loading && <Preloader onComplete={() => setLoading(false)} />}
            <div className="min-h-screen bg-neutral-50 dark:bg-background font-sans flex flex-col">
                <Navbar />

                <main className="container mx-auto px-4 pt-24 pb-12 flex-grow">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">Data Perumahan</h1>
                            <p className="text-neutral-600 dark:text-muted-foreground">
                                Database lengkap perumahan di wilayah target pemetaan.
                            </p>
                        </div>
                    </div>

                    {/* Filter / Search Bar */}
                    <div className="bg-white dark:bg-card p-4 rounded-xl shadow-sm border border-neutral-200 dark:border-border mb-6 flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                            <Input
                                placeholder="Cari nama perumahan, kelurahan..."
                                className="pl-9 bg-neutral-50 dark:bg-neutral-900"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral-500 ml-auto">
                            <span>Total Data:</span>
                            <span className="font-bold text-neutral-900 dark:text-neutral-100">{filteredData.length}</span>
                        </div>
                    </div>

                    {/* Data Table */}
                    <div className="bg-white dark:bg-card rounded-xl shadow-sm border border-neutral-200 dark:border-border overflow-hidden">
                        <Table>
                            <TableCaption>Daftar perumahan terdata di sistem SIG.</TableCaption>
                            <TableHeader className="bg-neutral-50 dark:bg-neutral-900/50">
                                <TableRow>
                                    <TableHead className="w-[50px] text-center">No</TableHead>
                                    <TableHead>Nama Perumahan</TableHead>
                                    <TableHead>Kelurahan</TableHead>
                                    <TableHead>Luas Area</TableHead>
                                    <TableHead className="text-right">Jumlah Unit</TableHead>
                                    <TableHead className="text-center">Status</TableHead>
                                    <TableHead className="text-right">Aksi</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredData.length > 0 ? (
                                    filteredData.map((item, index) => (
                                        <TableRow key={item.id}>
                                            <TableCell className="text-center font-medium">{index + 1}</TableCell>
                                            <TableCell className="font-medium text-neutral-900 dark:text-neutral-100">
                                                {item.name}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-3 w-3 text-neutral-400" />
                                                    {item.kelurahan}
                                                </div>
                                            </TableCell>
                                            <TableCell>{item.luas}</TableCell>
                                            <TableCell className="text-right">{item.unit}</TableCell>
                                            <TableCell className="text-center">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                                ${item.status === 'Terpetakan'
                                                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                        : item.status === 'Proses Validasi'
                                                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                                            : 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-400'
                                                    }
                                                `}>
                                                    {item.status}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="ghost" size="sm" className="h-8 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">
                                                    Detail
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={7} className="h-24 text-center">
                                            Data tidak ditemukan.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};
