import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Bookshelf = ({ books, bookshelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ bookshelf }</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { books.map(book => <Book key={book.title} book={book} />) }
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  bookshelf: PropTypes.string.isRequired
};

export default Bookshelf;