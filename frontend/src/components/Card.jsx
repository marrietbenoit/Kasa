

import '../styles/Card.css'

// Display main image taken from props
function Card({ logement }) {
  return (
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
  )
}

export default Card
