let myLibrary = [];

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function render() {
  let bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  myLibrary.forEach((book, index) => {
    let row = bookList.insertRow();
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let isbnCell = row.insertCell(2);
    let actionCell = row.insertCell(3);
    titleCell.innerHTML = book.title;
    authorCell.innerHTML = book.author;
    isbnCell.innerHTML = book.isbn;
    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      render();
    });
    actionCell.appendChild(removeBtn);
  });
}

function addBook() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
}