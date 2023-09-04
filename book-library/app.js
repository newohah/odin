const getTitleInputEl = document.querySelector('#title')
const getAuthorInputEl = document.querySelector('#author')
const getPagesInputEl = document.querySelector('#pages')
const getStatusEl = document.querySelector('#read')
const submitBtn = document.querySelector('#submit')


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title}, ${author}, ${pages}, ${read}`
    }
}
