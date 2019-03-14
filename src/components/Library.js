import React, { Component } from 'react'
import axios from 'axios'
import serverUrl from './constants'

class Library extends Component {
  constructor(props) {
    super(props)
    this.state = {
      libraryItems: []
    }

    this.getAllBooks = this.getAllBooks.bind(this)
  }

  componentDidMount() {
    axios.get(serverUrl + '/api/books')
      .then((res) => {
        this.setState({
          libraryItems: res.data
        }, () => this.getAllBooks())
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getAllBooks() {
    this.state.libraryItems && this.state.libraryItems.map((item, id) =>
      this.props.addItem(item)
    )
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Library
