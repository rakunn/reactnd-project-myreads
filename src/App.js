import React from 'react';
import Search from './Search';
import BooksContainer from './BooksContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ books });
      });

    BooksAPI.search('Linux')
      .then(books => console.log(books));
  }

  findBook(state, id) {
    return state.books.find(book => book.id === id);
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(data => {
        this.setState(prevState => {
          shelf === 'none'
            ? this.findBook(prevState, book.id).shelf = shelf
            : delete this.findBook(prevState, book.id).shelf;
          return prevState;
        })
      })
      .catch(err => console.log(err));
  };

  render() {
    const { books } = this.state;
    return (
      <Router>
        <div className="app">

          <Route path="/" exact render={() => (
            <BooksContainer
              updateShelf = {this.updateShelf}
              books={books}
            /> )}
          />

          <Route path="/search" render={() => (
            <Search updateShelf = {this.updateShelf} />
          )} />

        </div>
      </Router>
    );
  }
}

export default BooksApp;
