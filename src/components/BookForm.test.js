import {render,screen} from '@testing-library/react'
import user from '@testing-library/user-event';
import React from 'react';
import {BookForm} from './BookForm'


describe('BookForm',()=>{

    const onSubmit = jest.fn();
    
    beforeEach(()=>{
        onSubmit.mockClear();
        render(<BookForm onSubmit={onSubmit} />)
    });
    
    it('onsubmit is called when all fields pass validation',()=>{
        user.type(getBookname(),'Happy Days')
    })
})

function getBookname(){
    return screen.getByPlaceholderText('Enter name of book', {
        name: /book name/i
      })
}