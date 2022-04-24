import * as React from 'react'
import Layout from '../components/layout'
import Box from '../components/box'
import Card from '../components/card'
import Form from '../components/form'
import '../css/main.css'
import {StaticImage} from 'gatsby-plugin-image'
import Nature from '../images/nature.jpg'
import Peace from '../images/peace.jpg'
import Comfort from '../images/comfort.jpg'



const IndexPage = () => {
  return (
    <Layout pageTitle="Početna strana" navName="nav-links-home">
      <div className="banner">
        <div className="image">
        </div>
      </div>
      <Box>
        <div className="main">
          <div>
            <h2 className="no-padding">Kladomox Plus</h2>
            <h2>Kelebija Subotica</h2>
            <p><span>Kladomox Plus</span> dom za stare je specijalizovan dom za smeštaj i negu odraslih i starijih lica. Nalazi se u mirnom naselju Kelebija na 10 min vožnje od centra Grada Subotica. Dom je okružen zelenilom i livadama i u blizini je Kelebijske šume.</p>
            <p>U domu <span>Kladomox Plus</span> sve je osmišljeno u cilju pružanja visoko kvalitetnih usluga kako bi se naši korisnici osećali sigurno, komforno i zbrinjeno, počev od nege, higijene i ishrane pa do medicinskih usluga, terapije i društvenog života. Za rekreaciju i organizovane izlete korisnici doma mogu da koriste usluge vožnje u fijaker po prelepoj prirodi i Kelebijskoj šumi koja se nalazi u neposrednoj blizini doma.</p>
          </div>
          <div>
            <StaticImage src='../images/black-white.jpg' alt="Black and White" />
          </div>
        </div>
      </Box>
      <Box bgColor="darkBg">
        <div className="box">
          <h2 className="big padding">Pružamo Vam</h2>
          <div className="boxes">
            <Card imageSrc={Comfort}>
              <h3>Udobnost</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </Card>
            <Card imageSrc={Peace}>
              <h3>Mir i tišinu</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </Card>
            <Card imageSrc={Nature}>
              <h3>Prirodu</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </Card>
          </div>
        </div>
      </Box>
      <Box>
        <div className="footer">
          <Form />
        </div>
      </Box>
    </Layout>
  )
}

export default IndexPage;
