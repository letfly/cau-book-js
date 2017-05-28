const React = require('react');
const BookForm = require('./BookForm');
const BookTable = require('./BookTable');


let Book = React.createClass({
  getInitialState: () => ({
    books: []
  }),
  listBook: function() {
    $.ajax({
      type: 'get',
      url: '/list'
    }).done((resp) => {
      if (resp.status === 'success') {
        this.setState({ books: resp.books });
      }
    });
  },
  addBook: function(name, author) {
    $.ajax({
      type: 'post',
      url: '/add',
      data: { 'name': name, 'author': author }
    }).done((resp) => {
      if (resp.status === 'success') {
        this.listBook();
      }
    });
  },
  updateBook: function(id, status) {
    $.ajax({
      type: 'post',
      url: '/update',
      data: { 'id': id, 'status': status }
    }).done((resp) => {
      if (resp.status === 'success') {
        this.listBook();
      }
    });
  },
  deleteBook: function(id) {
    $.ajax({
      type: 'post',
      url: '/delete/' + id,
    }).done((resp) => {
      if (resp.status === 'success') {
        this.listBook();
      }
    });
  },
  componentDidMount: function() {
    this.listBook();
  },
  render: function() {
    return (
      <div>
        <BookForm addBook={this.addBook} />
        <BookTable books={this.state.books} updateBook={this.updateBook} deleteBook={this.deleteBook} />
      </div>
    );
  }
});


module.exports = Book;
