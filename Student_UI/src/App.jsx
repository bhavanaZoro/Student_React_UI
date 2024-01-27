import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Nav from './components/Navbar/Nav'
import Login from './components/Navbar/Login'
import Register from './components/Navbar/Register'
import Home from './components/Navbar/Home'
import { ToastContainer,toast} from 'react-toastify'
import AddStudent from './components/AddStudent'
import Dashboard from './components/student/Dashboard'

const App = () => {
  return (
    <div>
    <Router>
      <ToastContainer/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/StudentAside" element={<AddStudent/>}/>
      </Routes>
    </Router>


    </div>
  )
}

export default App
