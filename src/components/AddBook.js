import React from 'react';
import BookForm from './BookForm';
import { useNavigate } from 'react-router-dom';

const AddBook = ({books }) => {
  let navigate  = useNavigate();
  const handleOnSubmit = (book) => {
    navigate('/');
  };

  return (
    <React.Fragment>
      <BookForm fromEdit={false} handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;