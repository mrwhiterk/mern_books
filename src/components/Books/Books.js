import React, { Component } from 'react'
import "./Books.css";
import { Link } from "react-router-dom";

class Books extends Component {
  render() {
    return (
      <div>
        {this.props.books.map((item, i) =>
          <div key={i}>
            <Link to={"/book/" + item.title}>
              <h3>{item.title}</h3>
              {item.Author}
            </Link>
          </div>
        )}
      </div>
    )
  }
}

export default Books;
