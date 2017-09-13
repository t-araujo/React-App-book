import React, { Component } from 'react';
import { connect } from 'react-redux'; // a cola entre React e o Redux
import { selectedBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component { 

 renderList() {
  return this.props.books.map( book => {
   return (
     <li 
        onClick={ () => this.props.selectedBook(book) } 
        key={book.title} 
        className="list-group-item"> 
        {book.title} 
     </li> 
    );
  });
 };
 //container is one component that have direct access to the state created by redux 
 
 render() {
    return (
      <div>
      <ul className="list-group col-sm-4">
        {this.renderList()}
        </ul>
      </div>
    );
 }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch){
  // whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectedBook }, dispatch);
}

// Promote bookList from a component to a container - it needs to know
// about this new dispactch method, selectedBook. Make it avaiable
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);