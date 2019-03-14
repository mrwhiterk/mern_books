import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './App.css';

import Books from '../Books/Books';
import Book from '../Book/Book';
import axios from 'axios'
import AddBook from '../AddBook/AddBook';
import EditBook from '../EditBook/EditBook';
import serverUrl from '../constants';

import BookContainer from '../../containers/BookContainer'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
    this.addBook = this.addBook.bind(this)
    this.getBooks = this.getBooks.bind(this)
  }

  addBook(newBook) {
    this.setState({
      books: [...this.state.books, newBook]
    })
  }

  getBooks() {
    axios.get(serverUrl + '/api/books')
      .then((res) => {
        this.setState({
          books: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getBooks()
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">
            <h1>Library</h1>
          </Link>
          <Link to="/new">
            <h3>Add new Book</h3>
          </Link>
        </nav>
        <main>
          <BookContainer />

          <Switch>
            <Route path="/" exact render={(props) =>
              <Books books={this.state.books} {...props} />} />

            <Route path="/book/:title" render={(props) =>
              <Book {...props} books={this.state.books} getBooks={this.getBooks} />} />

            <Route path="/new" render={(props) =>
              <AddBook getBooks={this.getBooks} addBook={this.addBook} {...props} />} />

            <Route path="/edit/:id" render={(props) =>
              <EditBook {...props} getBooks={this.getBooks} books={this.state.books} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
