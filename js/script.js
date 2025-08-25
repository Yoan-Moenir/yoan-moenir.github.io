/* ==========================
   SCRIPT.JS
   Semua interaksi halaman
   ========================== */

/* ==========================
   1. GESER MENU
   ========================== */
const scroller = document.getElementById("tabScroller");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

if (scroller && btnLeft && btnRight) {
  const step = 200; // jarak geser per klik

  btnLeft.addEventListener("click", () => {
    scroller.scrollBy({ left: -step, behavior: "smooth" });
  });
  btnRight.addEventListener("click", () => {
    scroller.scrollBy({ left: step, behavior: "smooth" });
  });

  function updateNavButtons() {
    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    btnLeft.disabled = scroller.scrollLeft <= 0;
    btnRight.disabled = scroller.scrollLeft >= maxScroll - 1;
  }

  scroller.addEventListener("scroll", updateNavButtons, { passive: true });
  window.addEventListener("resize", updateNavButtons);
  updateNavButtons();
}

/* ==========================
   3. IKLAN POPUP
   ========================== */
const overlay = document.getElementById("popupOverlay");
const closeBtn = document.getElementById("closeBtn");

if (overlay && closeBtn) {
  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.style.display = "none";
    }
  });
}

/* ==========================
   4. SLIDER HEADLINE OTOMATIS
   ========================== */
const slides = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;
let slideInterval = null;

function showSlide(index) {
  if (slides.length === 0) return;

  if (index >= slides.length) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
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

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function startAutoSlide() {
  stopAutoSlide();
  slideInterval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
  if (slideInterval) {
    clearInterval(slideInterval);
    slideInterval = null;
  }
}

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

if (dots.length > 0) {
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
      startAutoSlide();
    });
  });
}

if (slides.length > 0) {
  showSlide(currentSlide);
  startAutoSlide();
}

/* ==========================
   5. BERITA 3 KOLOM
   ========================== */
const newsContainer = document.querySelector(".news-columns");
const newsNavLeft = document.querySelector(".news-nav.left");
const newsNavRight = document.querySelector(".news-nav.right");

if (newsContainer && newsNavLeft && newsNavRight) {
  newsNavLeft.addEventListener("click", () => {
    newsContainer.scrollBy({ left: -320, behavior: "smooth" });
  });
  newsNavRight.addEventListener("click", () => {
    newsContainer.scrollBy({ left: 320, behavior: "smooth" });
  });
}

/* ==========================
   6. RESPONSIVE SEARCH BAR TOGGLE
   ========================== */
const searchToggle = document.getElementById("search-toggle");
const searchBox = document.getElementById("search-box");

if (searchToggle && searchBox) {
  searchToggle.addEventListener("click", () => {
    if (searchBox.style.display === "flex") {
      searchBox.style.display = "none";
    } else {
      searchBox.style.display = "flex";
    }
  });
}

/* ==========================
   7. FUTURE SCRIPT
   ==========================
   Tambahin fitur lain di sini
   ========================== */
