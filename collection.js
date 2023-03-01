/*const searchInput = document.querySelector('input[type="text"]');
const books = document.querySelectorAll('.book');

searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();

  books.forEach(book => {
    c
    const title = book.querySelector('input[name="title"]').value;
  }
 */


  document.getElementById("bookstore-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent default form submission behavior
    var searchTerm = document.getElementById("bookstore-search").value;
    getBookstoreResults(searchTerm);
  });