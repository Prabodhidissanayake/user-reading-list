import React, { useState } from "react";

function BookEdit({ book }) {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (event) => {
    event.preventDefault();
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
