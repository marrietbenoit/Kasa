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

    </Collapse>

    <Collapse title="Respect">
     
    </Collapse>

    <Collapse title="Service">
      
    </Collapse>

    <Collapse title="Sécurité">
      
    </Collapse>
    </div>
        </main>
    )
}
export default About