import * as React from 'react'
import Layout from '../components/layout'
import Box from '../components/box'
import Card from '../components/card'
import '../css/main.css'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div className="banner">
        <div className="image">
        </div>
      </div>
      <Box bgColor="darkBg">
        <h1>Hello there</h1>
        <p>This is my box layout.</p>
      </Box>
      <div className="main">
        <div>
          <h2 className="big">Kladomox Plus <br /> Kelebija Subotica</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ut laudantium in incidunt, qui error repellat fugit quidem officia? Illo ullam mollitia voluptate quam quibusdam. Suscipit nihil dolore quaerat. Temporibus.<br /><br />
            Quos iusto amet cum in ea expedita saepe autem quidem. Harum, fuga! Neque voluptatem fugit soluta deserunt repudiandae sunt dolore, eligendi culpa tempore. Quod voluptates perferendis voluptate debitis non facilis.<br /><br />
            Quae quos nisi laborum cumque autem voluptatum, quibusdam magnam fugiat libero optio, iste exercitationem minus ipsa veritatis sunt porro, praesentium blanditiis recusandae fuga iure temporibus. Nesciunt ullam sed distinctio cum.</p>
        </div>

        <div>
          <img src="../images/black-white.jpg" alt="Black and White" />
        </div>
      </div>

      <div className="box">
        <h2 className="big">Pruzamo Vam</h2>
        <div className="boxes">
          <Card boxNumber="first-box" />
          <Card boxNumber="second-box" />
          <Card boxNumber="third-box" />
        </div>
      </div>

      <div className="footer">
        <div>
          <h2>Zakazite razgovor sa nama</h2>
          <input type="text" placeholder="Ime" name="name" id="name" />
          <input type="mail" placeholder="E-mail" name="mail" id="mail" />
          <input type="text" placeholder="Broj telefona" name="number" id="number" />
          <textarea name="message" id="message" cols="30" rows="5" placeholder="Poruka"></textarea>
          <input type="submit" />
        </div>
        <div>
          <img src="../images/footer.jpg" alt="Footer" />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
