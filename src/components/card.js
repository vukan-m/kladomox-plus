import * as React from 'react'
import '../css/main.css'


const Card = ({boxNumber}) => {
    return (
        <div className={boxNumber}>
            <div className="box-overlay">
                <div>
                    <h3>Udobnost</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                </div>
            </div>
        </div>
    )
}

export default Card

// Ubaciti query graphql mdx