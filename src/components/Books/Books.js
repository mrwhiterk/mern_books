import React, { Component } from 'react'
import "./Books.css";
import { Link } from "react-router-dom";

class Books extends Component {
  render() {
    return (
      <div>
        {this.props.books.map(item =>
          <div>
            <Link to={"/book/" + item.title}>{item.title}</Link>
          </div>
        )}
      </div>
    )
  }
}

export default Books;
