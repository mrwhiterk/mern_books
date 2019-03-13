import React, { Component } from 'react'
import './EditBook.css'
import axios from 'axios';
import serverUrl from '../constants';

export default class EditBook extends Component {
  constructor(props) {
    super(props);

    this.item = this.props.books.find(book => book._id === this.props.match.params.id) || {}
    this.state = {
      title: this.item.title || "",
      Author: this.item.Author || "",
      text: this.item.text || ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  updateBooks() {
    axios.put(serverUrl + '/api/books/' + this.item._id, this.state)
      .then(function (response) {
        console.log(response.data);
      }).finally(() => {
        this.props.getBooks()
      })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.updateBooks()
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
            <input type="text" name="Author" onChange={this.handleChange} value={this.state.Author} />
          </label>
        </p>
        <p>
          <label>
            Excerpt<br />
            <textarea cols="130" rows="25" type="text" name="text" value={this.state.text} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    )
  }
}
