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
        // console.log(response.data);
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
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" className="form-control" onChange={this.handleChange} value={this.state.title} />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" name="author" className="form-control" onChange={this.handleChange} value={this.state.author} />
        </div>
        <div className="form-group">
          <label htmlFor="text">Excerpt</label>
          <textarea rows="5" type="text" className="form-control" name="text" value={this.state.text} onChange={this.handleChange} />
        </div>
        <input type="submit" className="btn btn-success" value="Submit" />
      </form>
    )
  }
}
