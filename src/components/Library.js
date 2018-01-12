import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Library extends Component {

  // Helper method to filter bookshelf
  filterShelf = (status) => {
    if (this.props.books != null) {
      const shelfBooks = this.props.books.filter(book => book.shelf === status)
      return shelfBooks
    }
  }


  // Passing a handler to change the parent state to each of them, and filtering
  // the result to be shown in every shelf.
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            <BookShelf handler={this.props.handler} title="Currently reading" books={this.filterShelf("currentlyReading")} />
            <BookShelf handler={this.props.handler} title="Want to read" books={this.filterShelf("wantToRead")} />
            <BookShelf handler={this.props.handler} title="Read" books={this.filterShelf("read")} />
          </div>
        </div>
        <Link className="open-search" to="/search">Add a book</Link>
      </div>
    )
  }
}

Library.propTypes = {
  books: PropTypes.array.isRequired
}

export default Library
