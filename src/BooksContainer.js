import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

class BooksContainer extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  findUniqueBookShelves = (booksProp) => {
    const validShelves = booksProp
      .map(book => book.shelf)
      .filter(shelf => shelf && shelf !== 'none');

    return [...new Set(validShelves)].sort();
  };

  filterBooks = (books, shelf) => {
    return books.filter(book => book.shelf === shelf);
  };

  render() {
    const books = this.props.books;
    const uniqueBookshelves = this.findUniqueBookShelves(books);

    return (
      <div className="list-books">

        { uniqueBookshelves.map(name => (
          <Bookshelf
            key={name}
            bookshelf={name}
            books={this.filterBooks(books, name)}
            updateShelf = {this.props.updateShelf }
          />
        ))}

        <div className="open-search">
          <Link to={process.env.PUBLIC_URL + "/search"}>Add a book</Link>
        </div>

      </div>
    )
  }
}

export default BooksContainer;