import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './App.css';

import Books from '../Books/Books';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/books')
      .then((res) => {
        console.log(res)
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
          <Link to="/books">View all books</Link>
        </nav>
        <main>
          <Switch>
            <Route path="/" exact render={() => <Books books={this.state.books} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
