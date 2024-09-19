import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    
      <nav className='nav'>
        <ul>
            <li>
                <Link to ="/" id="link">Home</Link>
            </li>
            <li>
                <Link to ="/About" id="link">About</Link>
            </li>
            <li>
                <Link to ="/Features" id="link">Features</Link>
            </li>
        </ul>
      </nav>
      
    
  )
}

export default Navigation
