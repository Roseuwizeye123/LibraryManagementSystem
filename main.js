
let book1 = {
    title: 'computer hardware',
    author: "kami",
    available: true,
    dateBorrowed: null,
    borrower: null
}
let book2 = {
    title: 'information system',
    author: "kaka",
    available: true,
    dateBorrowed: null,
    borrower: null
}
let book3 = {
    title: 'internet of thing',
    author: "kado",
    available: true,
    dateBorrowed: null,
    borrower: null
}
let book4 = {
    title: 'calculus',
    author: "fari",
    available: true,
    dateBorrowed: null,
    borrower: null
}




let libraryBooks = [];

function addBook(book) {
    // code to add book to libraryBooks list
    libraryBooks.push(book);
};
// Add books to libraryBooks by calling addBook
addBook(book1);
addBook(book2);
addBook(book3);
addBook(book4);

console.log(libraryBooks);

for (let bo in libraryBooks) {
    console.log(bo.title);
}



function borrowBook(bookTitle, user) {
    let foundBook = libraryBooks.find(book => book.title === bookTitle);
    // Find/search the book in the libraryBooks and update the book object properties accordingly
    foundBook.available = false;
    foundBook.borrower = user;
    foundBook.dateBorrowed = new Date();

    console.log(libraryBooks);
};

const borrowingUser = {
    fullname: "rose marie",
    borrowerNID: "1199882347589"
};

// Borrow book1
borrowBook("computer hardware", borrowingUser);



function returnBook(bookTitle, borrow) {
    // Find/search the book in the libraryBooks 
    // Check if the borrowerNID matches the NID of the borrowingUser
    // Thrn update the book object properties accordingly if it matches
    let foundBook = libraryBooks.find(book => book.title === bookTitle && book.borrower.borrowerNID === borrow);

    if (foundBook) {
        foundBook.available = true;
        foundBook.dateBorrowed = null;
        foundBook.borrower = null;

        console.log(libraryBooks);
    }
    else{
        console.log("not allowed");
    }

};
// Return the book
returnBook("computer hardware", "1199882347589");