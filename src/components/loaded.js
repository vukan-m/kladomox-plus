import React from 'react'
import { ImageGroup, Image } from 'react-fullscreen-image'
import useFetch from '../components/fetch'

const Loaded = () => {

    const fetchData = useFetch("http://localhost:1337/api/upload/files/");
    console.log(fetchData);


    return (
    <div className="gallery-page">
        <h2 className="padding">Galerija</h2>
        <ImageGroup>
        <ul className="images">
            {fetchData.map(i => (
            <li key={i?.id}>
                <Image
                src={"http://localhost:1337" + i?.formats?.large?.url}
                alt={i?.alternativeText}
                />
            </li>
            ))}
        </ul>
        </ImageGroup>
    </div>
    )
}

export default Loaded;