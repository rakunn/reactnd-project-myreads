import React from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger';

const Book = ({ book, updateShelf }) => {
  console.log(book)
  const { authors, title, imageLinks, publisher } = book;
  const authorsStringified = (authors && authors.join(", ")) || publisher; // sometimes we don't have authors in data set, so let's replace them with publisher

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={imageLinks && {backgroundImage: `url(${imageLinks.smallThumbnail})`}}></div>
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