import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>Portfolio</Link></li>
                <li><Link>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
