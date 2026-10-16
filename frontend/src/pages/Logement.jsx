import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'
import Error from '../components/Error'
import '../styles/Logement.css'
import Slideshow from '../components/Slideshow'

function Logement() {
  // Get the logement ID from the URL
  const { id } = useParams()

  // Find the logement that matches the ID
  const logement = logements.find((item) => item.id === id)

  // Display the error page if the logement does not exist
  if (!logement) {
    return <Error />
  }

  return (
    <main className="logement">
      {/* Display the pictures of the selected logement */}
      <Slideshow pictures={logement.pictures} />

      <h1 className="logement__title">
        {logement.title}
      </h1>

      <p className="logement__location">
        {logement.location}
      </p>
    </main>
  )
}

export default Logement