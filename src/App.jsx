import React from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './Pages/Register'
import Users from './Pages/Users'
import DeleteUser from './Pages/DeleteUser'
import Home from './Pages/Home'

function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/DeleteUser' element={<DeleteUser/>}/>
        <Route path='/*' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
