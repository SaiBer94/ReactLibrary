import React, { useState } from 'react'
import Header from '../Components/Header'
import { users } from '../Data/dataUser'
import { books } from '../Data/dataBooks';
import '../Css/Delete.css'

function DeleteUser() {

    const  [id, setId] = useState();
    const  [bookId, setBookId] = useState();

    function deleteUser(id) { /*second condition needs to be checked!!*/ 
        const indexUser = users.findIndex(user => user.id === id)
        if(indexUser !== -1) {
          if(users[indexUser].borrowed[0] == null) {
            console.log("User id: " + id + ",name: " + users[indexUser].name  + "  deleted");
            users.splice(indexUser,1)
        } else {
          window.alert("A user that currently borrowing a book can not be deleted")
        }
      } else {
        window.alert("User not found")
      }
    }

    function deleteBook(bookId) {
      const indexBook = books.findIndex(book => book.id === bookId)
      if(indexBook !== -1) {
        if(books[indexBook].isBorrowed == true){
          window.alert("Borrowed book can not be deleted")
        }else {
          console.log("User id: " + bookId + " deleted");
          window.alert("Book: " + books[indexBook].name + " deleted")
          books.splice(indexBook,1)
      }
    } else {
      window.alert("Book not found");
    }
  }

  return (
    <div>
        <Header />
        <h1>Delete User</h1>
        <hr /><br /><br /><br />

        <div className='userDelContainer'>
          <h2>Delete User</h2> <br />
          <label htmlFor="">Insert user ID to delete:</label> <br /> <br />
          <input type="text" placeholder='User ID' value={id} onChange={(e) => setId(e.target.value)} /> <br />
           <button onClick={ () => deleteUser(id)}>Delete</button>
         </div>

         <br />

         <div className='bookDelContainer'>
          <h2>Delete Book</h2> <br />
          <label htmlFor="">Insert user ID to delete:</label> <br /> <br />
          <input type="text" placeholder='Book ID' value={bookId} onChange={(e) => setBookId(e.target.value)} /> <br />
           <button onClick={() => deleteBook(bookId)}>Delete</button>
         </div>
        
    </div>
  )
}
export default DeleteUser
