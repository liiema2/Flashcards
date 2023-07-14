// type Card={
// name: string,
// description: string,
// img: string
// }

export class card{
  private name: string;
  private description: string;
  private img: string;

  constructor(name: string = "", description: string = "", img: string = "") {
    this.name = name;
    this.description = description;
    this.img = img;
  }
  createCard(name: string, description: string, img: string) {
    this.name = name;
    this.description = description;
    this.img = img;
  }
  set setName(value: string) {
    this.name = value;
  }
  set setDescription(value: string) {
    this.description = value;
  }
  set setImg(value: string) {
    this.img = value;
  };
  get getImg() {
    return this.img;
  }
  get getDescription() {
    return this.getDescription;
  }
  get getName()  {
    return this.name;
  }
  remove(name: string, description: string, img: string) {
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
  add(name: string, description: string, img: string) {
    if (name !== "") {
      this.name += name;
    }
    if (description !== "") {
      this.description += description;
    }
    if (img !== "") {
      this.img += img;
    }
  }
 
}
