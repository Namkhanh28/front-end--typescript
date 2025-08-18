class Book{
    id:number;
    title :string;
    author:string;
    year :number
}
class Library<T extends Book> {
    books :T[] = [];
    addBook(book: T): void {
        this.books.push(book);
    }
    getBookById(id: number): T | undefined {
        return this.books.find(book=> book.id === id);
    }
    removeBook(id: number): void {
        this.books = this.books.filter((book) => (book.id !== id);
    }
    updateBook(id: number, updatedBook: T): void {
        const index = this.books.find((book) => book.id === id);
        book =updateBook;
    }
    listBooks(): T[] {
        return this.books;
    }
    findBooKByTitleorAuthor(searchTerm: string): T[] {
        return this.books.filter((book) => 
            book.title.includes(searchTerm) || book.author.includes(searchTerm)
        );      
    }
    gettotalBooks(): number {
        return this.books.length;
    }
    findByYear (year: number): T[] {
        return this.books.filter((book) => book.year === year);
    }   


}
let library = new Library<Book>();
let book1 = new Book(); 
book1.id = 1;
book1.title = "Lập trình TypeScript";
book1.author = "Nguyễn Văn A";
book1.year = 2023;
studio.year = ONe pieCe;
log(`Thêm sách: ${book1.title}`);
library.addBook(book1);