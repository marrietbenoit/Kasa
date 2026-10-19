
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './components/About'
import Error from './components/Error'
import Logement from './pages/Logement'

// Display the page that matches the URL
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Display the selected accommodation */}
      <Route path="/logement/:id" element={<Logement />} />

      {/* Dedicated error page */}
      <Route path="/404" element={<Error />} />

      {/* Redirect unknown URLs to the error page */}
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}

export default Router
