import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'
import Error from '../components/Error'
import '../styles/Logement.css'

function Logement() {
  const { id } = useParams()

  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Error />
  }

  return (
    <main className="logement">
    <div  className="logement__carousel">
          <img className="logement__cover"
        src={logement.cover}
        alt={logement.title}
      />

      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
    </div>
    </main>
  )
}

export default Logement
