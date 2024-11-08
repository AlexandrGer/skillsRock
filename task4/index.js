// 1.  Реализация простого калькулятора

class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b === 0) {
      return "Ошибка: на ноль делить нельзя!";
    }
    return a / b;
  }
}

const calculator = new Calculator();

console.log(calculator.add(7, 3));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 4));
console.log(calculator.divide(20, 4));
console.log(calculator.divide(20, 0));

// 2. Система управления библиотекой

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.status = "available";
  }
}

class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
    console.log("Ваша книга успешно добавлена");
  }

  borrowBook(isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      if (book.status === "available") {
        book.status = "taken";
        console.log("Книга успешно взята");
        return book;
      } else {
        console.log("Данная книга уже кем-то взята...");
      }
    } else {
      console.log("К сожалению, книга с таким ISBN не найдена...");
    }
    return null;
  }

  returnBook(isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      if (book.status === "taken") {
        book.status = "available";
        console.log("Книга успешно возвращена");
        return book;
      } else {
        console.log("Данная книга итак доступна, возвращать ее не надо)");
      }
    } else {
      console.log("К сожалению, книга с таким ISBN не найдена...");
    }
    return null;
  }

  listAvailableBooks() {
    const availableBooks = this.books.filter(
      (book) => book.status === "available"
    );
    if (availableBooks.length > 0) {
      console.log("Доступные книги:");
      availableBooks.forEach((book) => {
        console.log(
          `- ${book.title} (ISBN: ${book.isbn}, Автор: ${book.author})`
        );
      });
    } else {
      console.log("Кажется у нас нет доступных книг...");
    }
  }
}

const library = new Library();

const book1 = new Book("Гордость и предубеждение", "Джейн Остен", "12345");
const book2 = new Book("Дневник Анны Франк", "Анна Франк", "54321");
const book3 = new Book("1984", "Джордж Оруэлл", "88005553535");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.listAvailableBooks();
library.borrowBook("12345");
library.borrowBook("1234567");
library.borrowBook("12345");
library.returnBook("12345");
library.returnBook("1234567");
library.returnBook("12345");
