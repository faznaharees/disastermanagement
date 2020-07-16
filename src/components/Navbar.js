import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  
        return(
          
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="#">CDMC</Link>
  <span class="navbar-toggler-icon mobile" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"></span>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
      <Link class="nav-item nav-link" to="/updates">Updates</Link>
      <Link class="nav-item nav-link" to="/contact">Contact</Link>
      <Link class="nav-item nav-link" to="/register">Register</Link>
      <Link class="nav-item nav-link" to="/login">Login</Link>
    </div>
  </div>
</nav>
        )
    
    
}

export default Navbar;