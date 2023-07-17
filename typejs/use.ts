import { Folder } from "./folder.js";
import { card } from "./card.js";
class User {
  private home: number;
  constructor() {
    this.home = 0;
    this.loadFunctionsFolder();
    this.homeFunction();
    this.createCard();

    this.buttonCreate();
  }
  loadFunctionsFolder() {
    const folder = new Folder();
  }
  homeFunction() {
    let elementA = document.getElementsByClassName("rounded-pill");
    for (let i = 0; i < elementA.length; i++) {
      elementA[i].addEventListener("click", function (event) {
        event.preventDefault();
        for (let j = 0; j < elementA.length; j++) {
          elementA[j].classList.remove("checked");
        }
        elementA[i].classList.add("checked");
      });
    }
  }
  addFlashCard() {
    // const newCard = new card();
  }

  buttonCreate() {
    const newCard = new card();
    const create = document.getElementsByClassName("button_create")[0];

    create.addEventListener("click", function () {
      let tile = document.getElementsByClassName(
        "title"
      )[0] as HTMLInputElement;
      let description = document.getElementsByClassName(
        "description"
      )[0] as HTMLInputElement;

      let obj = {
        title: tile.value,
        description: description.value,
      };

      localStorage.setItem(
        JSON.stringify(obj),
        JSON.stringify(newCard.valueCards)
      );
    });
  }
  createCard() {
    let button = document.getElementsByClassName("fixed-button")[0];
    let createCard = document.getElementsByClassName(
      "new_ADD_Folder_card"
    )[0] as HTMLElement;

    if (createCard !== undefined) {
      let htmlcreatcard = document.getElementsByClassName(
        "new_ADD_flash_card"
      )[0] as HTMLElement;
      const web1 = this;

      button.addEventListener("click", () => {
        createCard.style.display =
          createCard.style.display === "block" ? "none" : "block";
      });

      createCard.addEventListener("click", () => {
        createCard.style.display = "none";
      });

      htmlcreatcard.addEventListener("click", () => {
        window.location.href = "creatflashcrad.html";

        web1.buttonCreate();

        localStorage.setItem("home", "1");
      });
    }
  }
}
const user = new User();
