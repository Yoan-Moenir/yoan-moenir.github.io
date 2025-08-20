/* ==========================
   SCRIPT.JS
   Semua interaksi halaman
   ========================== */

/* ==========================
   1. Toggle Menu Mobile
   ========================== */
const menuToggle = document.getElementById("menu-toggle"); // tombol ☰
const mobileMenu = document.getElementById("menu"); // navigasi utama

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    // saat tombol diklik, tambahkan/hilangkan class "active"
    // pastikan di CSS ada aturan .active { display:block; } untuk menu mobile
  });
}

/* ==========================
   2. Slider Headline Otomatis
   ========================== */

const slides = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides"); // ambil container slides
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;
let slideInterval = null;

// Fungsi tampilkan slide sesuai index (looping biar balik lagi ke awal/akhir)
function showSlide(index) {
  if (index >= slides.length) {
    index = 0; // kembali ke slide pertama
  } else if (index < 0) {
    index = slides.length - 1; // kalau mundur dari slide pertama, lompat ke terakhir
  }

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  if (dots.length > 0) {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  currentSlide = index;
}
// Fungsi pindah ke slide berikutnya
function nextSlide() {
  showSlide(currentSlide + 1);
}

// Fungsi pindah ke slide sebelumnya
function prevSlide() {
  showSlide(currentSlide - 1);
}

// Jalankan autoplay
function startAutoSlide() {
  stopAutoSlide();
  slideInterval = setInterval(nextSlide, 4000);
}

// Hentikan autoplay
function stopAutoSlide() {
  if (slideInterval) {
    clearInterval(slideInterval);
    slideInterval = null;
  }
}

// Tombol navigasi slider (jika ada)
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    prevSlide();
    startAutoSlide();
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    nextSlide();
    startAutoSlide();
  });
}

// Klik pada dot navigasi
if (dots.length > 0) {
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
      startAutoSlide();
    });
  });
}

// Tampilkan slide pertama dan mulai autoplay
if (slides.length > 0) {
  showSlide(currentSlide);
  startAutoSlide();
}

/* ==========================BERITA 3 KOLOM*/
const newsContainer = document.querySelector(".news-columns");
document.querySelector(".news-nav.left").addEventListener("click", () => {
  newsContainer.scrollBy({ left: -320, behavior: "smooth" });
});
document.querySelector(".news-nav.right").addEventListener("click", () => {
  newsContainer.scrollBy({ left: 320, behavior: "smooth" });
});

/* ==========================
   3. (Opsional) Future Script
   ==========================
   Kalau nanti ada fitur tambahan
   seperti navigasi berita, donasi,
   iklan scroll, dll → taruh di sini
   biar tidak campur aduk.
*/
