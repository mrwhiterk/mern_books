import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
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
      }).then(() => {
        this.props.getBooks()
        this.props.history.push('/')
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
        <button onClick={this.delete}>Delete</button>
        <Link to={"/edit/" + this.book._id}>Edit</Link>
      </div>
    )
  }
}

export default Book;