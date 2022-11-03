// Store the Books in Array
let library = [];

// Constructor for the Book
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, read: ${this.read}.`
    }
};

// Add book to library Array
function addBookToLibrary(book) {
    return library.push(book)
};

// Creating Book of HTML input values from user, then add it to library and display it
function createBook() {   
    title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    pages = document.getElementById('pages').value,
    read = document.getElementById('read').value;
    newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    displayBook(library.length-1);
};

// Loop books in Array library and display them on the page
function displayLibrary() {
    for (let i in library) {
        displayBook(i)
    }
};

// Clear form after click on Add Book button
function clearForm() {
  form = document.getElementsByTagName('input')
  for (let i in form) {
    form[i].value = "";
  }
};

// Show book on the page by creating the div elements
function displayBook(index) {
    let div = document.getElementsByClassName('library')[0].appendChild(document.createElement('div'));
    div.classList.add('book');

    bookTitle = div.appendChild(document.createElement('h2'));
    bookTitle.classList.add('title');
    bookTitle.appendChild(document.createTextNode(library[index].title));

    bookAuthor = div.appendChild(document.createElement('h3'));
    bookAuthor.classList.add('author');
    bookAuthor.appendChild(document.createTextNode(library[index].author));

    bookPages = div.appendChild(document.createElement('h4'));
    bookPages.classList.add('pages');
    bookPages.appendChild(document.createTextNode(library[index].pages));

    bookRead = div.appendChild(document.createElement('h4'));
    bookRead.classList.add('read');
    bookRead.book = library[index];
    if (library[index].read === 'y') {
      bookRead.textContent = "read";
    } else {
      bookRead.textContent = "unread yet"
    }
};


// Button to add new book, after click execute function for clearing the form
const addNewBook = document.getElementById('add-book');
addNewBook.addEventListener('click', clearForm);

// Confirm and show book on page
const confirmBook = document.getElementById('confirm');
confirmBook.addEventListener('click', createBook);



console.log(library);