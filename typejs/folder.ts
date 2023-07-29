// import { Card } from "./card";

export class Folder {
  private nameFolder: string[] = [];
  private listCards = [];
  constructor() {
    let create = document.getElementsByClassName("createfoder")[0];
  
    if (create != undefined) {
      this.reloadFunctionFolder();
      this.createFolder();
      this.getFolderCreated();
      this.addFolder();
    }
  }
  private createFolder() {
    const inputNameFolder = document.getElementById(
      "input_folder"
    ) as HTMLInputElement;
    const createButton = document.getElementsByClassName(
      "newfolder_card_create_button"
    )[0] as HTMLElement;
    const cancelButton = document.getElementsByClassName(
      "newfolder_card_cancel_button"
    )[0] as HTMLElement;
    const add = document.getElementsByClassName("folder_add")[0] as HTMLElement;
    let inputNone = document.getElementsByClassName(
      "newfolder"
    )[0] as HTMLElement;

    const handleCreateButtonClick = () => {
      const name = inputNameFolder.value;

      if (name !== "") {
        const obj = { status: true };
        localStorage.setItem(name, JSON.stringify(obj));

        this.nameFolder.push(name);
        const folderElement = this.addFolder(name);
        add.appendChild(folderElement);
        this.addRenameAndTrash(folderElement, name);

        inputNone.style.display = "none";
      }
    };

    createButton.addEventListener("click", handleCreateButtonClick);

    cancelButton.addEventListener("click", () => {
      inputNone.style.display = "none";
    });
  }

  private reloadFunctionFolder() {
    let create = document.getElementsByClassName("createfoder")[0];

    let newfolder = document.getElementsByClassName(
      "newfolder"
    )[0] as HTMLElement;
    create.addEventListener("click", function () {
      if (newfolder) newfolder.style.display = "block";
    });
  }
  private getFolderCreated() {
    const add = document.getElementsByClassName("folder_add")[0] as HTMLElement;
    const folderKeys = Object.keys(localStorage);
    this.nameFolder = folderKeys;
    for (let i = 0; i < this.nameFolder.length; i++) {
      const storedItem = localStorage.getItem(folderKeys[i]);
      if (storedItem) {
        try {
          const parsedItem = JSON.parse(storedItem);
          if (typeof parsedItem === 'object' && parsedItem !== null) {
            const status = parsedItem.status;
            if (status) {
              const folderElement = this.addFolder(this.nameFolder[i]);
              add.appendChild(folderElement);
              this.addRenameAndTrash(folderElement, folderKeys[i]);
            }
          }
        } catch (error) {
         
        }
      }
    }
  }

  private addFolder(name: string = ""): HTMLDivElement {
    if (name != "") {
      const newFolder = document.createElement("div");
      newFolder.className = "folder_add_new";
      newFolder.innerHTML = `
          <div class="folder_add_white">
            <div><img src="./img/folder.png" alt=""></div>
            <div>${name}</div>
            <div class="folder_add_white_more"><img src="./img/more.png" alt=""></div>
            <div class="folder_add_white_more_list" style="display:none;">
              <div>Rename</div>
              <div>Trash</div>
            </div>
          </div>
        `;
      return newFolder;
    }
  }
  private addRenameAndTrash(folderElement: HTMLElement, key) {
    const moreDisplay = folderElement.getElementsByClassName(
      "folder_add_white_more"
    )[0] as HTMLElement;
    const moreList = folderElement.getElementsByClassName(
      "folder_add_white_more_list"
    )[0] as HTMLElement;

    const childElement = moreList as HTMLElement;

    childElement.children[0].addEventListener("click", () => {
      const storedItem = localStorage.key(key);
    });

    moreDisplay.addEventListener("click", (event) => {
      event.stopPropagation();

      const allMoreLists = document.getElementsByClassName(
        "folder_add_white_more_list"
      );
      for (let i = 0; i < allMoreLists.length; i++) {
        (allMoreLists[i] as HTMLElement).style.display = "none";
      }
      moreList.style.display =
        moreList.style.display === "block" ? "none" : "block";

      const bodyClickHandler = () => {
        moreList.style.display = "none";
        document.body.removeEventListener("click", bodyClickHandler);
      };

      document.body.addEventListener("click", bodyClickHandler);
    });
  }
  private renameFolder(name) {}
  private trashFolder() {}
}
