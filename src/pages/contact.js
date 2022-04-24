import * as React from 'react'
import Layout from '../components/layout'
import Box from '../components/box'
import '../css/main.css'
import Hours from '../components/hours'
import Info from '../components/info'
import GoogleMap from '../components/map'


const ContactPage = () => {
  return (
    <Layout pageTitle="Kontakt" navName="nav-links">
      <Box>
        <div className="contact-page">
          <h2 className="padding">Kontakt</h2>
          <div className="contact">
            <Info />
            <Hours />
          </div>
          <GoogleMap googleMapsApiKey="AIzaSyD1KgGg10zoFsnqdhD4hbd6emecf-L680Q" />
        </div>
      </Box>
    </Layout>
  )
}

export default ContactPage
