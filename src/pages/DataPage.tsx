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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Search, MapPin } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

// Mock Data
// Mock Data
// Merged Data from User Input + WebGIS Layer (AREAPERUMAHAN_10)
const housingData = [
    // 1. User Verified Data
    { id: 1, name: "Perumahan Taman Mulyorejo", address: "Jl. Raya Tebo Sel. Gg Ikilaptop, Mulyorejo, Kec. Sukun, Kota Malang, Jawa Timur 65147", luas: "0.436 Ha", unit: 45, status: "Terverifikasi" },
    { id: 2, name: "The Village", address: "Perumahan The Village, Blok G5, Mulyorejo, Sukun, Malang City, East Java 65147", luas: "1.141 Ha", unit: 80, status: "Terverifikasi" },
    { id: 3, name: "Pondok Indah Mulyorejo Mandiri", address: "Jl. Raya Mulyorejo No.101, Mulyorejo, Kec. Sukun, Kota Malang, Jawa Timur 65147", luas: "1.171 Ha", unit: 120, status: "Terverifikasi" },
    { id: 4, name: "Mulyorejo Residence", address: "Jl. Raya Mulyorejo No.95, Mulyorejo, Kec. Sukun, Kota Malang, Jawa Timur 65147", luas: "-", unit: 50, status: "Terverifikasi" }, // No spatial match found
    { id: 5, name: "Perumahan Taman Graha Mulyorejo", address: "Jl. Raya Tebo Sel. No.11, Mulyorejo, Kec. Sukun, Kota Malang, Jawa Timur 65147", luas: "0.323 Ha", unit: 40, status: "Terverifikasi" },
    { id: 6, name: "Perum Safe Garden", address: "Jl. Raya Tebo Sel., Mulyorejo, Kec. Sukun, Kota Malang, Jawa Timur 65147", luas: "1.096 Ha", unit: 95, status: "Terverifikasi" },
    { id: 7, name: "Tebo Regency", address: "Jl. Tebo Tengah, Mulyorejo, Kec. Sukun, Kota Malang, Jawa Timur 65146", luas: "0.277 Ha", unit: 35, status: "Terverifikasi" },
    { id: 8, name: "Perumahan Griya Mulyorejo K.13", address: "Jl. Raya Tebo Sel. Perumahan Griya Mulyorejo No.K.13, Mulyorejo, Kec. Sukun, Kota Malang, Jawa Timur 65147", luas: "0.165 Ha", unit: 25, status: "Terverifikasi" },
    { id: 9, name: "Perum. Pondok Puspa Indah", address: "Jl. Raya Tebo Sel., Mulyorejo, Kec. Sukun, Kota Malang, Jawa Timur 65147", luas: "0.392 Ha", unit: 42, status: "Terverifikasi" },
    { id: 10, name: "De Green Cempaka", address: "Jl. Raya Tebo Sel., Mulyorejo, Kec. Sukun, Kota Malang, Jawa Timur 65147", luas: "0.852 Ha", unit: 60, status: "Terverifikasi" },

    // 2. Extra Data from WebGIS (Status: Proses Validasi)
    { id: 11, name: "Perumahan Royal Regency", address: "Mulyorejo (Alamat Belum Lengkap)", luas: "0.452 Ha", unit: "-", status: "Proses Validasi" },
    { id: 12, name: "Perumahan Bandulan Regency", address: "Bandulan (Alamat Belum Lengkap)", luas: "0.400 Ha", unit: "-", status: "Proses Validasi" },
    { id: 13, name: "Perumahan Mulyorejo Regency", address: "Mulyorejo (Alamat Belum Lengkap)", luas: "1.364 Ha", unit: "-", status: "Proses Validasi" },
    { id: 14, name: "Prumahan Pondok Cempaka Indah", address: "Mulyorejo (Alamat Belum Lengkap)", luas: "3.993 Ha", unit: "-", status: "Proses Validasi" },
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
        item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
                                placeholder="Cari nama perumahan, alamat..."
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
                                    <TableHead className="w-[300px]">Nama Perumahan</TableHead>
                                    <TableHead className="min-w-[300px]">Alamat</TableHead>
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
                                                <div className="flex items-start gap-2">
                                                    <MapPin className="h-4 w-4 text-neutral-400 mt-0.5 shrink-0" />
                                                    <span className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2 md:line-clamp-none">
                                                        {item.address}
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell>{item.luas}</TableCell>
                                            <TableCell className="text-right">{item.unit}</TableCell>
                                            <TableCell className="text-center">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                                                ${item.status === 'Terverifikasi'
                                                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800'
                                                        : 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800'
                                                    }
                                                `}>
                                                    {item.status}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button variant="ghost" size="sm" className="h-8 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">
                                                            Detail
                                                        </Button>
                                                    </DialogTrigger>
                                                    <DialogContent className="sm:max-w-[425px] bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
                                                        <DialogHeader>
                                                            <DialogTitle className="text-xl font-bold text-neutral-900 dark:text-neutral-100 pr-8">
                                                                {item.name}
                                                            </DialogTitle>
                                                            <DialogDescription className="text-neutral-500 dark:text-neutral-400">
                                                                Detail informasi properti
                                                            </DialogDescription>
                                                        </DialogHeader>
                                                        <div className="grid gap-4 py-4">
                                                            <div className="space-y-1">
                                                                <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Alamat Lengkap</h4>
                                                                <p className="text-sm text-neutral-900 dark:text-neutral-200 leading-relaxed bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-lg border border-neutral-100 dark:border-neutral-800">
                                                                    {item.address}
                                                                </p>
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div className="space-y-1">
                                                                    <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Luas Area</h4>
                                                                    <p className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                                                                        {item.luas}
                                                                    </p>
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Jumlah Unit</h4>
                                                                    <p className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                                                                        {item.unit} Unit
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="space-y-1 pt-2">
                                                                <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">Status Validasi</h4>
                                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border
                                                                    ${item.status === 'Terverifikasi'
                                                                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800'
                                                                        : 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800'
                                                                    }
                                                                `}>
                                                                    {item.status === 'Terverifikasi' ? '✅ Terverifikasi' : '⚠️ Proses Validasi'}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
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
