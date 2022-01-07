import * as React from 'react'
import '../css/main.css'


const Card = ({boxNumber, children}) => {
    return (
        <div className={boxNumber}>
            <div className="box-overlay">
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Card

// Ubaciti query graphql mdx