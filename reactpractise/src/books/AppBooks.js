import { useState } from 'react';
import BooKlist from "./Book List";
import BookCreate from './BookCreate'


const AppBooks = () => {
  let [books, setBooks] = useState([]);
  const createBook = (title) => {
    const updatedBooks = [...books, { id: 21, title }];
    setBooks(updatedBooks);
    console.log(books);
  };
  return (
    <div>
      {books.length}
      <BookCreate onCreate={createBook} />
    </div>
  );
};
export default AppBooks;