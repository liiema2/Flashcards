export class card {
    constructor() {
        this.value = [];
        this.createCard();
    }
    createCard() {
        const homeValue = localStorage.getItem("home");
        const buttons = document.querySelectorAll(".fixed-button")[0];
        const add = document.querySelector(".input_flashcard_add");
        buttons.addEventListener("click", () => {
            const cardContainer = document.createElement("div");
            cardContainer.className = "input_flashcard_add_header";
            const div1 = document.createElement("div");
            div1.className = "input_flashcard_add_header1";
            const div1Inner = document.createElement("div");
            const div1Text = document.createElement("div");
            div1Text.textContent = "1";
            div1Inner.appendChild(div1Text);
            div1.appendChild(div1Inner);
            const div2 = document.createElement("div");
            // div1Inner.appendChild(div2);
            div2.className = "input_flashcard_add_img";
            const div2Inner = document.createElement("div");
            const inputImage = document.createElement("input");
            inputImage.type = "file";
            inputImage.accept = "image/*";
            inputImage.id = "image-upload";
            div2Inner.appendChild(inputImage);
            div2.appendChild(div2Inner);
            const inputText1 = document.createElement("input");
            inputText1.type = "text";
            inputText1.className = "key";
            div2.appendChild(inputText1);
            const div3 = document.createElement("div");
            div3.className = "input_flashcard_add_img_delete";
            const div3Inner = document.createElement("div");
            const deleteImg = document.createElement("img");
            deleteImg.src = "../img/delete.png";
            deleteImg.alt = "";
            div3Inner.appendChild(deleteImg);
            div3.appendChild(div3Inner);
            const inputText2 = document.createElement("input");
            inputText2.type = "text";
            inputText2.className = "value";
            div3.appendChild(inputText2);
            div1Inner.appendChild(div2);
            div1.appendChild(div3);
            cardContainer.appendChild(div1);
            add.appendChild(cardContainer);
        });
    }
    remove(name, description, img) {
        if (name == "") {
            this.name = "";
        }
        if (description == "") {
            this.description = "";
        }
        if (img == "") {
            this.img = "";
        }
    }
    addCreateCards() {
        let button = document.getElementsByClassName("fixed-button")[0];
        let form = document.getElementsByClassName("new_ADD_Folder_card")[0];
        button.addEventListener("click", function () {
            form.style.display = "block";
        });
    }
    set valuecard(new1) {
        this.value = new1;
    }
    get valueCards() {
        let valueCards = {};
        let keys = Array.from(document.getElementsByClassName("key"));
        let values = Array.from(document.getElementsByClassName("value"));
        if (keys.length === values.length) {
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i].value;
                let value = values[i].value;
                valueCards[key] = value;
            }
        }
        return valueCards;
    }
}
