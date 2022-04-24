import * as React from 'react'
import Layout from '../components/layout'
import Box from '../components/box'
import { ImageGroup, Image } from 'react-fullscreen-image'
import useFetch from '../components/fetch'
import '../css/main.css'


const GalleryPage = () => {

  const fetchData = useFetch("http://localhost:1337/api/upload/files/");

  return (
    <Layout pageTitle="Galerija" navName="nav-links">
      <Box>
        <div className="gallery-page">
          <h2 className="padding">Galerija</h2>
          <ImageGroup>
            <ul className="images">
              {fetchData.map(i => (
                <li key={i?.name}>
                  <Image
                    src={"http://localhost:1337" + i?.formats?.medium?.url}
                    alt={i?.alternativeText}
                  />
                </li>
              ))}
            </ul>
          </ImageGroup>
        </div>
      </Box>
    </Layout>
  )
}

export default GalleryPage;
