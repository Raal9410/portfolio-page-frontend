import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
function Navbar() {
    return (
        <div className="navbar">
            
          <ul>
              <li><Link to="/"><p>Home</p></Link></li>
              <li><Link to="/projects"><p>Projects</p></Link></li>
              <li><Link to="/contact"><p>Contact</p></Link></li>
              </ul>  
        </div>
    )
}

export default Navbar
