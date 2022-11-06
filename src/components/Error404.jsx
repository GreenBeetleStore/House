/* Error404 🎏 src/components/Error404.jsx */

import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
   return (
      <section className="K-Error">
            <h1 className='K-Error__msg404'>404</h1>
            <h2 className='K-Error__subTitle'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
         </section>
   )
}

export default Error404