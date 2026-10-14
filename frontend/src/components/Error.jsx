import { Link } from 'react-router-dom'
import '../styles/Error.css'



function Error() {
  return (

    <div className="page">
      <div className="error-container">
        <h1 className="error-title">404</h1>
        <h2 className='error-message'>Oups! La page que vous demandez n'existe pas</h2>
        <Link to="/" className="error-link">
          Retouner sur la page d'accueil
        </Link>
      </div>
    </div>
  )
}

export default Error