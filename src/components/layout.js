import * as React from 'react'
import '../css/main.css'
import NavBar from './nav-bar'
import MobileNavBar from './mobile-nav-bar'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className="container">
            <title>{pageTitle} | Kladomox Plus</title>
            <NavBar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout