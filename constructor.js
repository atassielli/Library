
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