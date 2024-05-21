const header = document.querySelector(".header");
const navText = document.querySelectorAll(".nav-text");
const logo = document.querySelector(".logo");
const logo2 = document.querySelector(".logo2");
const arrow = document.querySelectorAll(".arrow");
const arrowDown = document.querySelectorAll(".arrow-down");
const openBtn = document.querySelector(".click");
const modalContainer = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".modal-btn");
const numPx = 250;

window.addEventListener("scroll", changeHeaderStyle);

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
modalContainer.addEventListener("click", closeModal);

function changeHeaderStyle() {
  const screenSize = window.scrollY > numPx;

  navText.forEach((nav) => {
    if (screenSize) {
      header.classList.add("change-bg");
      nav.style.color = "#FFFF";
    } else {
      header.classList.remove("change-bg");
      nav.style.color = "#333333";
    }
  });

  if (screenSize) {
    logo.style.display = "none";
    logo2.style.display = "flex";
  } else {
    logo2.style.display = "none";
    logo.style.display = "flex";
  }

  if (screenSize) {
    arrow.forEach((svg) => {
      svg.style.display = "none";
    });
    arrowDown.forEach((arrowDown) => {
      arrowDown.style.display = "flex";
    });
  } else {
    arrow.forEach((arrow) => {
      arrow.style.display = "flex";
    });
    arrowDown.forEach((arrowDown) => {
      arrowDown.style.display = "none";
    });
  }
}

function openModal() {
  modalContainer.classList.add("show");
}

function closeModal() {
  modalContainer.classList.remove("show");
}
