/* Footer 👣 src/components/Footer.jsx */

import React from 'react'
import logoB from '../assets/images/logoB.png'
import { Link } from 'react-router-dom'

const Banner = () => {
   return (
      <footer className="K-Footer">
         <Link to="/">
            <img
               className="K-Footer__logo"
               src={logoB}
               alt="Logo de l'immobilier Kasa"
            />
         </Link>
         <h3 className="K-Footer__copyright">
            © 2020 Kasa. All rights reserved
         </h3>
      </footer>
   )
}

export default Banner
