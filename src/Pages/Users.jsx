import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import UserList from "../Components/UserDisplay/UserList";
import { users } from "../Data/dataUser";
import Title from "../Components/Title";
import '../Css/Users.css'

function Users() {
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState("User");
  const [userBorrowed, setBorrowed] = useState();

  const [filteredUsers, setFilteredUsers] = useState(users)

  function userIdSearch(userId) {
    const indexUser = users.findIndex((user) => user.id === userId);
    if (indexUser !== -1) {
      setUserName(users[indexUser].name);
      setBorrowed(users[indexUser].borrowed);
    } else {
      setUserName("User not Found!");
    }
  }

    function searchUsers(searchString) {
        const filter = (users.filter(user=>user.name.toLowerCase().includes(searchString.toLowerCase())))
        setFilteredUsers(filter)
    }
    
    useEffect(()=> {console.log(filteredUsers)}) , [filteredUsers]

  return (
    <div>
      <Header />
      <div>
        <br />
        <hr />
        <br />
        <h2>Search user:</h2> <br />
        <hr />
        <br />
        <input
          type="text"
          value={userId}
          placeholder="User name or ID"
          onChange={(e) => setUserId(e.target.value)}
        />
        <br />
        <br />
        <button onClick={() => searchUsers(userId)}>Search by name</button>
        <br />
        <br />
        <button onClick={() => userIdSearch(userId)}>Search by ID</button>
      </div>
      <br /> <br />
      <div>
        <div className="userDisplay">
          <h1>ID search result:</h1> <br />
          <Title text={userName}></Title>
          <br />
          <h2>Books borrowed:</h2> <br />
          <p>{JSON.stringify(userBorrowed)}</p>
        </div>
        <br /><hr />
        <UserList arr={filteredUsers}/>
      </div>
    </div>
  );
}

export default Users;
