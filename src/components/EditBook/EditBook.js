import React, { Component } from 'react'
import './EditBook.css'
import axios from 'axios';
import serverUrl from '../constants';

export default class EditBook extends Component {
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

  componentDidMount() {
    axios.get(serverUrl + '/api/books/' + this.props.match.params.id)
      .then((res) => {
        this.setState({
          ...res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  updateBooks() {
    axios.put(serverUrl + '/api/books/' + this.state._id, this.state)
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
            <input type="text" name="author" onChange={this.handleChange} value={this.state.author} />
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
