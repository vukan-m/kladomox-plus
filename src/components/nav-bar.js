import * as React from 'react'
import {
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'
import { Link } from 'gatsby'
import logo from '../images/logo.png'

const NavBar = () => {
    return (
        <nav>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link to="/" className={navLinkText}>
                        <img src={logo} alt="Site logo" height="120px" width="130px" />
                    </Link></li>
                <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                <li className={navLinkItem}><Link to="/gallery" className={navLinkText}>Gallery</Link></li>
                <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact</Link></li>
            </ul>
        </nav>

    )
}

export default NavBar

// ovako bi izgledao Layout onda
// import {NavBar} from './nav-bar'

// const Layout = ({ pageTitle, children }) => {
//     return (
//         <div className={container}>
//             <title>{pageTitle} | Kladomox Plus</title>
//             <NavBar></NavBar>
//             <main>
//                 {children}
//             </main>
//         </div>
//     )
// }