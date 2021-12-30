import * as React from 'react'
import Layout from '../components/layout'
import Box from '../components/box'
import '../css/main.css'
import Hours from '../components/hours'
import Info from '../components/info'


const ContactPage = () => {
  return (
    <Layout pageTitle="Contact">
      <Box bgColor="lightBg">
        <div class="contact">
          <Info />
          <Hours />
        </div>
      </Box>
    </Layout>
  )
}

export default ContactPage
