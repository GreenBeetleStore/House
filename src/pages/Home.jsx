/* Home 🏡 src/pages/Home.jsx */

import React from 'react'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

function Home() {
   return (
      <div className="Home">
         <Banner />
         <Gallery />
         <Footer />
      </div>
   )
}

export default Home
