import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Bookshelf = ({ books, updateShelf, bookshelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ bookshelf }</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { books.map(book => (
            <Book
              key={book.id}
              book={book}
              updateShelf = {updateShelf }
            />
          )) }
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  bookshelf: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default Bookshelf;