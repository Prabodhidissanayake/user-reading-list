import React, { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { updateBookById } = useContext(BooksContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    updateBookById(book.id, title);
  };
  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        <button className="button is-primary"> Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
