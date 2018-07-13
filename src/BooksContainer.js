import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

class BooksContainer extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  findUniqueBookShelves = (booksProp) => {
    return [...new Set(booksProp.map(book => book.shelf))];
  };

  filterBooks = (books, shelf) => {
    return books.filter(book => book.shelf === shelf);
  };

  render() {
    const books = this.props.books;
    const uniqueBookshelves = this.findUniqueBookShelves(books);

    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        { uniqueBookshelves.map(name => (
          <Bookshelf
            key={name}
            bookshelf={name}
            books={this.filterBooks(books, name)}
          />
        ))}

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>

      </div>
    )
  }
}

export default BooksContainer;