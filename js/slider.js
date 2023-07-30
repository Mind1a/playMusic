import { sliderImagesArray } from "./data.js";

// Generates images

sliderImagesArray.forEach((image) => {
  const slider = document.querySelector(".swiper-wrapper");
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");
  const sliderHTML = `<img src="${image}" alt="slider-image" />`;

  swiperSlide.innerHTML = sliderHTML;
  slider.appendChild(swiperSlide);
});

// Creates slider

const swiper = new Swiper(".slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
});
