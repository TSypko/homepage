{
  const welcomeMessage = () => {
    console.log(
      "Pozdrawiam wszystkich z kursu Frontend Developer od podstaw :)) Powodzenia w nauce"
    );
  };
  welcomeMessage();

  const dateIndicator = () => {
    const today = document.querySelector(".js-today");
    const date = new Date();

    let dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();
    let month = date.getMonth();
    const year = date.getFullYear();

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

    today.innerText = `Dzisiaj jest ${dayOfWeek}, ${dayOfMonth} ${month} ${year} roku`;
  };
  dateIndicator();

  // welcome form

  const helloForm = (e) => {
    e.preventDefault();
    const addName = document.querySelector(".js-main__form");
    const helloToName = document.querySelector(".js-welcomeParagraph");
    const addNameValue = addName.querySelector(".js-main__input").value;
    helloToName.innerHTML =
      'Cześć <span class="highlight js-user__name">' +
      addNameValue +
      '</span>, ja mam na imię <b><span class="highlight">Tomek</span></b> i miło mi Cię poznać';
  };

  addEventListener("submit", helloForm);

  // tables section

  const tdfTableButton = document.querySelector(".js-hobby__button--tdf");
  const tdfTable = document.querySelector(".js-table__france");
  const vueltaTableButton = document.querySelector(".js-hobby__button--vuelta");
  const vueltaTable = document.querySelector(".js-table__spain");
  const giroTableButton = document.querySelector(".js-hobby__button--giro");
  const giroTable = document.querySelector(".js-table__italy");

  const toggleTdfTable = () => {
    tdfTable.classList.toggle("table__france--on");
    giroTable.classList.remove("table__italy--on");
    vueltaTable.classList.remove("table__spain--on");
  };

  tdfTableButton.addEventListener("click", toggleTdfTable);

  const toggleGiroTable = () => {
    giroTable.classList.toggle("table__italy--on");
    tdfTable.classList.remove("table__france--on");
    vueltaTable.classList.remove("table__spain--on");
  };

  giroTableButton.addEventListener("click", toggleGiroTable);

  const toggleVueltaTable = () => {
    vueltaTable.classList.toggle("table__spain--on");
    giroTable.classList.remove("table__italy--on");
    tdfTable.classList.remove("table__france--on");
  };

  vueltaTableButton.addEventListener("click", toggleVueltaTable);

  // theme change

  const mainContainer = document.querySelector(".js-main"); // Also needed to destroy section
  const navigation = document.querySelector(".js-navigation"); // Also needed to destroy section

  const themeButton = document.querySelector(".js-main__button-theme");

  const themeButtonTextChange = () => {
    if (themeButton.classList.contains("main__button--themeLight")) {
      themeButton.innerText = "ZMIEŃ MOTYW NA CIEMNY";
    } else {
      themeButton.innerText = "ZMIEŃ MOTYW NA JASNY";
    }
  };
  const toggleTheme = () => {
    const body = document.querySelector(".js-body");
    const navigationContainer = document.querySelector(
      ".js-navigation__container"
    );
    const mainHeader = document.querySelector(".js-main__header");
    const mainSubHeader = document.querySelectorAll(".js-main__subHeader");
    const highlited = document.querySelectorAll(".js-highlight");
    const mainButton = document.querySelectorAll(".js-main__button");
    const mainInput = document.querySelector(".js-main__input");
    const table = document.querySelector(".js-table");
    const hobbyButton = document.querySelectorAll(".js-hobby__button");
    const navigationLink = document.querySelectorAll(".js-navigation__link");
    const tableLink = document.querySelectorAll(".js-table__link");

    mainSubHeader.forEach((h2) => {
      h2.classList.toggle("main__subHeader--themeLight");
    });

    highlited.forEach((highlight) => {
      highlight.classList.toggle("highlight--themeLight");
    });
    mainButton.forEach((fun__section_button) => {
      fun__section_button.classList.toggle("main__button--themeLight");
    });
    hobbyButton.forEach((hobby_button) => {
      hobby_button.classList.toggle("hobby__button--themeLight");
    });
    navigationLink.forEach((link) => {
      link.classList.toggle("navigation__link--themeLight");
    });
    tableLink.forEach((link) => {
      link.classList.toggle("table__link--themeLight");
    });
    body.classList.toggle("body--themeLight");
    navigation.classList.toggle("navigation--themeLight");
    navigationContainer.classList.toggle("navigation__container--themeLight");
    mainContainer.classList.toggle("main--themeLight");
    mainHeader.classList.toggle("main__header--themeLight");
    mainInput.classList.toggle("main__input--themeLight");
    table.classList.toggle("table--themeLight");
    themeButtonTextChange();
  };
  themeButton.addEventListener("click", toggleTheme);

  // funny pic

  const funnyPicButton = document.querySelector(".js-main__button-trigger");
  const showHiddenImage = () => {
    const funnyPicOn = document.querySelector(".js-footer__gifImage");
    funnyPicOn.classList.toggle("footer__gifImage--on");
    if (funnyPicOn.classList.contains("footer__gifImage--on")) {
      funnyPicButton.innerText = "THUMB DOWN!";
    } else {
      funnyPicButton.innerText = "THUMB UP!";
    }
  };
  funnyPicButton.addEventListener("click", showHiddenImage);
  // hidden section

  const hiddenSectionButton = document.querySelector(".js-main__button-show");
  const toggleClass = () => {
    const hiddenSection = document.querySelector(".js-footer__hiddenSection");
    hiddenSection.classList.toggle("footer__hiddenSection--on");
  };

  hiddenSectionButton.addEventListener("click", toggleClass);

  // destroy section

  const destroyButton = document.querySelector(".js-footer__hiddenButton");

  const destroySite = () => {
    mainContainer.remove();
    navigation.remove();
  };
  destroyButton.addEventListener("click", destroySite);
}
