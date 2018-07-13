import React from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger';

const Book = ({ book, updateShelf }) => {
  const { authors, title, imageLinks } = book;
  const authorsStringified = authors.join(", ");

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{backgroundImage: `url(${imageLinks.smallThumbnail})`}}></div>
          <BookshelfChanger
            book={book}
            updateShelf = {updateShelf }
          />
        </div>
        <div className="book-title"> { title } </div>
        <div className="book-authors"> { authorsStringified } </div>
      </div>
    </li>
  )
};

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;