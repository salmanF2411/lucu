# ♡ My Cute Corner — Suci Mahesa Putri

Landing page personal bertema **Cute Pink Cat Paradise** (HTML5, CSS3, Bootstrap 5.3, JavaScript vanilla).

## Menjalankan
Buka `index.html` langsung di browser, atau jalankan server lokal:

```bash
npx -y serve .
# atau
python -m http.server 8000
```

## Struktur
```
index.html
assets/css/style.css     → design tokens, tema, responsif, animasi
assets/js/script.js      → filter galeri, lightbox, salin email, back-to-top, reveal
assets/images/profile/   → foto profil (suci.jpeg)
assets/images/cats/      → foto/ilustrasi galeri kucing
assets/images/decorations/ → stiker dekorasi
favicon/favicon.svg
```

## Mengganti konten
- **Placeholder** ditandai dengan komentar `<!-- GANTI: ... -->` dan teks bergaris putus-putus `✎` di `index.html`
  (hobi, minuman favorit, kepribadian, musik/film, camilan).
- **Kontak**: isi atribut `data-email` dan `data-instagram` pada `<section id="kontak">`.
  Jika kosong, tombol email/Instagram otomatis disembunyikan.
- **Galeri**: tambah item `.gallery-item` dengan `data-category` = `imut` | `pemalas` | `aktif` | `ilustrasi`,
  lalu isi `data-caption` dan `alt` gambar.
- **Warna**: ubah CSS variables di bagian atas `style.css`.

> Gambar kucing pada galeri adalah gambar hasil generate AI dan boleh diganti dengan foto milik sendiri.
