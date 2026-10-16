import { useState } from 'react'
import '../styles/Collapse.css'

function Collapse({ title, children }) {
  // Keep track of whether the dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false)

  // Display the title and toggle the content when the button is clicked
  return (
    <section className={`collapse ${isOpen ? 'open' : ''}`}>
      <button
        className="collapse__header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h2>{title}</h2>
        <span className="collapse__arrow">⌄</span>
      </button>

      <div className="collapse__content">
        {children}
      </div>
    </section>
  )
}

export default Collapse