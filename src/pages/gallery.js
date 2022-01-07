import * as React from 'react'
import Layout from '../components/layout'
import { ImageGroup, Image } from 'react-fullscreen-image'
import Box from '../components/box'
import '../css/main.css'
import Image1 from '../images/gallery/slika1.jpg'
import Image2 from '../images/gallery/slika2.jpg'
import Image3 from '../images/gallery/slika3.jpg'
import Image4 from '../images/gallery/slika4.jpg'
import Image5 from '../images/gallery/slika5.jpg'
import Image6 from '../images/gallery/slika6.jpg'
import Image7 from '../images/gallery/slika7.jpg'
import Image8 from '../images/gallery/slika8.jpg'
import Image9 from '../images/gallery/slika9.jpg'
import Image10 from '../images/gallery/slika10.jpg'
import Image11 from '../images/gallery/slika11.jpg'
import Image12 from '../images/gallery/slika12.jpg'

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12
]

const GalleryPage = () => {
  return (
    <Layout pageTitle="Galerija">
      <Box bgColor="lightBg">
        <h2 className="padding">Galerija</h2>
        <ImageGroup>
          <ul className="images">
            {images.map(i => (
              <li key={i}>
                <Image
                  src={i}
                  alt="Gallery picture"
                />
              </li>
            ))}
          </ul>
        </ImageGroup>
      </Box>
    </Layout>
  )
}

export default GalleryPage
