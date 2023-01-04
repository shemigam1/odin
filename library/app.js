let myLibrary = [];

function Book(title, author, dateRelased) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.dateRelased = dateRelased;
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

const thingsFallApart = new Book("things fall apart", "chinua Achebe", 1998);
addBookToLibrary(thingsFallApart);

console.log(myLibrary);
const main = document.getElementById("main");
function displayBook() {
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
  });
}
