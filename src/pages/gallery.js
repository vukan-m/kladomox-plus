import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Box from '../components/box'


const GalleryPage = () => {
  return (
    <Layout pageTitle="Gallery">
      <Box bgColor="lightBg">
        <StaticImage src="" /><StaticImage src="" /><StaticImage src="" />
        <StaticImage src="" /><StaticImage src="" /><StaticImage src="" />
        <StaticImage src="" /><StaticImage src="" /><StaticImage src="" />
      </Box>
    </Layout>
  )
}

export default GalleryPage
