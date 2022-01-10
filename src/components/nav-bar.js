import * as React from 'react'
import '../css/main.css'
import NavLink from '../components/link'
import logo from '../images/logo.png'
import MobileNavBar from '../components/mobile-nav-bar'


const NavBar = () => {
    return (
        <nav>
            <ul className="nav-links">
                <NavLink link="/">
                    <img src={logo} alt="Site logo" />
                </NavLink>
                <MobileNavBar />
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
