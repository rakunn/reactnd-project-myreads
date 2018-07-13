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
  }

  findBook(state, id) {
    return state.books.find(book => book.id === id);
  }

  updateShelf = (id, shelf) => {
    this.setState(prevState => {
      this.findBook(prevState, id).shelf = shelf;
      return prevState;
    })
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

          <Route path="/search" component={Search} />

        </div>
      </Router>
    );
  }
}

export default BooksApp;
