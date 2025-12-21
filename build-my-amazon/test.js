//Book exercise 
function Book(title, author, num_of_pages, isRead) {
    this.title = title;
    this.author = author;
    this.num_of_pages = num_of_pages;
    this.isRead = isRead;
    this.info = function() {
        const readStatus = this.isRead ? "read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.num_of_pages} pages, ${readStatus}`
    };
}

const theHobbit = new Book('Hobbit', 'J.R.R Tolkien', 296, true);

console.log(theHobbit.info());
