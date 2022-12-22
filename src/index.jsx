/* index 🎃 src/index.jsx  */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './css/index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Sheet from './pages/Sheet'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Router>
         <Header />
         <Routes>
            <Route exact path="/Kasa/" element={<Home />} />
            <Route path="/Kasa/about" element={<About />} />
            <Route path="/Kasa/sheet/:id" element={<Sheet />} />
            <Route path="*" element={<Error />} />
         </Routes>
         <Footer />
      </Router>
   </React.StrictMode>,
)
