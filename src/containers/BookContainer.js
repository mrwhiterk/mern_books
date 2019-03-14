import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as BookActions from '../actions/BookActions'
import Library from '../components/Library.js'

class BookContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }


  render() {
    console.log(this.props.book)
    const BookItems = this.props.book.map((book, id) => {
      return (
        <li key={id}>
          {book}
        </li>
      )
    })
    return (
      <div>
        <Library addItem={this.props.actions.addToBooks} />
        <h2>Books</h2>
        <ol>
          {BookItems}
        </ol>
      </div>
    )
  }
}
// More information about the implementation pattern below can be found at the link below
// https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

// Subscribes the container component to any changes in Redux-managed state
// the state being mapped to props is the redux state
function mapStateToProps(state, ownProps) {
  return {
    book: state.book
  };
}

// When do you need access to props?
// If we had some kind of information in `props` that was pertinent to the state. In the example below, our `props` corresponds to `ownProps`. 
// user: state.users[ownProps.userId]


// Changes in our program will be reflected when new actions are dispatched
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BookActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)


