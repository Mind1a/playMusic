const body = document.querySelector("body");
const tutorialPageBtns = document.querySelectorAll(".tutorial-page-btn");
const aboutPageBtns = document.querySelectorAll(".about-page-btn");
const mainContent = document.querySelectorAll("section");
const videoContainer = document.querySelector(".video-container");
const video = document.querySelector(".video");
const noteContainer = document.querySelector(".music-notes");
const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".burger-menu");
const burgerCloseBtn = document.querySelector(".burger-close");
const overlay = document.querySelector(".overlay");
const videoNotes = document.querySelector(".video-notes");

tutorialPageBtns.forEach((btn) => {
  btn.addEventListener("click", changePage);
});
burgerBtn.addEventListener("click", openBugerMenu);
burgerCloseBtn.addEventListener("click", closeBurgerMenu);
overlay.addEventListener("click", closeBurgerMenu);

function changePage() {
  mainContent.forEach((section) => section.classList.add("hide"));
  videoContainer.classList.remove("hide");
  videoNotes.style.display = "block";
  tutorialPageBtns.forEach((btn) => {
    btn.classList.add("active");
  });
  aboutPageBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  burgerMenu.style.display = "none";
  overlay.style.display = "none";
  drawNotes();
}

function openBugerMenu() {
  burgerMenu.style.display = "flex";
  overlay.style.display = "block";
}

function closeBurgerMenu() {
  burgerMenu.style.display = "none";
  overlay.style.display = "none";
}

// Updates the footer text based on the user's operating system.
if (navigator.userAgent.indexOf("Windows") === -1) {
  const downloadSection = document.querySelector(".windows");

  downloadSection.innerHTML = `<h3>აპლიკაციის ჩამოტვირთვა შესაძლებელია<span> მხოლოდ Windows კომპიუტერებზე</span></h3>`;
}
