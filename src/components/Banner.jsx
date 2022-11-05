/* banner 🎏 src/components/Banner.jsx */

import React from 'react'
import homeBanner from '../assets/images/banner01.webp'
import aboutBanner from '../assets/images/banner02.webp'

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

   function BannerAp() {
      return (
         <section className="K-Banner">
            <img
               src={aboutBanner}
               alt="Montagnes enneigées"
               className="K-Banner__img"
            />
         </section>
      )
   }
}

export default Banner
export function BannerAp() {}
