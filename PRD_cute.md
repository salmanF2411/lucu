# PRODUCT REQUIREMENTS DOCUMENT (PRD)
# Cute Pink Cat Paradise — Personal Landing Page

**Versi dokumen:** 1.0  
**Jenis produk:** Personal website / landing page statis  
**Bahasa utama:** Bahasa Indonesia  
**Teknologi:** HTML5, CSS3, Bootstrap 5, JavaScript vanilla  
**Target perangkat:** Desktop, laptop, tablet, dan smartphone

---

## 1. Ringkasan Produk

**Cute Pink Cat Paradise** adalah landing page personal dengan karakter visual kawaii yang menggabungkan warna pink pastel, ilustrasi atau foto kucing, dekorasi pita, hati, paw prints, dan elemen scrapbook yang ringan. Halaman ini memperkenalkan pemiliknya secara personal melalui profil singkat, minat, galeri kucing, aktivitas atau karya, serta informasi kontak.

Website harus terasa lucu, hangat, dan menyenangkan, tetapi tetap mudah dibaca, dinavigasi, dan digunakan. Desain tidak boleh membuat dekorasi atau animasi mengganggu konten utama.

### 1.1 Tujuan utama

1. Memperkenalkan pemilik website secara singkat dan menarik.
2. Menyajikan identitas personal dengan gaya visual pink pastel dan kucing.
3. Menampilkan foto/ilustrasi kucing dalam galeri yang menyenangkan.
4. Menampilkan minat, aktivitas, karya, atau fakta kecil tentang pemilik.
5. Menyediakan cara mudah untuk menghubungi pemilik.
6. Menjadi proyek frontend yang sederhana, mudah dipahami, dan gampang dikembangkan.

### 1.2 Prinsip produk

- **Cute, not cluttered:** banyak elemen lucu, tetapi layout tetap rapi.
- **Personal first:** informasi tentang pemilik lebih penting daripada dekorasi.
- **Mobile-friendly:** pengalaman di ponsel tetap nyaman.
- **Lightweight:** animasi dan gambar tidak membuat halaman lambat.
- **Accessible:** teks terbaca, kontrol dapat digunakan dengan keyboard, dan gerakan dapat dikurangi.

---

## 2. Sasaran Pengguna

### 2.1 Pengunjung

Orang yang membuka link untuk mengenal pemilik website, melihat galeri, membaca minat, atau menghubungi pemilik.

### 2.2 Pemilik website

Orang yang ingin mempunyai halaman personal dengan tampilan khas, lucu, dan mudah diperbarui melalui pengeditan file HTML.

### 2.3 Kebutuhan pengguna

- Memahami siapa pemilik website dari bagian pertama halaman.
- Menemukan bagian Tentang Saya, Galeri, Minat, dan Kontak dengan cepat.
- Melihat gambar kucing tanpa gambar pecah atau terpotong secara buruk.
- Menggunakan website di layar kecil.
- Menemukan tautan kontak yang benar-benar bekerja.

---

## 3. Ruang Lingkup

### 3.1 Fitur yang termasuk

- Landing page satu halaman (*single-page website*).
- Navbar dan navigasi anchor ke setiap section.
- Hero section dengan headline personal dan ilustrasi kucing.
- Section Tentang Saya.
- Section Galeri Kucing.
- Section Minat atau Hal Favorit.
- Section Aktivitas/Karya (opsional dan dapat disembunyikan bila tidak dibutuhkan).
- Quote atau pesan kecil.
- Section Kontak dan tautan media sosial.
- Footer.
- Interaksi sederhana dengan JavaScript.
- Animasi ringan, hover effect, dan dekorasi visual.
- Layout responsif.
- Metadata dasar untuk browser dan berbagi link.

### 3.2 Tidak termasuk dalam versi pertama

- Login atau registrasi pengguna.
- Database dan backend PHP.
- CMS atau dashboard untuk mengedit konten.
- Pengiriman email melalui server.
- E-commerce atau checkout.
- Sistem komentar.
- Unggahan foto oleh pengunjung.
- Integrasi API berbayar.

> Catatan: tombol kontak dapat menggunakan tautan email (`mailto:`) atau tautan media sosial. Form kontak tidak boleh mengaku telah mengirim pesan jika belum dihubungkan dengan backend atau layanan form.

---

## 4. Teknologi yang Dipilih

### 4.1 HTML5

Untuk struktur semantik halaman: `header`, `nav`, `main`, `section`, `article`, dan `footer`.

### 4.2 CSS3

Untuk custom theme, dekorasi, layout tambahan, hover state, animasi, dan responsive adjustments.

### 4.3 Bootstrap 5

Bootstrap dipilih karena menyediakan sistem grid responsif dan komponen dasar seperti navbar, container, button, card, dan modal. Penggunaan Bootstrap tidak menggantikan custom CSS; identitas kawaii tetap dibuat dengan stylesheet sendiri.

**Ketentuan implementasi:**
- Gunakan satu versi Bootstrap yang konsisten.
- Muat Bootstrap CSS dan JavaScript melalui CDN atau file lokal.
- Jangan mencampur class Bootstrap 4 dan Bootstrap 5.
- Gunakan custom CSS untuk warna, bentuk, bayangan, jarak, dan dekorasi khas.
- Jangan memakai Tailwind bersamaan dengan Bootstrap pada versi pertama agar styling tidak saling tumpang tindih.

### 4.4 JavaScript vanilla

Untuk:
- mobile navigation jika diperlukan;
- filter kategori galeri;
- lightbox/modal galeri;
- tombol kembali ke atas;
- reveal-on-scroll secara ringan;
- tahun otomatis di footer;
- interaksi dekoratif non-esensial.

### 4.5 Font dan ikon

- **Font heading:** `Nunito` atau `Quicksand`.
- **Font body:** `Nunito` atau system sans-serif.
- Gunakan Google Fonts jika koneksi eksternal tersedia; sediakan fallback.
- Ikon dapat memakai Bootstrap Icons, Font Awesome, atau emoji secara konsisten. Hindari memasang beberapa pustaka ikon jika tidak diperlukan.

---

## 5. Identitas Visual dan Design System

### 5.1 Arah desain

**Nama konsep:** Cute Pink Cat Paradise  
**Gaya:** kawaii, pastel, cozy, playful, scrapbook ringan.

Elemen visual yang disarankan:
- kucing lucu sebagai ilustrasi utama;
- pita/bow, hati, bintang, bunga kecil, dan jejak kaki;
- bingkai foto menyerupai stiker;
- kartu dengan sudut membulat;
- garis putus-putus atau border dekoratif pada area tertentu;
- background dengan variasi putih susu dan pink pastel;
- ruang kosong yang cukup agar halaman tidak terlihat penuh.

### 5.2 Palet warna

| Token | Hex | Penggunaan |
|---|---|---|
| `--pink-primary` | `#F4A7C5` | Tombol utama, highlight, elemen identitas |
| `--pink-soft` | `#FFE4EF` | Panel lembut, card, dekorasi |
| `--pink-light` | `#FFF1F6` | Background utama |
| `--pink-deep` | `#D85F93` | Link aktif dan aksen yang perlu menonjol |
| `--cream` | `#FFF9F2` | Background alternatif |
| `--lavender` | `#E9DDFB` | Aksen sekunder |
| `--mint` | `#DDF3E4` | Variasi warna pada sticker/card |
| `--text-main` | `#493743` | Teks utama |
| `--text-muted` | `#796A77` | Teks sekunder |
| `--white` | `#FFFFFF` | Card dan area kontras |

**Aturan penggunaan warna:**
- Pink pastel dan putih menjadi warna dominan.
- Pink tua digunakan untuk teks link, border penting, dan tombol agar kontras lebih baik.
- Lavender dan mint hanya menjadi aksen kecil.
- Hindari memakai pink pucat untuk teks berukuran kecil di atas putih.
- Status hover/focus harus terlihat jelas.

### 5.3 Tipografi

- Heading: Nunito ExtraBold atau Quicksand Bold.
- Body: Nunito Regular.
- Heading hero: sekitar 2,5–3,8 rem pada desktop dan 2–2,5 rem pada mobile, menyesuaikan lebar.
- Body: 1–1,125 rem.
- Line-height isi teks: sekitar 1,5–1,8.
- Batasi panjang baris agar paragraf mudah dibaca.

### 5.4 Bentuk dan efek

- Radius card: 18–28 px.
- Tombol utama berbentuk pill atau sudut membulat.
- Shadow: lembut dan tidak terlalu gelap.
- Border: pink muda atau putih.
- Hover: sedikit naik (`translateY`) dan bayangan sedikit bertambah.
- Hindari efek berkedip, animasi sangat cepat, atau efek yang terus bergerak tanpa tujuan.

---

## 6. Struktur Halaman dan Persyaratan UI

### 6.1 Navbar

**Tujuan:** membantu pengunjung berpindah ke section utama.

**Konten:**
- Logo/wordmark: `♡ My Cute Corner` (nama dapat diubah).
- Beranda
- Tentang Saya
- Galeri Kucing
- Favorit
- Kontak
- Tombol kecil “Say Hi!”

**Perilaku:**
- Item navigasi mengarah ke ID section yang sesuai.
- Navbar berubah menjadi menu collapse pada layar kecil.
- Menu mobile dapat dibuka dan ditutup dengan mudah.
- Link aktif atau hover memiliki indikator yang terlihat.
- Navigasi tetap dapat digunakan dengan keyboard.

### 6.2 Hero Section

**Tujuan:** memberi kesan pertama dan mengenalkan pemilik.

**Layout desktop:**
- Kolom kiri: sapaan kecil, headline, deskripsi singkat, tombol.
- Kolom kanan: foto/ilustrasi kucing dalam frame atau sticker.
- Dekorasi kecil: hati, bow, bintang, paw print.

**Layout mobile:**
- Headline dan deskripsi berada di atas.
- Ilustrasi kucing diletakkan di bawah atau sesudah headline.
- CTA tetap mudah ditemukan tanpa scroll panjang.

**Contoh copy:**
- Label: `૮ ˶ᵔ ᵕ ᵔ˶ ა hello there!`
- Headline: `Welcome to my little pink world ♡`
- Deskripsi: `Sudut kecil untuk cerita tentang aku, hal-hal favorit, dan kucing-kucing menggemaskan.`
- Tombol utama: `Kenalan Yuk`
- Tombol sekunder: `Lihat Kucing`

Teks ini merupakan placeholder dan harus mudah diganti oleh pemilik website.

### 6.3 Tentang Saya

**Tujuan:** memperkenalkan pemilik secara personal.

**Konten:**
- foto avatar (opsional);
- nama atau nama panggilan;
- deskripsi singkat;
- tiga fakta kecil tentang pemilik.

**Contoh struktur:**
- “Hai, aku [Nama]!”
- “Aku suka [hobi], warna pink, dan kucing.”
- Fakta kecil:
  - Minuman favorit: [isi]
  - Hobi: [isi]
  - Kepribadian: [isi]

**UI:** satu card utama dengan ilustrasi kecil atau tiga mini-card. Informasi yang belum diberikan harus berupa placeholder, bukan dibuat sebagai fakta tentang pemilik.

### 6.4 Galeri Kucing

**Tujuan:** menampilkan gambar/ilustrasi kucing sebagai pusat tema visual.

**Konten setiap item:**
- gambar;
- nama atau judul singkat;
- caption opsional;
- kategori opsional.

**Kategori contoh:**
- Semua
- Si Imut
- Si Pemalas
- Si Aktif
- Ilustrasi

Kategori adalah label visual; isi akhirnya dapat disesuaikan dengan gambar yang tersedia.

**Perilaku:**
- Filter kategori memperlihatkan item yang sesuai tanpa reload.
- Klik gambar membuka modal/lightbox dengan gambar lebih besar dan caption.
- Modal dapat ditutup dengan tombol close, tombol Escape, atau kontrol penutup yang jelas.
- Gambar tidak boleh melebar hingga merusak layout.
- Semua gambar memiliki atribut `alt` yang bermakna.

**Sumber gambar:**
- Utamakan gambar milik sendiri atau aset yang boleh digunakan.
- Bila memakai gambar eksternal, pastikan lisensi dan URL dapat diandalkan.
- Sediakan fallback/placeholder jika gambar gagal dimuat.

### 6.5 Hal-Hal Favorit

**Tujuan:** menambah karakter personal dan variasi visual.

**Contoh kategori:**
- Warna favorit
- Musik/film favorit
- Camilan favorit
- Hobi
- Kucing favorit

**UI:** grid 2–4 card bergantung ukuran layar, dengan ikon atau ilustrasi sederhana, judul pendek, dan deskripsi satu atau dua baris.

Isi setiap card dapat diubah dari HTML tanpa mengubah logika JavaScript.

### 6.6 Aktivitas atau Karya (Opsional)

Section ini dapat dipakai untuk proyek, gambar, tulisan, journaling, atau aktivitas personal.

**Elemen card:**
- thumbnail;
- judul;
- ringkasan;
- tautan jika tersedia.

Jika pemilik tidak membutuhkan section ini, bagian tersebut dapat dihilangkan tanpa merusak navigasi.

### 6.7 Cute Quote / Message

**Tujuan:** memberi jeda visual dan memperkuat suasana hangat.

**Contoh copy:**
> “Small things, soft hearts, and lots of cat cuddles. ♡”

Quote harus singkat, mudah dibaca, dan tidak mengalihkan perhatian dari konten utama.

### 6.8 Kontak

**Tujuan:** memberi cara bagi pengunjung untuk menyapa pemilik.

**Konten:**
- ajakan “Let’s be friends!”
- email (placeholder);
- tautan Instagram atau media sosial lain (opsional);
- tombol `Kirim Email`;
- tombol `Salin Email` jika email sudah diisi.

**Perilaku:**
- `mailto:` membuka aplikasi email pengguna.
- Tombol salin memakai Clipboard API jika tersedia, serta menampilkan pesan berhasil/gagal.
- Jangan menampilkan link sosial palsu.
- Bila data kontak belum tersedia, gunakan placeholder atau sembunyikan tombol terkait.

### 6.9 Footer

**Konten:**
- wordmark website;
- teks pendek;
- tautan navigasi ringkas;
- tahun otomatis;
- dekorasi paw/bow kecil.

Contoh: `Made with ♡, pink pixels, and cat energy.`

---

## 7. User Flow

### Pengunjung umum

1. Membuka landing page.
2. Melihat hero dan memahami tema/pemilik.
3. Menekan “Kenalan Yuk” atau menggunakan navbar.
4. Membaca bagian Tentang Saya.
5. Menjelajahi galeri dan membuka gambar.
6. Melihat minat atau aktivitas.
7. Menghubungi pemilik melalui tautan yang tersedia.

### Navigasi mobile

1. Pengunjung membuka menu hamburger.
2. Memilih section tujuan.
3. Menu menutup setelah navigasi.
4. Halaman bergulir ke section dengan offset yang sesuai agar judul tidak tertutup navbar.

---

## 8. Fitur Interaktif

| ID | Fitur | Perilaku yang diharapkan | Prioritas |
|---|---|---|---|
| INT-01 | Mobile navbar | Menu dapat dibuka dan ditutup; link navigasi berfungsi | Wajib |
| INT-02 | Smooth scroll | Tombol dan navbar berpindah ke section dengan halus | Wajib |
| INT-03 | Filter galeri | Kartu yang tampil sesuai filter yang dipilih | Wajib |
| INT-04 | Lightbox galeri | Gambar dapat dilihat lebih besar dan modal dapat ditutup | Wajib |
| INT-05 | Hover card | Card naik sedikit dan shadow berubah secara halus | Wajib |
| INT-06 | Reveal on scroll | Section muncul secara lembut ketika terlihat | Opsional |
| INT-07 | Back to top | Tombol muncul setelah scroll dan mengembalikan ke atas | Opsional |
| INT-08 | Copy email | Email tersalin dan notifikasi status tampil | Opsional |
| INT-09 | Tahun otomatis | Tahun pada footer mengikuti tahun berjalan | Wajib |
| INT-10 | Dekorasi kucing | Elemen dekoratif tidak menghalangi konten atau klik | Wajib |

Semua interaksi utama harus tetap bisa digunakan ketika animasi non-esensial dimatikan.

---

## 9. Animasi dan Microinteractions

### 9.1 Animasi yang diperbolehkan

- Fade-in atau slide-up lembut saat section memasuki viewport.
- Floating ringan pada satu ilustrasi kucing.
- Hover card dengan gerakan kecil.
- Button hover dengan perubahan warna/shadow.
- Transisi filter galeri.
- Modal fade.

### 9.2 Batasan animasi

- Hindari animasi dekorasi yang membuat teks sulit dibaca.
- Jangan menjalankan banyak animasi besar secara bersamaan.
- Hindari parallax berat.
- Jangan membuat kursor khusus sebagai satu-satunya cara interaksi.
- Hormati preferensi `prefers-reduced-motion`.
- Jangan menyembunyikan konten penting jika JavaScript tidak berjalan.

### 9.3 Reduced motion

Jika browser menyetel `prefers-reduced-motion: reduce`, minimalkan atau hilangkan gerakan yang tidak penting. Konten tetap harus terlihat dan fungsional.

---

## 10. Responsivitas

Gunakan grid Bootstrap dan custom breakpoints bila diperlukan.

### Desktop (≥ 992 px)

- Navbar horizontal.
- Hero dua kolom.
- Galeri 3–4 kolom.
- Favorit 3–4 kolom.
- Jarak antarseksi lapang.

### Tablet (768–991 px)

- Hero dua kolom yang lebih rapat atau ditumpuk jika diperlukan.
- Galeri 2–3 kolom.
- Heading menyesuaikan ukuran layar.
- Navbar collapse bila ruang tidak cukup.

### Mobile (< 768 px)

- Navbar hamburger.
- Hero satu kolom.
- CTA dapat bertumpuk.
- Galeri dua kolom; gunakan satu kolom jika ukuran gambar atau teks memerlukan.
- Teks tidak boleh meluber secara horizontal.
- Tombol memiliki area sentuh yang cukup.
- Modal gambar tidak boleh lebih lebar daripada viewport.
- Hindari dekorasi yang menutupi tombol atau teks.

### Ketentuan umum

- Tidak boleh ada horizontal scrolling pada viewport standar.
- Gambar menggunakan `max-width: 100%` dan rasio yang sesuai.
- Hindari menetapkan tinggi tetap pada card berisi teks variatif.
- Gunakan container dan spacing responsif Bootstrap.

---

## 11. Aksesibilitas

1. Gunakan landmark semantik: `header`, `nav`, `main`, `section`, `footer`.
2. Setiap section utama memiliki heading yang berurutan dan jelas.
3. Sediakan `alt` bermakna untuk gambar konten; gambar dekoratif memakai `alt=""`.
4. Navigasi, filter, modal, dan tombol dapat digunakan menggunakan keyboard.
5. Focus state terlihat jelas dan tidak dihilangkan tanpa pengganti.
6. Tombol menggunakan elemen `<button>` dan tautan menggunakan `<a>` sesuai fungsinya.
7. Jangan menggunakan warna sebagai satu-satunya penanda status.
8. Pastikan kontras teks cukup, terutama teks pink di atas background putih.
9. Hormati pengaturan reduced motion.
10. Jangan menggunakan emoji sebagai pengganti label tombol yang penting.
11. Modal harus memiliki label yang jelas dan fokus tidak hilang ke elemen di belakangnya.
12. Ukuran teks dan tombol harus nyaman untuk layar mobile.

---

## 12. Konten dan Aset

### 12.1 Konten yang dapat diganti

- Nama/alias pemilik
- Foto profil
- Headline hero
- Deskripsi diri
- Fakta personal
- Gambar galeri kucing
- Caption setiap gambar
- Hobi/minat
- Aktivitas/karya
- Email
- Tautan media sosial
- Quote

### 12.2 Aset gambar

Direkomendasikan struktur:
- `assets/images/profile/` untuk foto profil;
- `assets/images/cats/` untuk galeri;
- `assets/images/decorations/` untuk sticker/dekorasi.

Gunakan gambar yang dioptimalkan untuk web. Sediakan teks alternatif, fallback jika gambar gagal dimuat, dan ukuran gambar yang proporsional. Hindari memakai terlalu banyak gambar beresolusi besar dalam satu viewport.

---

## 13. Struktur Folder yang Disarankan

```text
cute-pink-cat-page/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       ├── profile/
│       ├── cats/
│       └── decorations/
└── favicon/
    └── favicon.png
```

### Tanggung jawab file

- `index.html`: struktur konten dan pemanggilan library.
- `assets/css/style.css`: design tokens, theme, responsive styling, animasi.
- `assets/js/script.js`: filter galeri, lightbox, copy email, back-to-top, dan interaksi lainnya.
- `assets/images/`: aset lokal website.
- `README.md`: petunjuk menjalankan dan mengganti konten.

Untuk versi pertama, tidak diperlukan framework JavaScript tambahan.

---

## 14. Persyaratan Teknis dan Kualitas

### Performa

- Hindari library yang tidak dibutuhkan.
- Gunakan gambar yang sudah dioptimalkan.
- Gunakan `loading="lazy"` untuk gambar di bawah fold.
- Tetapkan `width` dan `height` atau `aspect-ratio` agar layout tidak bergeser saat gambar dimuat.
- Hindari animasi berat dan terlalu banyak font.
- Website harus tetap menampilkan konten inti jika JavaScript tidak tersedia.

### Kompatibilitas

Targetkan versi terbaru browser utama: Chrome, Edge, Firefox, dan Safari desktop/mobile.

### Pemeliharaan

- Pisahkan HTML, CSS, dan JavaScript.
- Gunakan CSS custom properties untuk warna dan ukuran yang sering dipakai.
- Hindari menyalin aturan CSS yang sama berkali-kali.
- Beri nama class yang jelas.
- Jangan mencampur versi Bootstrap.

### SEO dasar

- Judul halaman yang sesuai.
- Meta description yang singkat.
- `lang="id"` pada elemen HTML.
- Favicon.
- Open Graph metadata jika halaman akan dibagikan ke media sosial.
- Teks heading yang bermakna.

---

## 15. Kriteria Penerimaan (Acceptance Criteria)

### AC-01 — Struktur

- [ ] File `index.html`, `style.css`, dan `script.js` tersedia.
- [ ] Halaman memiliki navbar, hero, Tentang Saya, Galeri Kucing, Favorit, Kontak, dan Footer.
- [ ] Konten personal yang belum ditentukan ditandai sebagai placeholder yang mudah diganti.

### AC-02 — Visual

- [ ] Pink pastel dan putih menjadi warna dominan.
- [ ] Ilustrasi/foto kucing terlihat sebagai elemen visual utama.
- [ ] Card, tombol, badge, dan dekorasi memakai gaya yang konsisten.
- [ ] Teks utama mudah dibaca.
- [ ] Dekorasi tidak menutupi konten atau kontrol.

### AC-03 — Navigasi

- [ ] Setiap link navbar menuju section yang benar.
- [ ] Menu mobile dapat dibuka dan ditutup.
- [ ] Navigasi keyboard memiliki focus state yang terlihat.

### AC-04 — Galeri

- [ ] Gambar galeri tampil dengan rasio yang layak.
- [ ] Filter kategori bekerja tanpa reload.
- [ ] Klik gambar membuka lightbox.
- [ ] Lightbox dapat ditutup dengan kontrol yang jelas.
- [ ] Jika gambar gagal dimuat, layout tidak rusak.

### AC-05 — Interaksi

- [ ] Tombol CTA bekerja sesuai tujuannya.
- [ ] Link email membuka aplikasi email melalui `mailto:`.
- [ ] Tombol copy email memberi umpan balik jika digunakan.
- [ ] Tahun footer diperbarui otomatis.
- [ ] Tidak ada tombol palsu yang terlihat aktif tetapi tidak melakukan apa pun.

### AC-06 — Responsivitas

- [ ] Tidak ada horizontal scrolling pada ukuran mobile standar.
- [ ] Navbar berfungsi pada desktop dan mobile.
- [ ] Galeri beradaptasi dengan lebar layar.
- [ ] Teks, tombol, dan modal tetap berada di dalam viewport.

### AC-07 — Aksesibilitas

- [ ] Gambar konten memiliki `alt`.
- [ ] Kontrol utama dapat digunakan dengan keyboard.
- [ ] Focus indicator terlihat.
- [ ] Preferensi reduced motion dihormati.
- [ ] Kontras teks cukup untuk dibaca.

### AC-08 — Stabilitas

- [ ] Tidak ada error JavaScript yang mencegah fitur inti berjalan.
- [ ] Website tidak membutuhkan backend untuk fitur yang dinyatakan statis.
- [ ] Konten inti masih terlihat jika JavaScript gagal dimuat.

---

## 16. Prioritas Implementasi

### Tahap 1 — Fondasi

1. Membuat struktur folder.
2. Membuat `index.html`.
3. Menghubungkan Bootstrap 5.
4. Menyiapkan `style.css` dan CSS variables.
5. Menyiapkan `script.js`.

### Tahap 2 — Konten dan Layout

1. Navbar.
2. Hero.
3. Tentang Saya.
4. Galeri Kucing.
5. Hal-Hal Favorit.
6. Kontak dan Footer.

### Tahap 3 — Polesan Visual

1. Palet warna final.
2. Typography.
3. Card dan button.
4. Dekorasi sticker, hearts, bows, dan paw prints.
5. Hover states dan animasi lembut.

### Tahap 4 — Interaksi

1. Navigasi mobile.
2. Smooth scroll.
3. Filter galeri.
4. Lightbox.
5. Copy email dan back-to-top bila digunakan.

### Tahap 5 — Validasi

1. Uji desktop, tablet, dan mobile.
2. Uji navigasi keyboard.
3. Uji reduced motion.
4. Uji link dan tombol.
5. Periksa console browser.
6. Periksa gambar gagal dimuat dan overflow.

---

## 17. Definisi Selesai

Landing page dianggap selesai ketika seluruh kriteria penerimaan wajib terpenuhi, informasi personal dan gambar dapat diganti dengan mudah, seluruh tombol dan navigasi bekerja, tampilan konsisten pada desktop serta mobile, dan elemen visual kucing/pink pastel terasa lucu tanpa mengurangi keterbacaan.

**Arah akhir desain:** personal page yang manis, cozy, kawaii, dan penuh karakter kucing—dengan pink pastel sebagai identitas utama, dekorasi yang terkontrol, serta pengalaman yang nyaman digunakan.
