import React, { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const sendingTitle = (event) => {
    event.preventDefault();
    onCreate(title);
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
