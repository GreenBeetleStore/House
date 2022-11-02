/* index 🎃 src/index.jsx  */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './css/index.css'
import Home from './pages/Home'

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route exact path="/" element={<Home />} />
         </Routes>
      </Router>
   </React.StrictMode>,

   document.getElementById('root')
)
