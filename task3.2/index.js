const buttonPrev = document.querySelector(".button-prev");
const buttonNext = document.querySelector(".button-next");
const sliderSwiper = document.querySelector(".slider-swiper");
const arrayImages = sliderSwiper.querySelectorAll("img");

const allImages = arrayImages.length;
let currentIndex = 0;

function updateSlide() {
  const offset = -currentIndex * 600;
  sliderSwiper.style.transform = `translateX(${offset}px)`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % allImages;
  updateSlide();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + allImages) % allImages;
  updateSlide();
}

let interval = setInterval(nextImage, 3000);

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextImage, 3000);
}

buttonNext.addEventListener("click", () => {
  nextImage();
  resetInterval();
});

buttonPrev.addEventListener("click", () => {
  prevImage();
  resetInterval();
});
