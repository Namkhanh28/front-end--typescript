class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    getInfo(): string {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}

class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    showBooks(): void {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee");
const book4 = new Book("Pride and Prejudice", "Jane Austen");
const book5 = new Book("The Great Gatsby", "F. Scott Fitzgerald");

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBooks();