import React from 'react'
import { books } from '../Data/dataBooks'
import { users } from '../Data/dataUser'

export function seatchBooksDisplay(arr) {

    function SearchBookList(arr) {
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

  return (
    <div>
      
    </div>
  )
}

export function x() {
    
}

