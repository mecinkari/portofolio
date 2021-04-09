import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <NavLink to="/" activeClassName="active" className="navbar-link" exact>Home</NavLink>
                <NavLink to="/blog" activeClassName="active" className="navbar-link">Blog</NavLink>
            </div>
        </nav>
    )
}

export default Navbar