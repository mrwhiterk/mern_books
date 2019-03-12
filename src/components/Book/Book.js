import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    let book = this.props.books.find(book => book.title === this.props.match.params.title) || []
    return (
      <div className="book-card">
        <h3>Title</h3>
        <p>{book.title}</p>
        <h3>Author</h3>
        <p>{book.Author}</p>
        <h3>Excerpt</h3>
        <p>{book.text}</p>
      </div>
    )
  }
}

export default Book;