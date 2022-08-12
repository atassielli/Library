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
    myLibrary.push(newBook);
    storeBook();
}

function storeBook () {
    let newCard = document.createElement('div');
    newCard.classList.add('book');
    library.appendChild(newCard);
    newCard.classList.add(`${myLibrary[myLibrary.length-1].pages}`);
    let bookTitle = document.createElement('div');
    bookTitle.classList.add('bookTitle')
    bookTitle.textContent = `Title: ${myLibrary[myLibrary.length-1].title}`;
    newCard.appendChild(bookTitle);
    let bookAuthor = document.createElement('div');
    bookAuthor.classList.add('bookAuthor')
    bookAuthor.textContent = `Author: ${myLibrary[myLibrary.length-1].author}`;
    newCard.appendChild(bookAuthor);
    let bookPages = document.createElement('div');
    bookPages.classList.add('bookPages')
    bookPages.textContent = `Pages: ${myLibrary[myLibrary.length-1].pages}`;
    newCard.appendChild(bookPages);
    let bookread = document.createElement('button');
    bookread.classList.add('bookread')
    bookread.classList.add('cardButton')
    let complete = `${myLibrary[myLibrary.length-1].read}`
    if (complete.toLowerCase() === 'yes' ) {
        bookread.textContent = 'Completed';
        bookread.style.cssText ='background-color: green';
    } else {
        bookread.textContent = 'Not Completed';
        bookread.style.cssText = 'background-color: red';
    }
    newCard.appendChild(bookread);
    let bookDelete = document.createElement('button');
    bookDelete.classList.add('bookDelete')
    bookDelete.classList.add('cardButton')
    bookDelete.textContent = 'Delete';
    newCard.appendChild(bookDelete);    

    console.log(bookDelete.newCard)

    bookDelete.addEventListener('click', function () {
        newCard.remove();
    })
}


//Create button to bring up a form that asks the user for the details of a new book //

const addBooks = document.querySelector('.addBook');

const newBookButton = document.createElement('button');
newBookButton.classList.add('button');
newBookButton.textContent = 'Add Book';
addBooks.appendChild(newBookButton);

newBookButton.addEventListener('click', function () {
    newTitle = window.prompt('Title:');
    newAuthor = window.prompt('Author:');
    newPages = window.prompt('Number of Pages:');
    newread = window.prompt('Have you finished this book? (Yes or No)');
    validateStatus();
    addBook();
})

function validateStatus() {
    while (newread.toLowerCase() != 'yes' && newread.toLowerCase() != 'no') {
        newread = window.prompt('You must answer Yes or No. Have you read this book?')
    }
}

const library = document.querySelector('.cardContainer');


const empty = document.querySelector('.empty');

empty.addEventListener('click', function () {
   location.reload();
})
