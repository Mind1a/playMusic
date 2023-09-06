const tutorialPageBtn = document.querySelector(".tutorial-page-btn");
const aboutPageBtn = document.querySelector(".about-page-btn");
const mainContent = document.querySelectorAll("section");
const videoContainer = document.querySelector(".video-container");
const video = document.querySelector(".video");

tutorialPageBtn.addEventListener("click", changePage);

function changePage() {
  mainContent.forEach((section) => section.classList.add("hide"));
  videoContainer.classList.remove("hide");
  tutorialPageBtn.classList.add("active");
  aboutPageBtn.classList.remove("active");
  // video.play();
}
