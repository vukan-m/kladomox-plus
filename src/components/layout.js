import * as React from 'react'
import '../css/main.css'
import NavBar from './nav-bar'

const Layout = ({ pageTitle, navName, children }) => {
    return (
        <div className="container">
            <title>{pageTitle} | Kladomox Plus</title>
            <NavBar pageName={navName} />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout