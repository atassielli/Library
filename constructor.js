let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

let newTitle;
let newAuthor;
let newPages;
let newread;

function addBook () {
    let newBook = new Book (newTitle, newAuthor, newPages, newread);
    myLibrary.push(newBook.info());
    console.log(myLibrary)
    storeBook();
}

function storeBook () {
    let newCard = document.createElement('div');
    newCard.classList.add('.book');
    library.appendChild(newCard);
    let bookInfo = document.createElement('div');
    bookInfo.classList.add('.bookInfo');
    bookInfo.textContent = `${myLibrary}`;
    newCard.appendChild(bookInfo);
}

//Create button to bring up a form that asks the user for the details of a new book //

const addBooks = document.querySelector('.addBook');

const newBookButton = document.createElement('button');
newBookButton.classList.add('button');
newBookButton.textContent = 'New Book';
addBooks.appendChild(newBookButton);

newBookButton.addEventListener('click', function () {
    newTitle = window.prompt('Title:');
    newAuthor = window.prompt('Author:');
    newPages = window.prompt('Number of Pages:');
    newread = window.prompt('Have you finished this book?')
    addBook();
})

const library = document.querySelector('.yourBooks');


