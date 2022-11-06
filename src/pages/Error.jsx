/* Error 🐛 src/pages/Error.jsx */

import React from 'react'
import Header from '../components/Header'
import Error404 from '../components/Error404'
import Footer from '../components/Footer'

function Error() {
   return (
      <div className="Error">
         <Header />
         <Error404 />
         <Footer />
      </div>
   )
}

export default Error
