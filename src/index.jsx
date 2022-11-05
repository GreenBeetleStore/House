/* index 🎃 src/index.jsx  */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './css/index.css'
import Home from './pages/Home'
import About from './pages/About'

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
         </Routes>
      </Router>
   </React.StrictMode>,

   document.getElementById('root')
)
