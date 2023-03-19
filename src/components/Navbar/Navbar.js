import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <h1>CR3AT3D 3D</h1>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><button>Ordenar mi modelo</button></li>
      </ul>
    </nav>
  )
}

export default Navbar