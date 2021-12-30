import * as React from 'react'
import Layout from '../components/layout'
import Box from '../components/box'
import Card from '../components/card'
import Form from '../components/form'
import '../css/main.css'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div className="banner">
        <div className="image">
        </div>
      </div>
      <Box bgColor="lightBg">
        <div className="main">
          <div>
            <h2>Kladomox Plus <br /> Kelebija Subotica</h2>
            <p><strong>Kladomox Plus</strong> dom za stare je specijalizovan dom za smeštaj i negu odraslih i starijih lica. Nalazi se u mirnom naselju Kelebija na 10 min vožnje od centra Grada Subotica. Dom je okružen zelenilom i livadama i u blizini je Kelebijske šume.<br /><br />
            U domu <strong>Kladomox Plus</strong> sve je osmišljeno u cilju pružanja visoko kvalitetnih usluga kako bi se naši korisnici osećali sigurno, komforno i zbrinjeno, počev od nege, higijene i ishrane pa do medicinskih usluga, terapije i društvenog života. Za rekreaciju i organizovane izlete korisnici doma mogu da koriste usluge vožnje u fijaker po prelepoj prirodi i Kelebijskoj šumi koja se nalazi u neposrednoj blizini doma.  </p>
          </div>

          <div>
            <img src="../images/black-white.jpg" alt="Black and White" />
          </div>
        </div>
      </Box>
      <Box bgColor="darkBg">
        <div className="box">
          <h2 className="big padding">Pružamo Vam</h2>
          <div className="boxes">
            <Card boxNumber="first-box" />
            <Card boxNumber="second-box" />
            <Card boxNumber="third-box" />
          </div>
        </div>
      </Box>
      <Box bgColor="lightBg">
        <div className="footer">
          <Form />
          <div>
            <img src="../images/footer.jpg" alt="Footer" />
          </div>
        </div>
      </Box>
    </Layout>
  )
}

export default IndexPage
