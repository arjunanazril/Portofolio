let index = 0;
function moveSlide(step) {
  const carousel = document.querySelector(".carousel");
  const cards = document.querySelectorAll(".card");
  const buttons = document.querySelectorAll(".nav-button");

  // Sembunyikan tombol sejenak
  buttons.forEach((button) => button.classList.add("hidden"));

  index += step;
  if (index < 0) index = cards.length - 1;
  if (index >= cards.length) index = 0;
  carousel.style.transform = `translateX(-${index * 320}px)`;

  // Tampilkan tombol kembali setelah animasi selesai
  setTimeout(() => {
    buttons.forEach((button) => button.classList.remove("hidden"));
  }, 500);
};
