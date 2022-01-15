import * as React from 'react'
import '../css/main.css'
import NavLink from '../components/link'
import MobileNavBar from '../components/mobile-nav-bar'


const NavBar = ({pageName}) => {
    return (
        <nav>
            <ul className={pageName}>
                <NavLink link="/">
                    Početna
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
