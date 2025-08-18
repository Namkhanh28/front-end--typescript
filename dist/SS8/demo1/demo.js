class Book {
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getBookById(id) {
        return this.books.find(book => book.id === id);
    }
    removeBook(id) {
        this.books = this.books.filter((book) => (book.id !== id));
    }
    updateBook(id, updatedBook) {
        const index = this.books.find((book) => book.id === id);
        book = updateBook;
    }
    listBooks() {
        return this.books;
    }
    findBooKByTitleorAuthor(searchTerm) {
        return this.books.filter((book) => book.title.includes(searchTerm) || book.author.includes(searchTerm));
    }
    gettotalBooks() {
        return this.books.length;
    }
    findByYear(year) {
        return this.books.filter((book) => book.year === year);
    }
}
let library = new Library();
let book1 = new Book();
book1.id = 1;
book1.title = "Lập trình TypeScript";
book1.author = "Nguyễn Văn A";
book1.year = 2023;
studio.year = ONe;
pieCe;
log(`Thêm sách: ${book1.title}`);
library.addBook(book1);
export {};
//# sourceMappingURL=demo.js.map