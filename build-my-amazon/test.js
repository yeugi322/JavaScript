//Book exercise 

const myLibrary = [];

function Book(title, author, num_of_pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.num_of_pages = num_of_pages;
    this.isRead = isRead;
    // this.info = function() {
    //     const readStatus = this.isRead ? "read" : "not read yet";
    //     return `${this.title} by ${this.author}, ${this.num_of_pages} pages, ${readStatus}`
    // };
}

// const theHobbit = new Book('Hobbit', 'J.R.R Tolkien', 296, true);

// console.log(theHobbit.info());

function addBookToLibrary(title, author, num_of_pages, isRead) {
    const newBook = new Book(title, author, num_of_pages, isRead);
    myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 795, true);

console.log(myLibrary);
