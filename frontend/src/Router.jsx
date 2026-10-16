import { Routes, Route } from 'react-router-dom'
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

      {/* Use the logement ID from the URL to display the correct accommodation */}
      <Route path="/logement/:id" element={<Logement />} />

      {/* Display the error page when the URL does not match another route */}
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Router