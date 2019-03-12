import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './App.css';

import Books from '../Books/Books';
import Book from '../Book/Book';
import axios from 'axios'
import AddBook from '../AddBook/AddBook';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
    this.addBook = this.addBook.bind(this)
  }

  addBook(newBook) {
    this.setState({
      books: [...this.state.books, newBook]
    })
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/books')
      .then((res) => {
        this.setState({
          books: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
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
          <Switch>
            <Route path="/" exact render={() => <Books books={this.state.books} />} />
            <Route path="/book/:title" render={(props) => <Book {...props} books={this.state.books} />} />
            <Route path="/new" render={(props) => <AddBook addBook={this.addBook} {...props} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
