import { Folder } from "./folder.js";
import { card } from "./card.js";
class User {
    constructor() {
        this.home = 0;
        this.loadFunctionsFolder();
        this.homeFunction();
        this.createCard();
        this.createdCard();
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
        const create = document.getElementsByClassName("button_create")[0];
        if (create != undefined) {
            const newCard = new card();
            create.addEventListener("click", function () {
                let tile = document.getElementsByClassName("title")[0];
                let description = document.getElementsByClassName("description")[0];
                let obj = {
                    title: tile.value,
                    description: description.value,
                };
                localStorage.setItem(JSON.stringify(obj), JSON.stringify(newCard.valueCards));
            });
        }
    }
    createCard() {
        let button = document.getElementsByClassName("fixed-button")[0];
        let createCard = document.getElementsByClassName("new_ADD_Folder_card")[0];
        if (createCard !== undefined) {
            let htmlcreatcard = document.getElementsByClassName("new_ADD_flash_card")[0];
            const web1 = this;
            button.addEventListener("click", () => {
                createCard.style.display =
                    createCard.style.display === "block" ? "none" : "block";
            });
            createCard.addEventListener("click", () => {
                createCard.style.display = "none";
            });
            htmlcreatcard.addEventListener("click", () => {
                window.location.href = "./src/creatflashcrad.html";
                // web1.buttonCreate();
                localStorage.setItem("home", "1");
            });
        }
    }
    createdCard() {
        const flashcardContainer = document.getElementById("flashcard_add");
        if (flashcardContainer != undefined) {
            const keys = Object.keys(localStorage);
            const filteredKeys = keys.filter((key) => {
                return key.includes("title");
            });
            filteredKeys.forEach((key) => {
                const value = JSON.parse(key);
                const keyWord1 = value.title;
                const keyWord2 = value.description;
                const newFlashcard = document.createElement("div");
                newFlashcard.className = "flashcard_add_new";
                newFlashcard.innerHTML = `
        <div class="flashcard_add_new_icon">
          <img src="./img/flash-cards.png" alt="">
          <p> ${keyWord1}</p>
        </div>
        <div class="flashcard_add_new_icon_desciption">
          ${keyWord2}
        </div>
        <div>
          <img src="./img/more.png" alt="">
        </div>
      `;
                flashcardContainer.appendChild(newFlashcard);
            });
        }
    }
}
const user = new User();
