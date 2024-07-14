import React, {useState} from 'react'
import Header from '../Components/Header'
import { users } from '../Data/dataUser'
import { books } from '../Data/dataBooks';
import '../Css/Register.css'

function sortAlphabetically ()  {
  books.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
          return -1;
      }
      if (nameA > nameB) {
          return 1;
      }
      return 0;
  });
};

function Register() {

  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const [bookId, setbookId] = useState('');
  const [bookName, setBookName] = useState('');
  const [bookCategory, setbookCategory] = useState('');
  const [bookAuthor, setbookAuthor] = useState('');
  const [bookDescription, setbookDescription] = useState('');
  const [bookBorrowed, setBookBorrowed] = useState('');
  


  function addUser(id, name) {
    if(id == "" || name == "") {
      window.alert("Fill the empty fields")
      console.log("Fill the empty fields");
    } else {
    const newUser = { "id": id, "name": name, borrowed: {}}
    console.log(id + " " + name)
    const existId = users.find(user => user.id == id);
    if(existId) {
      console.log("Id: " + id + " ,is already in use!");
      return;
    }
    users.push(newUser)
    console.log("user:" + name + " added")
    console.log();
  }
  }
 /*---------------------------------------*/ 
  function addBook(bookId, bookName, bookCategory, bookAuthor, bookDesc,bookBorrowed) {
    if(bookId == "" || bookName == "" || bookCategory == "" || bookAuthor == "" || bookDesc == "" || bookBorrowed == "") {
      window.alert("Fill the empty fields")
      console.log("Fill the empty fields");
    } else {
      if(bookBorrowed == "yes" || bookBorrowed == "Yes" || bookBorrowed == "Y") {
        bookBorrowed = true;
      } else if(bookBorrowed == "no" || bookBorrowed == "No" || bookBorrowed == "N") {
        bookBorrowed = false;
      } else {
        window.alert("Book borrowed field invalid")
      }
    const newBook = { "id": bookId, "name": bookName, "category": bookCategory, "author": bookAuthor, "description": bookDesc, "isBorrowed": bookBorrowed}
    console.log(bookId + " " + bookName)
    const existId = books.find(book => book.id == bookId);
    if(existId) {
      console.log("Id: " + id + " ,is already in use!");
      return;
    }
    books.push(newBook)
    sortAlphabetically();
    console.log("Book:" + bookName + " added")
    console.log();
  }
  }


  return (
    <div>
      <Header/>
      <h1>Register Book/User</h1> <hr />
      <br /><br /><br />
      <div className='userRegister'>
         <h2>Add User:</h2> <br />
         <label htmlFor="">Insert ID</label> <br />
         <input type="text" placeholder='id' value={id} onChange={(e) => setId(e.target.value)} /> <br />
         <label htmlFor="">Insert Name</label> <br />
         <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} /> <br />
         <button onClick={() => addUser(id, name)}>Add User</button>
      </div>

       <br /><br /><br />
       <div className='bookRegister'>
         <h2>Add Book:</h2> <br />
         <label htmlFor="">Insert ID</label> <br />
         <input type="text" placeholder='Book ID' value={bookId} onChange={(e) => setbookId(e.target.value)} /> <br />
         <label htmlFor="">Insert Title</label> <br />
         <input type="text" placeholder='Book title' value={bookName} onChange={(e) => setBookName(e.target.value)} /> <br />
         <label htmlFor="">Insert Category</label> <br />
         <input type="text" placeholder='name' value={bookCategory} onChange={(e) => setbookCategory(e.target.value)} /> <br />
         <label htmlFor="">Insert Author</label> <br />
         <input type="text" placeholder='name' value={bookAuthor} onChange={(e) => setbookAuthor(e.target.value)} /> <br />
         <label htmlFor="">Insert Description</label> <br />
         <input type="text"  placeholder='name' value={bookDescription} onChange={(e) => setbookDescription(e.target.value)} /> <br />
         <label htmlFor="">Insert  if Borrowed - type yes or no:</label> <br />
         <input type="text" placeholder='name' value={bookBorrowed} onChange={(e) => setBookBorrowed(e.target.value)} /> <br /><br />
         <button onClick={() => addBook(bookId, bookName, bookCategory, bookAuthor, bookDescription,bookBorrowed)}>Add Book</button>
       </div>
      

    </div>
  )
}

export default Register
