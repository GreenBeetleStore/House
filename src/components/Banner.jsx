/* banner 🎏 src/components/Banner.jsx */

import React from 'react'
import homeBanner from '../assets/images/banner01.webp'

const Banner = () => {
   return (
      <section className="K-Banner">
         <img
            src={homeBanner}
            alt="Falaises en bord de mer"
            className="K-Banner__img"
         />
         <h1 className="K-Banner__title">Chez vous, partout et ailleurs</h1>
      </section>
   )
}

export default Banner
