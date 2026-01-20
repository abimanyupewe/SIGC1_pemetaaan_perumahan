# Pemetaan Perumahan

Proyek Sistem Informasi Geografis (SIG) berbasis web untuk pemetaan persebaran perumahan di wilayah Mulyorejo dan Sukun, Kota Malang. Aplikasi ini menyajikan visualisasi peta interaktif dengan data spasial yang mendetail.

## Tentang Proyek

Aplikasi ini dikembangkan sebagai bagian dari tugas mata kuliah Sistem Informasi Geografis. Tujuannya adalah untuk memberikan informasi yang mudah diakses mengenai lokasi perumahan, fasilitas umum, dan infrastruktur terkait seperti jalan dan sungai di area target.

Fitur Utama:
- Peta Digital Interaktif (WebGIS) menggunakan OpenLayers.
- Layer informasi lengkap: Jalan, Sungai, Fasilitas Umum, Area Perumahan, dll.
- Informasi detail perumahan (Nama, Alamat, Luas Area).
- Pencarian dan filter data.
- Desain responsif dan modern.

## Teknologi (Tech Stack)

Proyek ini dibangun menggunakan stack teknologi modern untuk memastikan performa yang cepat dan pengalaman pengguna yang baik:

- Frontend Framework: React (v18)
- Build Tool: Vite
- Bahasa Pemrograman: TypeScript
- Styling: Tailwind CSS
- Peta Interaktif: OpenLayers
- Animasi: Framer Motion & GSAP
- Routing: React Router DOM
- Deployment: Vercel

## Struktur Folder

Berikut adalah gambaran umum struktur direktori proyek:

/project-root
|-- /public
|   |-- /web_gis       # Hasil ekspor QGIS/WebGIS (Layer, Styles, Index.html peta)
|   -- vite.svg
|-- /src
|   |-- /assets        # Gambar dan aset statis
|   |-- /components    # Komponen React yang dapat digunakan kembali (Navbar, Hero, dll)
|   |-- /hooks         # Custom React Hooks
|   |-- /pages         # Halaman utama aplikasi (Home, DataPage, FullMap)
|   |-- /web_gis       # Komponen wrapper untuk memuat peta iframe
|   |-- App.tsx        # Komponen root dan konfigurasi routing
|   -- main.tsx       # Entry point aplikasi
|-- index.html         # HTML utama
|-- package.json       # Dependensi dan skrip proyek
|-- vercel.json        # Konfigurasi deployment Vercel (Rewrite rules)
|-- vite.config.ts     # Konfigurasi Vite
`-- ...

## Setup Awal

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputer lokal Anda:

1. Prasyarat
Pastikan Node.js (versi terbaru atau LTS) sudah terinstal di komputer Anda.

2. Instalasi
Buka terminal dan arahkan ke direktori proyek, lalu jalankan perintah:

npm install

3. Menjalankan Server Development
Untuk memulai server pengembangan lokal:

npm run dev

Aplikasi akan berjalan di http://localhost:5173 (atau port lain yang tersedia).

4. Build untuk Produksi
Untuk membuat versi produksi yang optimal:

npm run build

## Lisensi

Proyek ini dibuat untuk tujuan pendidikan.
