import React from 'react'
import BookCard from './BookCard'
import { books } from '../../Data/dataBooks'

function BookList({arr}) {
  return (
    <div>
      <div className='bookCase'>
        {arr.map((book,index,array)=> {
            return (
              <BookCard
                key= {index}
                book = {book}
                name = {book.name}
                authoer = {book.author}
                category = {book.category}
                isBorrowed = {book.isBorrowed}
              />
            )
        })}
      </div>
    </div>
  )
}

export default BookList
