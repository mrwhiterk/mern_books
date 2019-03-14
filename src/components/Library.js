import React, { Component } from 'react'

class Library extends Component {
  constructor(props) {
    super(props)
    this.state = {
      libraryItems: [
        'book 1',
        'book 2',
        'book 3'
      ]
    }
  }

  render() {
    const libraryItems = this.state.libraryItems.map((item, id) => {
      return (
        <li key={id}>
          {item}
          <button onClick={() => this.props.addItem(item)}>+</button>
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
