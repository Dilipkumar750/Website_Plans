import react from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Hero from './Component/Hero'
import Header from './Pages/Header'
import Footer from './Pages/Footer'

function App() {
  return (
    <div>
      <Router>  {/* Wrap everything inside <BrowserRouter> */}
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
