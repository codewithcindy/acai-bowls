"use strict";

// Selectors
const nav = document.querySelector(".nav");
const navFixed = document.querySelector(".nav-fixed-top");
const tabs = document.querySelectorAll(".about__tab");
const tabsContainer = document.querySelector(".about__tab-container");
const tabsContent = document.querySelectorAll(".about__content");

// Functions
window.onscroll = function () {
  nav.classList.toggle("nav-fixed-top", window.pageYOffset > nav.offsetTop);
  // console.log(window.pageYOffset);
};

// Event Handlers
tabsContainer.addEventListener("click", function (e) {
  const clickedTab = e.target;
  const tabNumber = e.target.dataset.tab;

  tabs.forEach((t) => t.classList.remove("about__tab-active"));
  clickedTab.classList.add("about__tab-active");

  tabsContent.forEach((c) => c.classList.remove("about__content-active"));
  document
    .querySelector(`.about__content-${tabNumber}`)
    .classList.add("about__content-active");
});
