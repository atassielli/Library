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
const book1 = new Book('Star Wars', 'George Lucas', 457, 'Have read')

console.log(book1.info())

//Create button to bring up a form that asks the user for the details of a new book //

const body = document.querySelector('.container');

console.log(body)

const newBookButton = document.createElement('button');
newBookButton.classList.add('button');
newBookButton.textContent = 'New Book';
body.appendChild(newBookButton);

