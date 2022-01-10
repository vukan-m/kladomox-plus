import * as React from 'react'
import {Link} from 'gatsby'
import Drop from './drop.js'
import '../css/main.css'

const MobileNavBar = () => {
    return (
        <div class="dropdown">
            <button onClick={Drop} id="btn" class="dropbtn">Dropdown</button>
            <div id="content" class="dropdown-content">
                <Link to="/">Početna</Link>
                <Link to="/about">O Nama</Link>
                <Link to="/gallery">Galerija</Link>
                <Link to="/contact">Kontakt</Link>
            </div>
        </div>
    )
}

export default MobileNavBar