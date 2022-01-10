import * as React from 'react'
import { Link } from 'gatsby'
import '../css/main.css'
import {useState} from 'react'

const MobileNavBar = () => {

    const [content, showContent] = useState(false)
    const toggleContent = () => {
        showContent(!content)
    }

    return (
        <div class="dropdown">
            <button onClick={toggleContent} className={content ? "dropbtn-true" : "dropbtn"}>Dropdown</button>
            <div className={content ? "dropdown-content-true" : "dropdown-content"}>
                <Link to="/">Početna</Link>
                <Link to="/about">O Nama</Link>
                <Link to="/gallery">Galerija</Link>
                <Link to="/contact">Kontakt</Link>
            </div>
        </div>
    )
}

export default MobileNavBar