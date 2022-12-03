/* BannerAp 🎏 src/components/BannerAp.jsx */

import React from 'react'
import aboutBanner from '../assets/images/bannerAp.webp'

const BannerAp = () => {
   return (
      <section className="K-BannerAp">
         <img
            src={aboutBanner}
            alt="Montagnes enneigées"
            className="K-BannerAp__img"
         />
      </section>
   )
}

export default BannerAp
