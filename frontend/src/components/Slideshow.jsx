import { useState } from 'react'
import '../styles/Logement.css'

function Slideshow({ pictures }) {
  // Keep track of the image currently displayed
  const [currentIndex, setCurrentIndex] = useState(0)

  // Check that there are pictures to display
  if (!pictures || pictures.length === 0) {
    return null
  }

  // Display the previous image and return to the last one if needed
  function previousPicture() {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0
        ? pictures.length - 1
        : previousIndex - 1
    )
  }

  // Display the next image and return to the first one if needed
  function nextPicture() {
    setCurrentIndex((previousIndex) =>
      previousIndex === pictures.length - 1
        ? 0
        : previousIndex + 1
    )
  }

  // Display the current image and show the controls if there are several pictures
  return (
    <div className="logement__carousel">
     <img
  key={currentIndex}
  className="logement__cover"
  src={pictures[currentIndex]}
  alt={`Photo ${currentIndex + 1} du logement`}
/>

      {pictures.length > 1 && (
        <>
          <button
            className="carousel__arrow carousel__arrow--left"
            onClick={previousPicture}
            aria-label="Photo précédente"
          >
            &#10094;
          </button>

          <button
            className="carousel__arrow carousel__arrow--right"
            onClick={nextPicture}
            aria-label="Photo suivante"
          >
            &#10095;
          </button>

          <span className="carousel__counter">
            {currentIndex + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  )
}

export default Slideshow