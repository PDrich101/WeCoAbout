"use strict";

const getID = (() => {
  let counter = -1;
  return () => {
    counter++;
    return counter;
  };
})();

const dptModule = {
  master: [],
  vars: {
    selectedDpt: "",
    mobileMode: false,
    mainElements: {},
    navElementUL: [],
    dptSection: {},
  },
  helper: {
    createContactDiv(member, property) {
      const div = document.createElement("div");
      const title = document.createElement("p");
      const tag = document.createElement("span");
      const link = document.createElement("a");
      const icon = document.createElement("img");
      if (property === "mobilePhone") {
        title.innerText = "Telefon Mobil";
        tag.innerText = member.contacts.mobilePhone;
        link.setAttribute("href", "tel:" + member.contacts.mobilePhone);
        icon.setAttribute("src", dptModule.vars.path + "ICON_mobil.svg");
      }
      if (property === "officePhone") {
        title.innerText = "Telefon Büro";
        tag.innerText = member.contacts.officePhone;
        link.setAttribute("href", "tel:" + member.contacts.officePhone);
        icon.setAttribute("src", dptModule.vars.path + "ICON_phone.svg");
      }
      if (property === "mail") {
        title.innerText = "E-Mail";
        tag.innerText = member.contacts.mail;
        const mailBeginning = `Hallo ${member.firstName} ${member.lastName},`;
        const subject = "Anfrage über WesserCoach:";
        link.setAttribute(
          "href",
          `mailto:${
            member.contacts.mail
          }?subject=${subject}&body=${encodeURIComponent(
            mailBeginning
          )}%0D%0A%0D%0A%0D%0A`
        );
        icon.setAttribute("src", dptModule.vars.path + "ICON_mail.svg");
      }
      if (property === "whatsapp") {
        title.innerText = "WhatsApp";
        tag.innerText = "starten";
        link.setAttribute(
          "href",
          "whatsapp://send?phone=" + member.contacts.whatsapp
        );
        link.setAttribute("target", "_blank");
        icon.setAttribute("src", dptModule.vars.path + "ICON_whatsapp.svg");
      }
      if (property === "telegram") {
        title.innerText = "Telegram";
        tag.innerText = "starten";
        link.setAttribute(
          "href",
          "https://telegram.me/" + member.contacts.telegram
        );
        link.setAttribute("target", "_blank");
        icon.setAttribute("src", dptModule.vars.path + "ICON_telegram.svg");
      }
      div.appendChild(title);
      div.appendChild(tag);
      link.appendChild(icon);
      div.appendChild(link);

      return div;
    },
    createParagraph(member, property) {
      const paragraph = document.createElement("p");
      paragraph.innerText = member[property];
      return paragraph;
    },
  },
  init(mainContainer, defaultDpt, path) {
    this.vars.mainElements.mainContainer = mainContainer;
    this.vars.selectedDpt = defaultDpt;
    this.vars.path = path;
    // ggf MobileMode aktivierenb
    window.mobileAndTabletCheck = function () {
      let check = false;
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    };
    this.vars.mobileMode = window.mobileAndTabletCheck();
    // this.vars.mobileMode = true;
    console.log("mobileMode", this.vars.mobileMode);
    // JSON parsen oder in dem Fall definieren
    this.vars.allMembers = allMembers;
    //createMaster
    this.createMaster();

    console.log(
      "INIT: this.vars.mainElements.mainContainer",
      this.vars.mainElements.mainContainer
    );
    console.log("INIT: this.vars.selectedDpt", this.vars.selectedDpt);

    // Hauptelemente erstellen
    const cardNav = document.createElement("section");
    cardNav.setAttribute("id", "card-nav");
    const cardContainer = document.createElement("section");
    cardContainer.setAttribute("id", "display");
    //createDisplay->in vars speichern
    this.vars.mainElements.cardNav = cardNav;
    this.vars.mainElements.cardContainer = cardContainer;

    //Navigation und Fenster an MasterContainer anfügen
    this.vars.mainElements.mainContainer.appendChild(cardNav);
    this.vars.mainElements.mainContainer.appendChild(cardContainer);

    console.log("INIT: this.vars.mainElements", this.vars.mainElements);
    console.log("INIT", this.master);

    this.createContainer();
  },
  createLightBox(member) {
    console.log("createLightBox aufgerufen", member);
    console.log("this in CreateLightBox()", this);
    //lightBox inkl. Klassen erstellen
    const lightBoxOverlay = document.createElement("div");
    lightBoxOverlay.classList.add("light-box");
    lightBoxOverlay.setAttribute("id", "lightbox");
    // Klick-Listener für die gesamte Fläche hinzufügen
    lightBoxOverlay.addEventListener("click", () => {
      this.emit("closeLightBox");
    });
    //contentBox inkl. Klassen erstellen
    const lightBoxContent = document.createElement("div");

    lightBoxContent.addEventListener("click", (event) => {
      event.stopPropagation();
    });
    lightBoxContent.classList.add("content-box");
    //Bildcontainer mit Bild und Klassen erstellen
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("card-image-lightbox");
    const image = document.createElement("img");
    if (member["image-front"] !== "") {
      image.setAttribute("src", this.vars.path + member["image-front"]);
      image.setAttribute(
        "alt",
        "Titelbild von " + member.firstName + " " + member.lastName
      );
    } else {
      image.setAttribute("src", this.vars.path + "usersecret.jpg");
      image.setAttribute(
        "alt",
        "Anonymes Titelbild von " + member.firstName + " " + member.lastName
      );
    }
    imageContainer.appendChild(image);
    //Namecontainer mit Name und Position erstellen
    const nameContainer = document.createElement("div");
    nameContainer.classList.add("card-overview-lightbox");

    nameContainer.appendChild(this.helper.createParagraph(member, "firstName"));
    nameContainer.appendChild(this.helper.createParagraph(member, "lastName"));
    nameContainer.appendChild(this.helper.createParagraph(member, "position"));

    //Kontaktcontainer erstellen
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    //ADD LOGIC HERE
    for (const contact in member.contacts) {
      if (member.contacts[contact] !== "") {
        contactContainer.appendChild(
          this.helper.createContactDiv(member, contact)
        );
      }
    }

    // Image und nameContainer in contentBox einfügen
    lightBoxContent.appendChild(imageContainer);
    lightBoxContent.appendChild(nameContainer);
    lightBoxContent.appendChild(contactContainer);
    // ContentBox an Lightbox hängen
    lightBoxOverlay.appendChild(lightBoxContent);
    //LightBox in DOM anhängen
    this.vars.mainElements.mainContainer.appendChild(lightBoxOverlay);

    // Lightbox in Hauptelementen speichern
    this.vars.mainElements.lightBox = lightBoxOverlay;
  },
  /**
   * Erstellung des Master-Arrays, auf dem die weitere Programmstruktur aufbaut.
   * In verknüpfung mit der createSingleDepartment-Funktion
   */
  createMaster() {
    // Alle Mitarbeiter werden der jeweils gesetzten Abteilung zugeordnet,
    // und vorerst in ein Hilfsobjekt allDptMembers geschrieben
    const allDptMembers = {};

    // Hilfsobjekt mit allen Abteilungen erstellen
    for (let CC of Object.keys(dptCodes)) {
      allDptMembers[CC] = [];
    }
    // für alle MA...
    for (const member of this.vars.allMembers) {
      member.id = getID();
      // Prüfe die zugehörigkeiten und füge sie hinzu
      for (const dpt of member.department) {
        allDptMembers[dpt.departmentName].push(member);
        console.log();
      }
    }
    // Für Alle Abteilungen...
    for (const dpt of Object.keys(allDptMembers)) {
      // Sortiere die MA nach ihrem Nachnamen
      allDptMembers[dpt].sort(function (a, b) {
        var x = a.lastName;
        var y = b.lastName;
        return x < y ? -1 : x > y ? 1 : 0;
      });
      console.log(allDptMembers);
    }

    // An dieser Stelle könnte man sich das Hilfsobjekt anzeigen lassen
    // allDptMembers = { dpt1:[member, member, member], dpt2:[member, member], dpt3:[member, member, member].....}
    console.log("-".repeat(40), " HIER ", allDptMembers);

    for (const dpt of Object.keys(allDptMembers)) {
      const newDpt = this.createSingleDepartment(dpt, allDptMembers[dpt]);
      this.master.push(newDpt);
    }
  },
  /**
   * Nachdem alle Mitarbeiter von der createMaster-Funktion in die Abteilungen zugewiesen worden sind,
   * erstellt diese Funktion das fertige Abteilungs-Objekt
   * @param {string} key - Das Abteilungs-Kürzel
   * @param {array} array - Die Mitarbeiter einer Abteilung
   * @returns Abteilungs-Objekt
   */
  createSingleDepartment(key, array) {
    const finalObject = {};
    finalObject.code = key;
    finalObject.name = dptCodes[key];
    finalObject.members = array;
    return finalObject;
  },
  /**
   * "Container" bezeichnet hier die Einheit aus Navigation und Anzeige der Karten
   * Die Navigation wird aufgrund der Abteilungen im Master-Array erstellt
   * Die Sektion mit den Karten wird aufgrund der selected-Variable erstellt, die als
   * default bei init-Aufruf übergeben werden muss.
   *
   * @returns
   */
  createContainer() {
    //...basierend auf Master und vars
    const cardNavigationUL = document.createElement("ul");
    for (const dpt of this.master) {
      const cardNavigationLiElement = document.createElement("li");
      cardNavigationLiElement.innerText = dpt.name;
      cardNavigationLiElement.setAttribute("data-dpt", dpt.code);
      cardNavigationUL.appendChild(cardNavigationLiElement);
      this.emit("addNavLiElement", cardNavigationLiElement);
    }
    this.vars.navElementUL = cardNavigationUL;
    this.vars.mainElements.cardNav.appendChild(cardNavigationUL);

    this.getNavElementByCode(this.vars.selectedDpt).classList.add("selected");
    this.createSection(this.vars.selectedDpt);

    console.log("CREATE CONTAINER: ", this.vars.dptSection);
  },
  updateContainer(currentDpt, nextDpt) {
    // Wenn die Abteilung in this.vars.dptSection schon existiert, display-Eigeneschaft ändern
    this.vars.dptSection[currentDpt].classList.add("d-none");
    if (this.vars.dptSection.hasOwnProperty(nextDpt)) {
      this.vars.dptSection[nextDpt].classList.remove("d-none");
    }
    // ansonsten Section erzeugen und anfügen
    else {
      this.createSection(nextDpt);
      console.log("UPDATE CONTAINER: nextDpt", nextDpt);
      console.log("UPDATE CONTAINER: currentDpt", currentDpt);
    }
    this.getNavElementByCode(currentDpt).classList.remove("selected");
    this.getNavElementByCode(nextDpt).classList.add("selected");
    this.vars.selectedDpt = nextDpt;
    console.log("UPDATE CONTAINER: Final, ", this.vars.selectedDpt);
  },
  createSection(dptCode) {
    const dpt = this.getDepartmentByCode(dptCode);
    // Section erstellen
    const section = document.createElement("section");
    section.setAttribute("id", dpt.code);
    // cardContainer erstellen
    const cardContainerDiv = document.createElement("div");
    cardContainerDiv.classList.add("cardContainer");

    for (const member of dpt.members) {
      const newCard = this.createCard(member, cardContainerDiv);
      cardContainerDiv.appendChild(newCard);
    }

    section.appendChild(cardContainerDiv);
    // Section in Hauptcontainer einfügen
    this.vars.mainElements.cardContainer.appendChild(section);
    // Section in dptSection schreiben

    this.vars.dptSection[dptCode] = section;

    console.log(
      "Grüße aus der Create Section",
      this.vars.dptSection[this.vars.selectedDpt]
    );
  },
  createCard(member) {
    //
    // 3D singleCard erstellen
    //
    const singleCard = document.createElement("div");
    singleCard.classList.add("scene");
    singleCard.setAttribute("data-id", member.id);
    //
    // card erstellen
    //
    const card = document.createElement("div");
    card.classList.add("card");
    //
    //
    // card-front erstellen
    //
    //
    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");

    // Bild erstellen und wenn vorhanden mit Content füllen
    const imageFrontContainer = document.createElement("div");
    imageFrontContainer.classList.add("card-image-front");
    const imageFront = document.createElement("img");
    if (member["image-front"] !== "") {
      imageFront.setAttribute("src", this.vars.path + member["image-front"]);
      imageFront.setAttribute(
        "alt",
        "Titelbild von " + member.firstName + " " + member.lastName
      );
    } else {
      imageFront.setAttribute("src", this.vars.path + "usersecret.jpg");
      imageFront.setAttribute(
        "alt",
        "Anonymes Titelbild von " + member.firstName + " " + member.lastName
      );
    }
    imageFrontContainer.appendChild(imageFront);

    // Overviev Front erstellen
    const cardOverviewFront = document.createElement("div");
    cardOverviewFront.classList.add("card-overview-front");

    cardOverviewFront.appendChild(
      this.helper.createParagraph(member, "firstName")
    );
    cardOverviewFront.appendChild(
      this.helper.createParagraph(member, "lastName")
    );
    cardOverviewFront.appendChild(
      this.helper.createParagraph(member, "position")
    );
    //Image und Overview in cardFront einfügen
    cardFront.appendChild(imageFrontContainer);
    cardFront.appendChild(cardOverviewFront);

    if (this.vars.mobileMode === true) {
      const container = document.createElement("div");
      container.classList.add("icon");
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const moreInfo = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      moreInfo.setAttribute("d", infoIconAbout);
      moreInfo.setAttribute("fill", "#800606");
      svg.appendChild(moreInfo);
      container.appendChild(svg);
      cardFront.appendChild(container);
    }

    //
    //
    // card-back erstellen
    //
    //
    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");

    // Bild erstellen und wenn vorhanden mit Content füllen
    const imageBackContainer = document.createElement("div");
    imageBackContainer.classList.add("card-image-back");
    const imageBack = document.createElement("img");
    // Wenn imageBack vorhanden:nutzen, wenn nicht:nutze imageFront, wenn das nicht vorhanden:nutze Default
    if (member["image-back"] !== "") {
      imageBack.setAttribute("src", this.vars.path + member["image-back"]);
      imageBack.setAttribute(
        "alt",
        "Sekundäres Titelbild von " + member.firstName + " " + member.lastName
      );
    } else if (member["image-front"] !== "") {
      imageBack.setAttribute("src", this.vars.path + member["image-front"]);
      imageBack.setAttribute(
        "alt",
        "Titelbild von " + member.firstName + " " + member.lastName
      );
    } else {
      imageBack.setAttribute("src", this.vars.path + "usersecret.jpg");
      imageBack.setAttribute(
        "alt",
        "Anonymes Titelbild von " + member.firstName + " " + member.lastName
      );
    }
    imageBackContainer.appendChild(imageBack);

    // cardOverviewBack erstellen
    const cardOverviewBack = document.createElement("div");
    cardOverviewBack.classList.add("card-overview-back");

    cardOverviewBack.appendChild(
      this.helper.createParagraph(member, "firstName")
    );
    cardOverviewBack.appendChild(
      this.helper.createParagraph(member, "lastName")
    );

    // TaskList erstellen
    const cardDescriptionContainer = document.createElement("div");
    cardDescriptionContainer.classList.add("card-description");
    const taskList = document.createElement("ul");

    for (const task of member.tasks) {
      const taskElement = document.createElement("li");
      taskElement.innerHTML = task.task;
      taskList.appendChild(taskElement);
    }
    cardDescriptionContainer.appendChild(
      this.helper.createParagraph(member, "position")
    );
    cardDescriptionContainer.appendChild(taskList);

    // Call-to-action erstellen
    const CTAContainer = document.createElement("div");
    CTAContainer.classList.add("card-call-to-action");

    // Button erstellen als Standard
    let check = 0;
    for (const contact in member.contacts) {
      if (member.contacts[contact] !== "") {
        check++;
      }
    }
    if (check > 0) {
      const contactLink = document.createElement("a");
      contactLink.innerText = "Kontaktieren";
      contactLink.addEventListener("click", () => {
        this.emit("clickContact", member);
      });
      CTAContainer.appendChild(contactLink);
    }
    // Image, CTA, overviewBack und Description in cardBack einfügen
    cardBack.appendChild(imageBackContainer);
    cardBack.appendChild(cardOverviewBack);
    // cardBack.appendChild(imageNameContainerBack)
    cardBack.appendChild(cardDescriptionContainer);

    check > 0 ? cardBack.appendChild(CTAContainer) : null;

    card.appendChild(cardFront);
    card.appendChild(cardBack);
    singleCard.appendChild(card);

    this.emit("addCard", singleCard);
    return singleCard;
  },
  navigationClick(cardNavigationLiElement) {
    const nextDpt = cardNavigationLiElement.dataset.dpt;
    // Wenn die geklickte Abteilung schon aktiv ist, return
    if (nextDpt === this.vars.selectedDpt) {
      console.log("aktives Element geklickt");
      return false;
    }
    this.updateContainer(this.vars.selectedDpt, nextDpt);
    return;
  },
  getDepartmentByCode(dptCode) {
    for (const i in this.master) {
      if (this.master[i].code === dptCode) {
        return this.master[i];
      }
    }
  },
  getNavElementByCode(dptCode) {
    return this.vars.navElementUL.querySelector(
      "li[data-dpt='" + dptCode + "']"
    );
  },
  events: {
    addNavLiElement: [
      function (navElement) {
        navElement.addEventListener("click", () => {
          this.navigationClick(navElement);
          return;
        });
        navElement.addEventListener(
          "mousedown",
          function (event) {
            if (event.detail > 1) {
              event.preventDefault();
              // of course, you still do not know what you prevent here...
              // You could also check event.ctrlKey/event.shiftKey/event.altKey
              // to not prevent something useful.
            }
          },
          false
        );
      },
    ],
    addCard: [
      function (singleCard) {
        // Im DesktopMode wird die Dreh-Möglichkeit aktiviert
        if (this.vars.mobileMode === false) {
          singleCard.addEventListener("mouseenter", () => {
            singleCard.querySelector(".card").classList.add("is-flipped");
          });
          singleCard.addEventListener("mouseleave", () => {
            singleCard.querySelector(".card").classList.remove("is-flipped");
          });
        }
        if (this.vars.mobileMode === true) {
          singleCard
            .querySelector(".card-front")
            .addEventListener("click", (event) => {
              console.log("hat es geklappt?");
              for (const element of this.vars.dptSection[
                this.vars.selectedDpt
              ].querySelectorAll(".card")) {
                element.classList.remove("is-flipped");
              }
              singleCard.querySelector(".card").classList.add("is-flipped");
            });
          singleCard
            .querySelector(".card-back")
            .addEventListener("click", (event) => {
              singleCard.querySelector(".card").classList.remove("is-flipped");
            });
        }
      },
    ],
    clickContact: [
      function (member) {
        this.createLightBox(member);
        document
          .querySelector("div[data-id='" + member.id + "']")
          .querySelector(".card")
          .classList.remove("is-flipped");
        console.log("member from clickedCard: ", member);
        document.querySelector("body").classList.add("oflowhide");
      },
    ],
    closeLightBox: [
      function () {
        document.querySelector("#lightbox").remove();
        document.querySelector("body").classList.remove("oflowhide");
      },
    ],
  },
  emit(eventName, param) {
    if (eventName in this.events) {
      for (const f of this.events[eventName]) {
        f.apply(dptModule, [param]);
      }
    }
  },
  on(eventName, cb) {
    // Hier ist die Klammersetzung sehr wichtig!
    if (!(eventName in this.events)) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(cb);
  },
};
document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.querySelector("main");
  const url = new URL("https://www.wesser.info/wp-content/uploads/about/");
  dptModule.init(mainContainer, "akq", url);
});
