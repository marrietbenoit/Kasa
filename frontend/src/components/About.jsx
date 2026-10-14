import Banner from './Banner'
import Collapse from './Collapse'
import '../styles/About.css'


function About() {
    return (
        <main className='about'>
               <Banner image="/src/assets/aboutBanner.svg">
</Banner>
            <h1>A propos</h1>

            <div className="about__collapses">
    <Collapse title="Fiabilité">
      Les annonces proposées par Kasa sont fiables et vérifiées.
    </Collapse>

    <Collapse title="Respect">
      La bienveillance est au cœur des valeurs de Kasa.
    </Collapse>

    <Collapse title="Service">
      Kasa vous accompagne tout au long de votre séjour.
    </Collapse>

    <Collapse title="Sécurité">
      La sécurité de nos voyageurs et de nos hôtes est une priorité.
    </Collapse>
    </div>
        </main>
    )
}
export default About