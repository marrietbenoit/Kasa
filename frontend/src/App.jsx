import Header from './components/Header'
import Footer from './components/Footer'
import Router from './Router'

function App() {
  return (
     <>
      <Header />
      <div className="app-content">
        <Router />
      </div>
      <Footer />
    </>
  )
}

export default App