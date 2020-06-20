// today date

let today = document.querySelector(".js-today");
let date = new Date();

let dayOfWeek = date.getDay();
let dayOfMonth = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

switch (dayOfWeek) {
  case 0:
    dayOfWeek = "Niedziela";
    break;
  case 1:
    dayOfWeek = "Poniedziałek";
    break;
  case 2:
    dayOfWeek = "Wtorek";
    break;
  case 3:
    dayOfWeek = "Środa";
    break;
  case 4:
    dayOfWeek = "Czwartek";
    break;
  case 5:
    dayOfWeek = "Piątek";
    break;
  case 6:
    dayOfWeek = "Sobota";
    break;
}

switch (month) {
  case 0:
    month = "Stycznia";
    break;
  case 1:
    month = "Lutego";
    break;
  case 2:
    month = "Marca";
    break;
  case 3:
    month = "Kwietnia";
    break;
  case 4:
    month = "Maja";
    break;
  case 5:
    month = "Czerwca";
    break;
  case 6:
    month = "Lipca";
    break;
  case 7:
    month = "Sierpnia";
    break;
  case 8:
    month = "Września";
    break;
  case 9:
    month = "Października";
    break;
  case 10:
    month = "Listopada";
    break;
  case 11:
    month = "Grudnia";
    break;
}

today.innerText =
  "Dzisiaj jest " +
  dayOfWeek +
  ", " +
  dayOfMonth +
  " " +
  month +
  " " +
  year +
  " roku";

// welcome form

console.log(
  "Pozdrawiam wszystkich z kursu Frontend Developer od podstaw :)) Powodzenia w nauce"
);

let addName = document.forms["main__form"];
let helloToName = document.querySelector(".js-welcomeParagraph");

addEventListener("submit", (e) => {
  e.preventDefault();
  let addNameValue = addName.querySelector(".main__input").value;
  helloToName.innerHTML =
    'Cześć <span class="highlight js-user__name">' +
    addNameValue +
    '</span>, ja mam na imię <b><span class="highlight">Tomek</span></b> i miło mi Cię poznać';
});

// table section

let showTdfButton = document.querySelector(".hobby__button--tdf");
let showTdf = document.querySelector(".table__france");
let showVueltaButton = document.querySelector(".hobby__button--vuelta");
let showVuelta = document.querySelector(".table__spain");
let showGiroButton = document.querySelector(".hobby__button--giro");
let showGiro = document.querySelector(".table__italy");

let toggleTdfClass = () => {
  showTdf.classList.toggle("table__france--on");
  showGiro.classList.remove("table__italy--on");
  showVuelta.classList.remove("table__spain--on");
};

showTdfButton.addEventListener("click", toggleTdfClass);

let toggleGiroClass = () => {
  showGiro.classList.toggle("table__italy--on");
  showTdf.classList.remove("table__france--on");
  showVuelta.classList.remove("table__spain--on");
};

showGiroButton.addEventListener("click", toggleGiroClass);

let toggleVueltaClass = () => {
  showVuelta.classList.toggle("table__spain--on");
  showGiro.classList.remove("table__italy--on");
  showTdf.classList.remove("table__france--on");
};

showVueltaButton.addEventListener("click", toggleVueltaClass);

// theme change
let themeButton = document.querySelector(".js-main__button-theme");
let themeMainBgChange = document.querySelector("body");
let themeNavigationChange = document.querySelector(".navigation");
let themeNavigationContainerChange = document.querySelector(
  ".navigation__container"
);
let themeBgChange = document.querySelector(".main");
let themeHeaderColorChange = document.querySelector(".main__header");
let themeSecondHeaderColorChange = document.querySelectorAll(
  ".main__subHeader"
);
let themeHighlightColorChange = document.querySelectorAll(".highlight");
let themeButtonColorChange = document.querySelectorAll(".main__button");
let themeInputColorChange = document.querySelector(".main__input");
let themeTableChange = document.querySelector(".table");
let themeHobbyButtonChange = document.querySelectorAll(".hobby__button");
let themeNavLinkChange = document.querySelectorAll(".navigation__link");
let themeTableLinkChange = document.querySelectorAll(".table__link");

let toggleTheme = () => {
  themeSecondHeaderColorChange.forEach((second__class_header) => {
    second__class_header.classList.toggle("main__subHeader--themeLight");
  });

  themeHighlightColorChange.forEach((highlight) => {
    highlight.classList.toggle("highlight--themeLight");
  });
  themeButtonColorChange.forEach((fun__section_button) => {
    fun__section_button.classList.toggle("main__button--themeLight");
  });
  themeHobbyButtonChange.forEach((hobby_button) => {
    hobby_button.classList.toggle("hobby__button--themeLight");
  });
  themeNavLinkChange.forEach((link) => {
    link.classList.toggle("navigation__link--themeLight");
  });
  themeTableLinkChange.forEach((link) => {
    link.classList.toggle("table__link--themeLight");
  });
  themeMainBgChange.classList.toggle("body--themeLight");
  themeNavigationChange.classList.toggle("navigation--themeLight");
  themeNavigationContainerChange.classList.toggle(
    "navigation__container--themeLight"
  );
  themeBgChange.classList.toggle("main--themeLight");
  themeHeaderColorChange.classList.toggle("main__header--themeLight");
  themeInputColorChange.classList.toggle("main__input--themeLight");
  themeTableChange.classList.toggle("table--themeLight");
};
let buttonText = () => {
  if (themeButton.classList.contains("main__button--themeLight")) {
    themeButton.innerText = "ZMIEŃ MOTYW NA CIEMNY";
  } else {
    themeButton.innerText = "ZMIEŃ MOTYW NA JASNY";
  }
};

themeButton.addEventListener("click", toggleTheme);
themeButton.addEventListener("click", buttonText);

// destroy section
let offButton = document.querySelector(".footer__hiddenButton");
let mainContainer = document.querySelector(".main");
let navigation = document.querySelector(".navigation");
let afterDestroy = document.querySelector("body");

offButton.addEventListener("click", () => {
  mainContainer.remove();
  navigation.remove();
  afterDestroy.setAttribute("style", "background-color: black;");
});

// hidden section
let showButton = document.querySelector(".js-main__button-show");
let show = document.querySelector(".footer__hiddenSection");

let toggleClass = () => {
  show.classList.toggle("footer__hiddenSection--on");
};

showButton.addEventListener("click", toggleClass);

// funny pic
let funnyPicButton = document.querySelector(".js-main__button-trigger");
let funnyPicOn = document.querySelector(".js-footer__gifImage");

let triggerClass = () => {
  funnyPicOn.classList.toggle("footer__gifImage--on");
};
let funnyPicButtonText = () => {
  if (funnyPicButton.classList.contains("footer__gifImage--on")) {
    funnyPicButton.innerText = "THUMB UP!";
  } else {
    funnyPicButton.innerText = "THUMB DOWN";
  }
};
funnyPicButton.addEventListener("click", triggerClass);
funnyPicButton.addEventListener("click", funnyPicButtonText);
