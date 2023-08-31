function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title}, ${author}, ${pages}, ${read}`
    }
}

const book1 = new Book('The Hobbit', 'by J.R.R. Tolkien', '295 pages', 'not read yet')
console.log(book1.info())

const book2 = new Book('Harry Potter', 'by J.K. Rowling', '309 pages', 'not read yet')
console.log(book2.info())

console.log(Object.getPrototypeOf(book1) === Book.prototype)
console.log(Object.getPrototypeOf(book2) === Book.prototype)