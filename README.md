# BarberLagi — Sistem Booking Barbershop

> **Kategori proyek: Web App — Sistem Booking / Reservasi Online.**
> Form multi-step interaktif: layanan → kapster → jadwal → data → konfirmasi.

Situs + sistem booking untuk barbershop fiktif "BarberLagi" di Bandung.
Proyek ini adalah **concept demo** untuk portofolio jasa pembuatan web —
seluruh merek, kapster, dan slot jadwal bersifat fiktif.

**Live:** https://barberlagi.vercel.app

## Fitur

- Hero dengan foto suasana barbershop + info jam buka & lokasi
- 6 layanan lengkap dengan durasi dan harga; tombol "Pilih" langsung
  membawa pengunjung ke alur booking
- **Alur booking 4 langkah** dengan stepper:
  1. Pilih layanan
  2. Pilih kapster (atau "Siapa Saja")
  3. Pilih tanggal (7 hari ke depan) + slot jam — slot yang sudah penuh
     tampil tercoret otomatis
  4. Isi nama + nomor WhatsApp, cek ringkasan
- Layar konfirmasi dengan **kode booking unik** + tombol kirim ringkasan
  booking ke WhatsApp admin
- Data booking tersimpan di localStorage
- Fully responsive + animasi antar langkah

## Untuk siapa demo ini?

Barbershop, klinik, salon, studio foto, bimbel — semua bisnis berbasis
jadwal yang butuh pelanggan memesan slot sebelum datang.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animasi stepper)
- Lucide Icons

## Menjalankan

```bash
npm install
npm run dev      # development
npm run build    # production build ke folder dist/
npm run preview  # preview hasil build
```

---

Dibuat oleh [Agni Miftah Fauzi](https://github.com/Atazyyy) — jasa pembuatan
website & web app. Demo lain: [tanamanies-cafe.vercel.app](https://tanamanies-cafe.vercel.app) ·
[teinun.vercel.app](https://teinun.vercel.app) · [lapakhub.vercel.app](https://lapakhub.vercel.app)
