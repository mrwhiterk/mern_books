import React, { Component } from 'react';
import axios from 'axios'
import './Book.css';

class Book extends Component {
  constructor(props) {
    super(props)

    this.book = this.props.books.find(book => book.title === this.props.match.params.title) || []
    this.state = { id: this.book.id }

    this.delete = this.delete.bind(this)

  }

  delete() {
    axios.delete('http://localhost:3001/api/books/' + this.book._id)
      .then((res) => {
        console.log(res.data)
        this.props.history.push('/')
      }).finally(() => {
        this.props.getBooks()
      })
  }



  render() {
    return (
      <div className="book-card">
        <h3>Title</h3>
        <p>{this.book.title}</p>
        <h3>Author</h3>
        <p>{this.book.Author}</p>
        <h3>Excerpt</h3>
        <p>{this.book.text}</p>
        <p>{this.book.id}</p>
        <button onClick={this.delete}>Delete</button>
      </div>
    )
  }
}

export default Book;