import * as React from 'react'
import '../css/main.css'
import { Link } from 'gatsby'
import logo from '../images/logo.png'

const Links = () => {
    return (
        <ul className="nav-links">
            <li className="nav-link-item">
                <Link to="/" className="nav-link-text">
                    <img src={logo} alt="Site logo" height="120px" width="130px" />
                </Link></li>
            <li className="nav-link-item"><Link to="/about" className="nav-link-text">O Nama</Link></li>
            <li className="nav-link-item"><Link to="/gallery" className="nav-link-text">Galerija</Link></li>
            <li className="nav-link-item"><Link to="/contact" className="nav-link-text">Kontakt</Link></li>
        </ul>
    )
}

export default Links;