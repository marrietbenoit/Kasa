import { Link } from 'react-router-dom'
import '../styles/Card.css'

// Display cover image taken from props
function Card({ logement }) {
  return (
    <Link
      to={`/logement/${logement.id}`}
      className="card-link"
    >
      <article className="card">
        <img
          className="card__image"
          src={logement.cover}
          alt={logement.title}
        />

        <div className="card__overlay">
          <h2 className="card__title">{logement.title}</h2>
        </div>
      </article>
    </Link>
  )
}

export default Card