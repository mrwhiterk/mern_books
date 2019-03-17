import React, { Component } from 'react'
import "./Books.css";
import { Link } from "react-router-dom";

class Books extends Component {
  render() {
    return (
      <div className="row">
        {this.props.books.map((item, i) =>
          <div key={i} className="container col-5 offset-1">
            <Link to={"/book/" + item.title}>
              <h3>{item.title}</h3>
              <p>{item.author}</p>
            </Link>
          </div>
        )}
      </div>
    )
  }
}

export default Books;
