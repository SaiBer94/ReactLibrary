import React from 'react'
import Title from '../Title'
import Paragraph from '../Paragraph'
import Button from '../Button'

function BookCard(props) {

  return (
      <div className='bookCard'>
        <h5>{"Book id: " + props.book.id}</h5>
        <Title text={props.book.name}/> <br />
        <h2> {props.book.author}</h2><br />
        <h4> {props.book.isBorrowed?"Borrowed":"Avilable"} </h4> <br />
        <Paragraph text={props.book.category} /> <br />
        <h3>{props.book.description}</h3><br /><br />
      </div>
  )
}

export default BookCard
