import * as React from 'react'
import '../css/main.css'


const Card = ({ imageSrc, children }) => {
    return (
        <div>
            <figure>
                <img src={imageSrc} alt="Card Image" />
                <figcaption>
                    {children}
                </figcaption>
            </figure>
        </div>
    )
}

export default Card;

// Ubaciti query graphql mdx