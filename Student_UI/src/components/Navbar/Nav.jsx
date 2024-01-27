import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <>
      <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
        <img src="https://i.pinimg.com/originals/54/26/4a/54264a84e2f96cb7a5c32efa99b4714d.jpg" alt="logo" /></div>
        <div className="menu_block">
        <Link to={"/"}>Home</Link>
        <Link to={"/register"}>Register</Link>
       <Link to={"/login"}>Login</Link>
      <Link to={"/dashboard"}>Dashboard</Link>


        </div>

      </div>
    </nav>

    </>
  )
}

export default Nav
