import * as React from 'react'
import Layout from '../components/layout'
// import { StaticImage } from 'gatsby-plugin-image'
import Box from '../components/box'
import '../css/main.css'


const GalleryPage = () => {
  return (
    <Layout pageTitle="Galerija">
      <Box bgColor="lightBg">
        <h2 className="padding">Galerija</h2>
        {/* <StaticImage src="" /><StaticImage src="" /><StaticImage src="" />
        <StaticImage src="" /><StaticImage src="" /><StaticImage src="" />
        <StaticImage src="" /><StaticImage src="" /><StaticImage src="" /> */}
      </Box>
    </Layout>
  )
}

export default GalleryPage
