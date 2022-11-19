import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ logement }) => {
   return (
      <li className="K-Gallery__article article">
         <Link to={'/sheet/' + logement.id}>
            <img src={logement.cover} alt="Logement" />
            <div className='K-Gallery__article__mask'></div>
            <p className="K-Gallery__article__title article__title">{logement.title}</p>
         </Link>
      </li>
   )
}

export default Card
