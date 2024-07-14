import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { books } from '../Data/dataBooks';
import '../Css/Home.css';

function Home() {
  const [bookId, setBookId] = useState('');
  const [bookName, setBookName] = useState("Book's information");
  const [bookCategory, setBookCategory] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    console.log(filteredBooks);
  }, [filteredBooks]);

  function searchBooks(searchString) {
    const filter = books.filter(book =>
      book.name.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredBooks(filter);
  }

  function bookIdSearch(bookValue) {
    const indexBook = books.findIndex(book => book.id === bookValue);
    if (indexBook !== -1) {
      setBookName(books[indexBook].name);
      setBookAuthor(books[indexBook].author);
      setBookCategory(books[indexBook].category);
      setBookDescription(books[indexBook].description);
    } else {
      setBookName("Book not Found!");
      setBookAuthor('');
      setBookCategory('');
      setBookDescription('');
    }
  }

  return (
    <div>
      <Header />
      <br /><br /><hr /><br />
      <h1>Home page</h1><br /><hr /><br />
      <div className='searchBookContainer'>
        <h2>Search book:</h2> <br /><br />
        <input
          type="text"
          value={bookId}
          placeholder='Book name or ID'
          onChange={(e) => setBookId(e.target.value)}
        /> <br /><br />
        <button onClick={() => searchBooks(bookId)}>Search by name</button> <br /><br />
        <button onClick={() => bookIdSearch(bookId)}>Search by ID</button>
      </div>
      <br /><br />
      <div className='bookResultDisplay'>
        <h1>ID search result:</h1>
        <h1 className='bookTitle'>{bookName}</h1><br />
        <h3>{bookAuthor}</h3><br />
        <h2>{bookCategory}</h2><br />
        <p>{bookDescription}</p>
      </div>
      <div className='searchedBooks'>
        {filteredBooks.map((book) => (
          <div className='bookCard' key={book.id}>
            <div className='bookCardContent'>
              <h2 className='bookCardTitle'>{book.name}</h2>
              <h3 className='bookCardAuthor'>{book.author}</h3>
              <h4 className='bookCardCategory'>{book.category}</h4>
              <p className='bookCardDescription'>{book.description}</p>
              <h6 className='bookCardTitle'>id: {book.id}</h6>
            </div>
          </div>
        ))}
      </div>
      <br /><button onClick={() => setFilteredBooks(books)}>Reset List</button><br />
    </div>
  );
}

export default Home;
