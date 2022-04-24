import * as React from 'react'
import Layout from '../components/layout'
import Box from '../components/box'
import Loader from '../components/loader'
import '../css/main.css'


const GalleryPage = () => {

  return (
    <Layout pageTitle="Galerija" navName="nav-links">
      <Box>
        <Loader />
      </Box>
    </Layout>
  )
}

export default GalleryPage
