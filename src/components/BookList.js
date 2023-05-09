import React from 'react'
import BookShow from './BookShow'

function BookList({ books, onDelete }) {
  const createBooksList = books.map((book) => {
    return <BookShow key={book.id} book={book} onDelete ={onDelete} />;
  });
  return <div className="book-list">{createBooksList}</div>;
}

export default BookList