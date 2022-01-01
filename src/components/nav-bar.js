import * as React from 'react'
import '../css/main.css'
import NavLink from '../components/link'
import logo from '../images/logo.png'


const NavBar = () => {
    return (
        <nav>
            <ul className="nav-links">
                <NavLink link="/">
                    <img src={logo} alt="Site logo" height="120px" width="130px" />
                </NavLink>
                <NavLink link="/about">
                    O Nama
                </NavLink>
                <NavLink link="/gallery">
                    Galerija
                </NavLink>
                <NavLink link="/contact">
                    Kontakt
                </NavLink>
            </ul>
        </nav>
    )
}

export default NavBar
