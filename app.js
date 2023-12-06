// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    //console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 90) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// ********** email ************
const btn = document.getElementById("email-btn");
const eparagraph = document.querySelector(".email-paragraph");
const email_element = document.querySelector(".email"); // Poprawiony selektor
const email = "m.swiatlo@interia.pl";

btn.addEventListener("click", function (e) {
  if (email_element.classList.contains("hidden")) { // Użyj .classList.contains
    btn.textContent = "Kliknij aby ukryć email";
    email_element.classList.remove("hidden"); // Usuń klasę "hidden", aby odkryć element
  } else {
    btn.textContent = "Kliknij aby pokazać email";
    email_element.classList.add("hidden"); // Dodaj klasę "hidden", aby ukryć element
  }
});
// ********** linki do stron ************
const linki = document.querySelectorAll(".btn-linki");

linki.forEach(function(link) {
  link.addEventListener("click", function (e) {
    // Sprawdź, czy odnośnik ma atrybut href
    if (link.hasAttribute("href")) {
      const adresURL = link.getAttribute("href");
      window.open(adresURL, "_blank");
    } else {
      console.log("Ten odnośnik nie ma atrybutu href.");
    }
  });
});