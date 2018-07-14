import React, { Component } from 'react';
import Book from './Book';
import { Link } from "react-router-dom";
import { search } from './BooksAPI';

class Search extends Component {
  state = {
    foundBooks: []
  };

  handleSubmit = (event) => {
    event.preventDefault();

    search(event.target.value)
      .then(foundBooks => {
        const shelvedBooks  = this.props.books;
        const mergedBooks   = this.mergeBooks(shelvedBooks, foundBooks);

        this.setState({foundBooks: mergedBooks})})
      .catch(err => console.log(err));
  };

  mergeBooks = (shelvedBooks, searchedBooks) => {
    return searchedBooks.map(searchedBook => {
      const foundBook = shelvedBooks.find(shelvedBook => shelvedBook.id === searchedBook.id);

      if (foundBook) {
        return foundBook;
      }

      return searchedBook;
    })
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input onChange={this.handleSubmit} type="text" placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { this.state.foundBooks.map(book => (
              <Book
                key={book.id}
                book={book}
                updateShelf = {this.props.updateShelf }
              />
            )) }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;
