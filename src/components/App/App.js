import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './App.css';

import Books from '../Books/Books';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [{ title: 'blah' }, { title: 'que' }]
    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">
            <h1>Welcome to my Library</h1>
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
