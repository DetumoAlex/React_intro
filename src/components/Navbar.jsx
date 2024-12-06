import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="./logo192.png" alt="" />
        </div>
        <div>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Products</a>
            <a href="">Contact</a>
        </div>

        <div>
            <button>Register</button>
            <button>Login</button>
        </div>
    </nav>
  )
}

export default Navbar