import { Folder } from "./folder.js";
import { card } from "./card.js";
class User {
  private home: number;
  constructor() {
    this.home = 0;
    this.loadFunctionsFolder();
    this.homeFunction();
    this.createCard();
    this.createdCard();
    this.buttonCreate();
    this.goToPageCard ();
    this.searchCard();
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
        window.location.href = "../flashcard.html";
       
      });
     
    }
  }
   goToPageCard() {
    const card = document.getElementsByClassName("flashcard_add_new");
    const innerHTMLOfChildren = [];
  
    for (let i = 0; i < card.length; i++) {
      card[i].addEventListener("click", function () {
        const childrenOfCard = card[i].getElementsByTagName("p");
  
        for (let j = 0; j < childrenOfCard.length; j++) {
          const innerHTMLOfChild = childrenOfCard[j].innerHTML.trim().toString();
        
          localStorage.setItem("check", innerHTMLOfChild);
        }
  
       
        window.location.href = "./src/card.html";
      });
    }
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
        window.location.href = "./src/creatflashcrad.html";

       
        localStorage.setItem("home", "1");
      });
    }
  }
  searchCard() {
    const searchInput = document.getElementsByClassName("inputSearch")[0] as HTMLInputElement;
    
    searchInput.addEventListener("input", (event) => {
      const searchValue = (event.target as HTMLInputElement).value;
      console.log(searchValue);
      const flashcardContainer = document.getElementById("flashcard_add");
      if(flashcardContainer!=undefined) {
      const keys = Object.keys(localStorage);
      const filteredKeys = keys.filter((key) => {
        return key.includes(searchValue) ;
      });
  
      if (searchValue !== "")
        {
          flashcardContainer.innerHTML=""
          filteredKeys.forEach((key) => {
            const value = JSON.parse(key);
            try {
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
            }
            catch{
            
            }
          });
       
        }
        else{
          flashcardContainer.innerHTML=""

         this.createdCard();
        }
      
    }
    });
  }
  createdCard() {
    const flashcardContainer = document.getElementById("flashcard_add");
    if(flashcardContainer!=undefined) {
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
