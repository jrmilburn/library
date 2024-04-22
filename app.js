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
const getStatus = document.querySelector("#status");
const submitData = document.querySelector("form");

let myLibrary = [];

const addBookToLibrary = () => {
  myLibrary.push({
    title: title = getTitle.value,
    author: author = getAuthor.value,
    pages: pages = getPages.value,
    stats: 'checked'
  })
}

const createBookElement = (elem, content, spans, spanTxt) => {
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

const createBookDiv = (book) => {
  const insertBook = document.createElement("div");
        insertBook.setAttribute("class", "card");
        const removeBtn = document.createElement("button");
        removeBtn.setAttribute("class", "delete")
        const removeIcon = document.createElement("p");
        removeIcon.textContent = "X";
        removeBtn.appendChild(removeIcon);
        insertBook.appendChild(removeBtn);
        insertBook.appendChild(createBookElement('p', "Title: ", 'span', book.title));
        insertBook.appendChild(createBookElement('p', "Author: ", 'span', book.author));
        insertBook.appendChild(createBookElement('p', "Pages: ", 'span', book.pages));
        insertBook.appendChild(createBookElement('label', "Finished Reading: ", 'input', book.stats));
        mainSection.appendChild(insertBook);
}

const displayBook = () => {
  myLibrary.map((book) => {
    createBookDiv(book)
  })
  myLibrary = [];
}

submitData.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  displayBook();
  const deleteItem = document.querySelectorAll(".delete");
  deleteItem.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.target.closest('div.card').remove();
    })
  })
  dialog.close();
  submitData.reset();
})

displayBook();