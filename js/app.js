const body = document.querySelector("body");
const tutorialPageBtn = document.querySelector(".tutorial-page-btn");
const aboutPageBtn = document.querySelector(".about-page-btn");
const mainContent = document.querySelectorAll("section");
const videoContainer = document.querySelector(".video-container");
const video = document.querySelector(".video");
const noteContainer = document.querySelector(".music-notes");

tutorialPageBtn.addEventListener("click", changePage);

function changePage() {
  mainContent.forEach((section) => section.classList.add("hide"));
  videoContainer.classList.remove("hide");
  tutorialPageBtn.classList.add("active");
  aboutPageBtn.classList.remove("active");
  drawNotes();
  // video.play();
}

// Updates the footer text based on the user's operating system.
if (navigator.userAgent.indexOf("Windows") === -1) {
  const downloadSection = document.querySelector(".windows");

  downloadSection.innerHTML = `<h3>აპლიკაციის ჩამოტვირთვა შესაძლებელია<span> მხოლოდ Windows კომპიუტერებზე</span></h3>`;
}
