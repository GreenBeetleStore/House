import React from 'react'
import homeBanner from '../assets/images/banner01.webp'

const Banner = () => {
   return (
      <section className="K-Banner">
            <img
               src={homeBanner}
               alt="Falaises en bord de mer"
               className="K-banner__img"
            />
            <h1 className="K-banner__title">Chez vous, partout et ailleurs</h1>
      </section>
   )
}

export default Banner
