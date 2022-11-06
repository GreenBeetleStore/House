/* BannerAp 🎏 src/components/BannerAp.jsx */

import React from 'react'
import aboutBanner from '../assets/images/banner02.webp'

const BannerAp = () => {
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

export default BannerAp
