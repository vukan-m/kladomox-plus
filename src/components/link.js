import * as React from 'react'
import '../css/main.css'
import { Link } from 'gatsby'

const NavLink = ({ link, children }) => {
    return (
        <li className="nav-link-item">
            <Link to={link} className="nav-link-text">
                {children}
            </Link>
        </li>
    )
}

export default NavLink