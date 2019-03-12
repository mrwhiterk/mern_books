import React, { Component } from 'react'
import './AddBook.css'
import axios from 'axios';

export default class EditBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      Author: "",
      text: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  getBooks() {
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

  handleSubmit(event) {
    // this.props.addBook(this.state);
    event.preventDefault();
    this.props.history.push("/")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            Title<br />
            <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
          </label>
        </p>
        <p>
          <label>
            Author<br />
            <input type="text" name="Author" onChange={this.handleChange} value={this.state.author} />
          </label>
        </p>
        <p>
          <label>
            Excerpt<br />
            <textarea cols="130" rows="40" type="text" name="text" value={this.state.text} onChange={this.handleChange} />
          </label>
        </p>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
