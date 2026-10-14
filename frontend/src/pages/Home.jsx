
import logements from '../data/logements.json'
import Banner from '../components/Banner'
import Card from '../components/Card'

function Home() {
  return (
    <main>
      <Banner image="/src/assets/banner.svg">
        <h1 className="banner__title">
          Chez vous, partout et ailleurs
        </h1>
      </Banner>

      <ul className="cards">
        {logements.map((logement) => (
          <li key={logement.id}>
            <Card logement={logement} />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
