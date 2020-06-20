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

    today.innerText = `Dzisiaj jest ${dayOfWeek}, ${dayOfMonth} ${month} ${year} roku`
  };
  dateIndicator();

  // welcome form

  const addName = document.querySelector(".js-main__form");
  const helloToName = document.querySelector(".js-welcomeParagraph");

  addEventListener("submit", (e) => {
    e.preventDefault();
    const addNameValue = addName.querySelector(".js-main__input").value;
    helloToName.innerHTML =
      'Cześć <span class="highlight js-user__name">' +
      addNameValue +
      '</span>, ja mam na imię <b><span class="highlight">Tomek</span></b> i miło mi Cię poznać';
  });

  // table section

  const showTdfTableButton = document.querySelector(".js-hobby__button--tdf");
  const showTdfTable = document.querySelector(".js-table__france");
  const showVueltaTableButton = document.querySelector(".js-hobby__button--vuelta");
  const showVueltaTable = document.querySelector(".js-table__spain");
  const showGiroTableButton = document.querySelector(".js-hobby__button--giro");
  const showGiroTable = document.querySelector(".js-table__italy");

  const toggleTdfClass = () => {
    showTdfTable.classList.toggle("table__france--on");
    showGiroTable.classList.remove("table__italy--on");
    showVueltaTable.classList.remove("table__spain--on");
  };

  showTdfTableButton.addEventListener("click", toggleTdfClass);

  const toggleGiroClass = () => {
    showGiroTable.classList.toggle("table__italy--on");
    showTdfTable.classList.remove("table__france--on");
    showVueltaTable.classList.remove("table__spain--on");
  };

  showGiroTableButton.addEventListener("click", toggleGiroClass);

  const toggleVueltaClass = () => {
    showVueltaTable.classList.toggle("table__spain--on");
    showGiroTable.classList.remove("table__italy--on");
    showTdfTable.classList.remove("table__france--on");
  };

  showVueltaTableButton.addEventListener("click", toggleVueltaClass);

  // theme change
  const themeButton = document.querySelector(".js-main__button-theme");
  const themeMainBgChange = document.querySelector(".js-body");
  const themeNavigationChange = document.querySelector(".js-navigation");
  const themeNavigationContainerChange = document.querySelector(
    ".js-navigation__container"
  );
  const themeBgChange = document.querySelector(".js-main");
  const themeHeaderColorChange = document.querySelector(".js-main__header");
  const themeSecondHeaderColorChange = document.querySelectorAll(
    ".js-main__subHeader"
  );
  const themeHighlightColorChange = document.querySelectorAll(".js-highlight");
  const themeButtonColorChange = document.querySelectorAll(".js-main__button");
  const themeInputColorChange = document.querySelector(".js-main__input");
  const themeTableChange = document.querySelector(".js-table");
  const themeHobbyButtonChange = document.querySelectorAll(".js-hobby__button");
  const themeNavLinkChange = document.querySelectorAll(".js-navigation__link");
  const themeTableLinkChange = document.querySelectorAll(".js-table__link");

  const toggleTheme = () => {
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
  const buttonText = () => {
    if (themeButton.classList.contains("main__button--themeLight")) {
      themeButton.innerText = "ZMIEŃ MOTYW NA CIEMNY";
    } else {
      themeButton.innerText = "ZMIEŃ MOTYW NA JASNY";
    }
  };

  themeButton.addEventListener("click", toggleTheme);
  themeButton.addEventListener("click", buttonText);

  // destroy section
  const offButton = document.querySelector(".js-footer__hiddenButton");
  const mainContainer = document.querySelector(".js-main");
  const navigation = document.querySelector(".js-navigation");
  const afterDestroy = document.querySelector(".js-body");

  offButton.addEventListener("click", () => {
    mainContainer.remove();
    navigation.remove();
    afterDestroy.setAttribute("style", "background-color: black;");
  });

  // hidden section
  const showButton = document.querySelector(".js-main__button-show");
  const show = document.querySelector(".js-footer__hiddenSection");

  const toggleClass = () => {
    show.classList.toggle("footer__hiddenSection--on");
  };

  showButton.addEventListener("click", toggleClass);

  // funny pic
  const funnyPicButton = document.querySelector(".js-main__button-trigger");
  const funnyPicOn = document.querySelector(".js-footer__gifImage");

  const triggerClass = () => {
    funnyPicOn.classList.toggle("footer__gifImage--on");
  };
  const funnyPicButtonText = () => {
    if (funnyPicButton.classList.contains("footer__gifImage--on")) {
      funnyPicButton.innerText = "THUMB UP!";
    } else {
      funnyPicButton.innerText = "THUMB DOWN";
    }
  };
  funnyPicButton.addEventListener("click", triggerClass);
  funnyPicButton.addEventListener("click", funnyPicButtonText);
}
