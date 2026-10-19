
import { Navigate, useParams } from 'react-router-dom'
import logements from '../data/logements.json'
import '../styles/Logement.css'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'

function Logement() {
  // Get the logement ID from the URL
  const { id } = useParams()

  // Find the logement that matches the ID
  const logement = logements.find((item) => item.id === id)

  // Display the error page if the logement does not exist
  if (!logement) {
    return <Navigate to="/404" replace />

  }

  return (
    <main className="logement">
      {/* Display the pictures of the selected logement */}
      <Slideshow pictures={logement.pictures} />

      {/* Group the accommodation details and owner information */}
      <div className="logement__header">
        {/* Accommodation information on the left */}
        <div className="logement__details">
          <h1 className="logement__title">
            {logement.title}
          </h1>

          <p className="logement__location">
            {logement.location}
          </p>

          {/* Display the accommodation tags */}
          <div className="logement__tags">
            {logement.tags.map((tag) => (
              <span className="logement__tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Owner and rating on the right */}
        <div className="logement__owner">
          <div className="logement__host">
            <p className="logement__host-name">
              {logement.host.name}
            </p>

            <img
              className="logement__host-picture"
              src={logement.host.picture}
              alt={`Photo de ${logement.host.name}`}
            />
          </div>

          {/* Display the rating stars */}
          <div
            className="logement__rating"
            aria-label={`Note : ${logement.rating} sur 5`}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={
                  star <= Number(logement.rating)
                    ? 'logement__star logement__star--active'
                    : 'logement__star'
                }
              >
                ★
              </span>
            ))}
          </div>
          
        </div>
      </div>
      

{/* Description and equipment dropdowns */}
<div className="logement__collapses">
  <Collapse title="Description">
    <p>{logement.description}</p>
  </Collapse>

  <Collapse title="Équipements">
    <ul>
      {logement.equipments.map((equipment) => (
        <li key={equipment}>{equipment}</li>
      ))}
    </ul>
  </Collapse>
</div>

    </main>
  )
}

export default Logement
