import logements from '../data/logements.json'
import Banner from '../components/Banner'
import Card from '../components/Card'

function Home() {
  return (
    <main>
      {/* Display the banner with its title */}
      <Banner image="/src/assets/banner.svg">
        <h1 className="banner__title">
          Chez vous, partout et ailleurs
        </h1>
      </Banner>

      <ul className="cards">
        {/* Display a card for each logement in the JSON file */}
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