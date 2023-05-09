import React, { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookCreate() {
  const [title, setTitle] = useState("");

  const {createBook} = useContext(BooksContext)

  const sendingTitle = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a book to your list</h3>
      <form onSubmit={sendingTitle}>
        <label>Title</label>
        <input
          className="input"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        <button className="button"> Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
