const addBook = document.querySelector('.container-title')
const popupBoxEl = document.querySelector('.popup-box')
const popupBoxClose = document.querySelector('.close-btn')
const getTitleInputEl = document.querySelector('#title')
const getAuthorInputEl = document.querySelector('#author')
const getPagesInputEl = document.querySelector('#pages')
const getStatusEl = document.querySelector('#read')
const submitBtn = document.querySelector('#submit')
const bookContainer = document.querySelector('.book-body')
let deleteBookCardEl = ''


addBook.addEventListener('click', e => {
    popupBoxEl.classList.add('active')
})
popupBoxClose.addEventListener('click', e => {
    popupBoxEl.classList.remove('active')
})
document.addEventListener('keydown', closePopupFormKey)
submitBtn.addEventListener('click', addBookToLibrary)



const myLibrary = [];
let counter = 0;

// Book constructor

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title}, ${author}, ${pages}, ${read}`
    }
}

// Adding the inputed object into array and creating the book-cards

function addBookToLibrary(e){
    if (e) {
        myLibrary.push(new Book(getTitleInputEl.value, getAuthorInputEl.value, getPagesInputEl.value, getStatusEl.checked))
        counter++

        // creating book cards in book-body (book-container)

        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const bookTitleInfo = document.createElement('span');
        const bookAuthorInfo = document.createElement('span');
        const bookPagesInfo = document.createElement('span');
        const bookStatusInfo = document.createElement('span');

        bookTitleInfo.classList.add('book-info');
        bookAuthorInfo.classList.add('book-info');
        bookPagesInfo.classList.add('book-info');
        bookStatusInfo.classList.add('book-status');

        for (let i = 0; i < counter; i++){ 
            bookTitleInfo.innerText = myLibrary[i].title
            bookAuthorInfo.innerText = myLibrary[i].author
            bookPagesInfo.innerText = myLibrary[i].pages
            
            bookCard.append(bookTitleInfo)
            bookCard.append(bookAuthorInfo)
            bookCard.append(bookPagesInfo)
        }

        // code to check if the checkbox is checked or not

        if (getStatusEl.checked){
            bookStatusInfo.innerText = 'Read'
        } else {
            bookStatusInfo.innerText = 'Not Read'
            bookStatusInfo.style.backgroundColor = '#f73b3b'
        }

        bookCard.append(bookStatusInfo)

        deleteBookCardEl = document.createElement('button');
        deleteBookCardEl.classList.add('delete-btn')
        deleteBookCardEl.type = 'reset';
        deleteBookCardEl.innerText = 'Delete'
        bookCard.appendChild(deleteBookCardEl);

        bookContainer.appendChild(bookCard)
    }

    deleteBookCardEl.addEventListener('click', e => {
        console.log('delete button is clicked')
    })
}

// Close the popup form

function closePopupFormKey(e){
    if (e.key === 'Escape' || e.key === 'Esc' || e.key === 27) {
        popupBoxEl.classList.remove('active')
    }
}

