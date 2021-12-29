import * as React from 'react'
import '../css/main.css'

const Box = ({bgColor, children}) => {
    return (
        <div className={`border ${bgColor}`}>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Box