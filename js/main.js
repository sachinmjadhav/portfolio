document.onreadystatechange = function() {
  var state = document.readyState;
  if (
    state === "interactive" &&
    document.title === "Sachin Jadhav - Front End Developer"
  ) {
    document.getElementById("contents").style.visibility = "hidden";
  } else if (
    state == "complete" &&
    document.title === "Sachin Jadhav - Front End Developer"
  ) {
    setTimeout(function() {
      document.getElementById("load").style.visibility = "hidden";
      document.getElementById("contents").style.visibility = "visible";
    }, 1000);
  }
};

// Check if SW are supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw_cached_site.js")
      .then(reg => console.log("Service Worker: Registered"))
      .catch(err => console.log(`Service Worker: Error - ${err}`));
  });
}

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Show Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Show Menu State
    showMenu = false;
  }
}

// Add date to footer
document.getElementById("date").innerHTML = new Date().getFullYear();
