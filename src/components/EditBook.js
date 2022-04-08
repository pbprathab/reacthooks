import React from 'react';
import BookForm from './BookForm';
import { useParams,useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { EditCardAction } from '../redux/redux';



const EditBook = ({ books }) => {

  const dispatch = useDispatch();
  const EditCard = (todo) => dispatch(EditCardAction(todo));

  const { id } = useParams();
  console.log('id',id)
  console.log('books',books)
  
  let navigate = useNavigate();
  const bookToEdit = books.find((book) => book.id === id);
  console.log('bookToEdit',bookToEdit)
  const handleOnSubmit = (book) => {
    
    
    navigate('/');
   
   
    
  };

  return (
    <div>
      <BookForm fromEdit={true} book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;