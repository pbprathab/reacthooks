import React from 'react';
import _ from 'lodash';
import Book from './Book';
import { useDispatch } from 'react-redux';
import { DeleteCardAction } from '../redux/redux';




const BooksList = ({ books }) => {
  const dispatch = useDispatch();
  const DeleteCard = (todo) => dispatch(DeleteCardAction(todo));
  console.log('updatedbooks', books)
  const handleRemoveBook = (id) => {
    DeleteCard({
      id: id
    })
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BooksList;