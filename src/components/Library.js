import React, { Component } from 'react'
import axios from 'axios'
import serverUrl from './constants'

class Library extends Component {
  constructor(props) {
    super(props)
    this.state = {
      libraryItems: []
    }
  }

  componentDidMount() {
    axios.get(serverUrl + '/api/books')
      .then((res) => {
        this.setState({
          libraryItems: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const libraryItems = this.state.libraryItems && this.state.libraryItems.map((item, id) => {
      return (
        <li key={id} onClick={() => this.props.addItem(item.title)}>
          {item.title}
        </li>
      )
    })
    return (
      <div>
        <h2>Library</h2>
        <ul>{libraryItems}</ul>
      </div>
    )
  }
}

export default Library
