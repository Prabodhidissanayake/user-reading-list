import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const addBook = [...books, { id: Math.round(Math.random() * 9999), title }];
    setBooks(addBook);
  };

  const deleteBookById = (id) => {
    const deleteBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(deleteBooks);
  };

  const updateBookById = (id, newTitle) => {
    const updateBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBooks(updateBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        onDelete={deleteBookById}
        onEdit={updateBookById}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
