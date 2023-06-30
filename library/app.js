let myLibrary = [];

// myLibrary.push(newBookBtn);
function Book(title, author) {
  // the constructor...
  this.title = title;
  this.author = author;
}

function addBookToLibrary(book) {
  // do stuff here
  createBookCard(book);
  myLibrary.push(book);
}

const main = document.getElementById("main");
const newBookBtn = document.createElement("button");
newBookBtn.setAttribute("id", "newBookBtn");
newBookBtn.textContent = "Add new book";
main.appendChild(newBookBtn);

function createBookCard(book) {
  const card = document.createElement("div");
  const title = document.createElement("h4");
  const author = document.createElement("p");
  const deleteBook = document.createElement("button");
  // add classes
  card.classList.add("card");
  title.classList.add("title");
  author.classList.add("author");
  deleteBook.classList.add("deleteBook");

  //   append div to section

  //   add text content
  title.textContent = book.title;
  author.textContent = book.author;
  deleteBook.textContent = "delete";
  card.style.border = "1px solid black";
  card.style.padding = "15px";
  let index = 0;
  deleteBook.setAttribute("data-index", index);
  index++;

  card.appendChild(author);
  card.insertBefore(title, author);
  card.appendChild(deleteBook);
  main.appendChild(card);
  console.log(myLibrary);

  deleteBook.addEventListener("click", deleteABook);
}

function displayBook() {
  main.innerHTML = "";
  main.appendChild(newBookBtn);
  // Clear the existing book display

  // Loop through myLibrary and create book cards for each book
  myLibrary.forEach((book, index) => {
    createBookCard(book, index);
  });
}

// const newBookBtn = document.getElementById("newBookBtn");
const form = document.getElementById("newBookForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleData = form.title.value;
  const authorData = form.author.value;
  let newBook = new Book(titleData, authorData);
  addBookToLibrary(newBook);
});

newBookBtn.addEventListener("click", (event) => {
  toogleForm();
});

function toogleForm() {
  form.classList.toggle("hidden");
}

function deleteABook(event) {
  const deleted = event.target;
  const index = deleted.getAttribute("data-index");

  myLibrary.splice(index, 1);
  displayBook();
}
