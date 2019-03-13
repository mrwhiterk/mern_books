import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Book.css';
import serverUrl from '../constants';


class Book extends Component {
  constructor(props) {
    super(props)

    this.book = this.props.books.find(book => book.title === this.props.match.params.title) || []
    this.state = { id: this.book.id }

    this.delete = this.delete.bind(this)

  }

  delete() {
    axios.delete(serverUrl + '/api/books/' + this.book._id)
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
        <p>{this.book.author}</p>
        <h3>Excerpt</h3>
        <p>{this.book.text}</p>
        <div>
          <button onClick={this.delete}>Delete</button>
          <Link to={"/edit/" + this.book._id}><button>Edit</button></Link>

        </div>
      </div>
    )
  }
}

export default Book;