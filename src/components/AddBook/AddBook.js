import React, { Component } from 'react'
import './AddBook.css'
import axios from 'axios';
import serverUrl from '../constants';

export default class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
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

  handleSubmit(event) {
    this.props.addBook(this.state);
    console.log(this.state.Author)

    axios.post(serverUrl + '/api/books', {
      title: this.state.title,
      author: this.state.author,
      text: this.state.text
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }).finally(_ => this.props.getBooks())


    event.preventDefault();
    this.props.history.push("/")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={this.handleChange} className="form-control" value={this.state.title} />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" className="form-control" name="author" onChange={this.handleChange} value={this.state.author} />

        </div>
        <div className="form-group">
          <label htmlFor="text">Excerpt</label>
          <textarea rows="5" cols="4" className="form-control rounded-0" type="text" name="text" value={this.state.text} onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}
