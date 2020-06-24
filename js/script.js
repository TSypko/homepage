{
  const writeWelcomeMessage = () => {
    console.log(
      "Pozdrawiam wszystkich z kursu Frontend Developer od podstaw :)) Powodzenia w nauce"
    );
  };

  const writeDate = () => {
    const setDay = (dayOfWeek) => {
      switch (dayOfWeek) {
        case 0:
          return "Niedziela";

        case 1:
          return "Poniedziałek";

        case 2:
          return "Wtorek";

        case 3:
          return "Środa";

        case 4:
          return "Czwartek";

        case 5:
          return "Piątek";

        case 6:
          return "Sobota";
      }
    };
    const setMonth = (month) => {
      switch (month) {
        case 0:
          return "Stycznia";

        case 1:
          return "Lutego";

        case 2:
          return "Marca";

        case 3:
          return "Kwietnia";

        case 4:
          return "Maja";

        case 5:
          return "Czerwca";

        case 6:
          return "Lipca";

        case 7:
          return "Sierpnia";

        case 8:
          return "Września";

        case 9:
          return "Października";

        case 10:
          return "Listopada";

        case 11:
          return "Grudnia";
      }
    };
    writeDateMessage = () => {
      const today = document.querySelector(".js-today");
      const date = new Date();
      const day = date.getDate();
      const year = date.getFullYear();
      const dayOfWeek = setDay(date.getDay());
      const month = setMonth(date.getMonth());
      today.innerText = `Dzisiaj jest ${dayOfWeek}, ${day} ${month} ${year} roku`;
    };
    writeDateMessage();
  };

  const submitNameFromInput = () => {
    const getNameFromInput = (e) => {
      e.preventDefault();
      const addName = document.querySelector(".js-main__form");
      const helloToName = document.querySelector(".js-welcomeParagraph");
      const addNameValue = addName.querySelector(".js-main__input").value;
      helloToName.innerHTML = `Cześć <span class="highlight js-user__name"> ${addNameValue} </span>, ja mam na imię <b><span class="highlight">Tomek</span></b> i miło mi Cię poznać`;
    };
    addEventListener("submit", getNameFromInput);
  };

  const initTable = () => {
    const tdfTableButton = document.querySelector(".js-hobby__button--tdf");
    const vueltaTableButton = document.querySelector(
      ".js-hobby__button--vuelta"
    );
    const giroTableButton = document.querySelector(".js-hobby__button--giro");

    const onToggleTableClick = (tableName) => {
      const tdfTable = document.querySelector(".js-table__france");
      const vueltaTable = document.querySelector(".js-table__spain");
      const giroTable = document.querySelector(".js-table__italy");

      switch (tableName) {
        case "tdfTable":
          return (
            tdfTable.classList.toggle("table__france--on"),
            giroTable.classList.remove("table__italy--on"),
            vueltaTable.classList.remove("table__spain--on")
          );
        case "giroTable":
          return (
            giroTable.classList.toggle("table__italy--on"),
            tdfTable.classList.remove("table__france--on"),
            vueltaTable.classList.remove("table__spain--on")
          );
        case "vueltaTable":
          return (
            vueltaTable.classList.toggle("table__spain--on"),
            giroTable.classList.remove("table__italy--on"),
            tdfTable.classList.remove("table__france--on")
          );
      }
    };

    tdfTableButton.addEventListener("click", () =>
      onToggleTableClick("tdfTable")
    );
    giroTableButton.addEventListener("click", () =>
      onToggleTableClick("giroTable")
    );
    vueltaTableButton.addEventListener("click", () =>
      onToggleTableClick("vueltaTable")
    );
  };

  const mainContainer = document.querySelector(".js-main"); // Also needed to destroy section
  const navigation = document.querySelector(".js-navigation"); // Also needed to destroy section

  const themeChange = () => {
    const themeButton = document.querySelector(".js-main__button-theme");
    const themeButtonTextChange = () => {
      if (themeButton.classList.contains("main__button--themeLight")) {
        themeButton.innerText = "ZMIEŃ MOTYW NA CIEMNY";
      } else {
        themeButton.innerText = "ZMIEŃ MOTYW NA JASNY";
      }
    };
    const toggleThemeChange = () => {
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
    themeButton.addEventListener("click", toggleThemeChange);
  };

  const showFunnyPic = () => {
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
  };

  const showHiddenSection = () => {
    const hiddenSectionButton = document.querySelector(".js-main__button-show");
    const toggleClass = () => {
      const hiddenSection = document.querySelector(".js-footer__hiddenSection");
      hiddenSection.classList.toggle("footer__hiddenSection--on");
    };

    hiddenSectionButton.addEventListener("click", toggleClass);
  };

  const destroyAll = () => {
    const destroyButton = document.querySelector(".js-footer__hiddenButton");

    const destroySite = () => {
      mainContainer.remove();
      navigation.remove();
    };
    destroyButton.addEventListener("click", destroySite);
  };
  destroyAll();

  const init = () => {
    writeWelcomeMessage();
    writeDate();
    submitNameFromInput();
    initTable();
    themeChange();
    showFunnyPic();
    showHiddenSection();
  };
  init();
}
