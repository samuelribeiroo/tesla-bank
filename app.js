const header = document.querySelector(".header");
const navText = document.querySelectorAll(".nav-text");
const logo = document.querySelector(".logo");
const logo2 = document.querySelector(".logo2");
const arrow = document.querySelectorAll(".arrow");
const arrowDown = document.querySelectorAll(".arrow-down");
const openBtn = document.querySelector(".click");
const modalContainer = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".modal-btn");
const modal = document.querySelector("modal");
const numPx = 50;
const inputEmail = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const formBtn = document.querySelector(".login");
const errorSmall = document.querySelectorAll(".error");
const acc = document.querySelectorAll(".accordion");

window.addEventListener("scroll", changeHeaderStyle);

const openModal = () => modalContainer.classList.add("show");

const closeModal = () => modalContainer.classList.remove("show");

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
modalContainer.addEventListener("click", handleClickOutsides);
formBtn.addEventListener("click", handleEmptyInput);

acc.forEach((element) => {
  element.addEventListener("click", showAccordion);
});

acc.forEach(element => {
  element.addEventListener('dblclick', hideAccordion)
})

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

function handleClickOutsides(event) {
  let isVisible = event.target == modalContainer;

  if (isVisible) {
    modalContainer.classList.remove("show");
  }
}

function handleEmptyInput() {
  const isEmpty = inputEmail.value === "" && passwordInput.value === "";

  if (isEmpty) {
    errorSmall.forEach((msg) => (msg.style.display = "inline-block"));
  } else if (!isEmpty) {
    errorSmall.forEach((msg) => (msg.style.display = "none"));
  }
}

function showAccordion(event) {
  let label = event.target.parentElement.querySelector(".label");
  label.style.display = "block";
}

function hideAccordion(event) {
  let label = event.target.parentElement.querySelector(".label");
  label.style.display = "none";  
}
