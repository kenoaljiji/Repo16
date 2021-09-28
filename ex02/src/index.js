class Book {
  constructor(title) {
    this.title = title;
  }

  //Getter

  get title() {
    return this._title;
  }

  //Setter

  set title(newTitle) {
    this._title = newTitle;
  }
}

const littlePrince = new Book("The Little Prince");
console.log(littlePrince.title);
littlePrince.title = "Le Petit Prince";
console.log(littlePrince.title);
