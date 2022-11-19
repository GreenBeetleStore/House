/* Gallery 🍱 src/components/Gallery.jsx */

import React from 'react'
import { Link } from 'react-router-dom'
import logements from '../mocks/logements.json'

const Gallery = () => {
   const appartements = logements.map((logement) => (
      <article key={logement.id} className="K-Gallery__article article">
         <Link to={`/sheet/${logement.id}`}>
            <img
               className="K-Gallery__article__apartImage article__apartImage"
               src={logement.cover}
               alt="Intérieur d'appartement"
            />
            <div className="K-Gallery__article__mask"></div>
            <span className="K-Gallery__article__title article__title">
               {logement.title}
            </span>
         </Link>
      </article>
   ))

   return <section className="K-Gallery">{appartements}</section>
}

export default Gallery
