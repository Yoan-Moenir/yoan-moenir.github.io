document.addEventListener("DOMContentLoaded", function () {
  // =======================
  // 1. Toggle Menu Mobile
  // =======================
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
    });
  }

  // =======================
  // 2. Slider Berita
  // =======================
  const slides = document.querySelectorAll(".slide");
  const slidesContainer = document.getElementById("slides");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;
  let interval;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoPlay() {
    interval = setInterval(nextSlide, 4000); // 4 detik sekali
  }

  function resetAutoPlay() {
    clearInterval(interval);
    startAutoPlay();
  }

  // event tombol navigasi
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoPlay();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoPlay();
    });
  }

  // mulai autoplay
  if (slides.length > 0) {
    startAutoPlay();
  }
});

