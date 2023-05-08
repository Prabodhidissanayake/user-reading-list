import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title)=>{
    console.log('this is the book title:', title)
  }

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
