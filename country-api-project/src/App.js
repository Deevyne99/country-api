import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import SinglePage from './pages/SinglePage'
const App = () => {
  return (
    <main className='main-content'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/countrydetails/:id' element={<SinglePage />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
