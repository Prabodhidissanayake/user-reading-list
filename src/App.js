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

  const deleteBookById = (id)=>{
    const deleteBooks = books.filter((book)=>{
      return book.id !== id;
    });

    setBooks(deleteBooks);
  }

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
