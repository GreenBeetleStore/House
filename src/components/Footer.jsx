import React from 'react'
import logoB from '../assets/images/logoB.png'

const Banner = () => {
      return (
            <footer className="K-Footer">
               <a href="../pages/Home">
                  <img
                     className="K-Footer__logo"
                     src={logoB}
                     alt="Logo de l'immobilier Kasa"
                  />
               </a>
               <h3 className="K-Footer__copyright">
                  © 2020 Kasa. All rights reserved
               </h3>
            </footer>
         )
}

export default Banner
