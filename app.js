const dialog = document.querySelector("dialog");
const showModal = document.querySelector(".add");
const closeModal = document.querySelector("dialog .close");
const mainSection = document.querySelector("main")

showModal.addEventListener("click", () => {
  dialog.showModal();
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

//--------------------------------------------------------------

const getTitle = document.querySelector("#title");
const getAuthor = document.querySelector("#author");
const getPages = document.querySelector("#pages");
const submitData = document.querySelector("form");




let myLibrary = [];

class Book {
  constructor() {
    this.title = getTitle.value;
    this.author = getAuthor.value;
    this.pages = getPages.value;
    this.status = 'checked';

  }
  addBookToLibrary() {
    myLibrary.push({
      title: this.title,
      author: this.author,
      pages: this.pages,
      stats: this.status
    })
  }

  createBookElement(elem, content, spans, spanTxt) {
    const element = document.createElement(elem);
    element.textContent = content;
    const childElem = document.createElement(spans);
      if (spans === "input") {
          childElem.setAttribute("type", "checkbox");
      }
      else {
        childElem.textContent = spanTxt;
      }
    element.appendChild(childElem);
    return element
  }

  createBookDiv(){
    const insertBook = document.createElement("div");
          insertBook.setAttribute("class", "card");
          const removeBtn = document.createElement("button");
          removeBtn.setAttribute("class", "delete")
          const removeIcon = document.createElement("p");
          removeIcon.textContent = "X";
          removeBtn.appendChild(removeIcon);
          insertBook.appendChild(removeBtn);
          insertBook.appendChild(this.createBookElement('p', "Title: ", 'span', this.title));
          insertBook.appendChild(this.createBookElement('p', "Author: ", 'span', this.author));
          insertBook.appendChild(this.createBookElement('p', "Pages: ", 'span', this.pages));
          insertBook.appendChild(this.createBookElement('label', "Finished Reading: ", 'input', this.status));
          mainSection.appendChild(insertBook);
  }

  displayBook() {
    myLibrary.map(() => {
      this.createBookDiv()
    })
    myLibrary = [];
  }
}



submitData.addEventListener('submit', (e) => {
  e.preventDefault();
  let book = new Book;
  book.addBookToLibrary();
  book.displayBook();
  const deleteItem = document.querySelectorAll(".delete");
  deleteItem.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.target.closest('div.card').remove();
    })
  })
  dialog.close();
  submitData.reset();
})





