import * as React from 'react'
import Layout from '../components/layout'
import Box from '../components/box'
import '../css/main.css'
import { StaticImage } from 'gatsby-plugin-image'


const AboutPage = () => {
  return (
    <Layout pageTitle="O Nama">
      <Box bgColor="lightBg">
        <div className="about-page">
          <h2 className="padding">O Nama</h2>
          <div className="mobile">
            <StaticImage src="../images/gallery/slika1.jpg" alt="" />
          </div>
          <p className="about">Dom <span>Kladomox Plus</span> nudi smeštaj i vrhunsku negu i usluge za svoje korisnika. Dom raspolaže dvokrevetnim i trokrevetnim sobama koje su opremljene centralnim grejanjem i klima uređajima. Sve je usmereno ka maksimalnom komforu pa se tako unutar doma nalazi i zajedničke prostorije za odmor i druženje, kao i prelepo uređeno i ograđeno dvorište oplemenjeno cvećem, zelenilom i travnatim površinama namenjenim šetnji, odmoru i relaksaciji sa prirodnom hladovinom.</p>
          <p className="about">O našim korisnicima brine stručno osoblje koje čine stalno prisutni medicinski tehničari, negovatelji kao i socijalni radnik. Lekarska vizita se obavlja jednom nedeljno. Lekove kao i ostale potrepštine, nabavlja glavna sestra uz saglasnost lekara. Praćenje vitalnih funkcija, raspoloženje i psihicko stanje kao i terapiju, a pogotovo higijenu i negu korisnika osoblje doma vrši svakog dana.</p>
          <p className="about">Po potrebi i po pozivu, lekar opšte prakse i interne medicine, fizioterapeut, mogu dođi svakog dana u dom, a dom poseduje i sanitetsko vozilo za potrebe svojih korisnika, kako bi u svakom momentu korisnici doma mogli biti preveženi do Doma Zdravlja Subotica, Opšte Bolnice u Subotici ili do neke druge medicinske ustanove u R. Srbiji ili inostranstvu.</p>
          <p className="about">U kuhinji se svakodnevno pripremaju 3 obroka i 2 užine kao i poseban jelovnik za ishranu korisnika čije zdravstveno stanje to zahteva.</p>
          <p className="about">Tu smo da pružimo toplinu, brigu i negu kao kod kuće, a sve u lepo uređenom ambijentu uz prijatno društvo i na pravi način.</p>
          <p className="about"><span>Dobro došli u <span className="emphasis">Kladomox Plus</span> ustanovu za smeštaj starih lica.</span></p>
          <div className="desktop">
            <StaticImage src="../images/gallery/slika1.jpg" alt="" />
          </div>
        </div>
      </Box>
    </Layout>
  )
}

export default AboutPage
