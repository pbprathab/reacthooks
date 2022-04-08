import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddBook from './components/AddBook';
import BooksList from './components/BooksList';
import EditBook from './components/EditBook';

import './components/Books.css';
import { useSelector } from 'react-redux';


const AppRouter = () => {
  const books = useSelector((state)=>state.formData);

  console.log('stateValues',books)
  const [booksarr] = (books && books.length >0)?books:[]

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes >
            <Route element={<BooksList books={books} />} path="/" exact={true} />
            <Route element={
              <AddBook books={books} />
            } path="/add" />
            <Route
             element={
                <EditBook books={books} />
              }
              path="/edit/:id"
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;