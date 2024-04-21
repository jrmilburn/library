const bookList = document.querySelector('.book-list');
const addBtn = document.querySelector('#add');
const refreshBtn = document.querySelector('#refresh');
const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit');
const body = document.querySelector('body');

const myLibrary = ['Diary of a CEO', 'Thinking Fast and Slow', 'the art of war'];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    let newBook = prompt('What is the new book?');
    myLibrary.push(book);
}

function displayBooks(array){
    for (let i = 0; i < array.length; i++){
        
        let book = document.createElement('p');
        book.textContent = array[i];
        book.style.cssText = 'border: 1px solid black; border-radius: 1rem; width: 200px; height: auto; padding: 1rem;'
        bookList.appendChild(book);
    }
    
}

refreshBtn.addEventListener('click', () => {
    displayBooks(myLibrary);
})

addBtn.addEventListener('click', ()=> {
    form.classList.add('active');
    body.classList.add('inactive');
});