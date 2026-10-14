import { useState } from 'react'
import '../styles/Collapse.css'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

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