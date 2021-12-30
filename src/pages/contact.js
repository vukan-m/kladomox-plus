import * as React from 'react'
import Layout from '../components/layout'
import Box from '../components/box'
import '../css/main.css'
import Hours from '../components/hours'
import Info from '../components/info'


const ContactPage = () => {
  return (
    <Layout pageTitle="Kontakt">
      <Box bgColor="lightBg">
        <h2 className="padding">Kontakt</h2>
        <div class="contact">
          <Info />
          <Hours />
        </div>
        {/* Google Mapa */}
      </Box>
    </Layout>
  )
}

export default ContactPage
