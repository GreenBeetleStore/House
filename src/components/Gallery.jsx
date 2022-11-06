/* Gallery 🍱 src/components/Gallery.jsx */

import React from 'react'
import { Link } from 'react-router-dom'
import saloon from '../assets/images/sejour.webp'

const Gallery = () => {
   return (
      <section className="K-Gallery">
         <article className="K-Gallery__article article">
            <Link to="/sheet">
               <img
                  className="K-Gallery__article__apartImage article__apartImage"
                  src={saloon}
                  alt="Intérieur d'appartement"
               />
               <span className="K-Gallery__article__title article__title">
                  Titre de la location
               </span>
            </Link>
         </article>
         <article className="K-Gallery__article article">
            <Link to="/sheet">
               <img
                  className="K-Gallery__article__apartImage article__apartImage"
                  src={saloon}
                  alt="Intérieur d'appartement"
               />
               <span className="K-Gallery__article__title article__title">
                  Titre de la location
               </span>
            </Link>
         </article>
         <article className="K-Gallery__article article">
            <Link to="/sheet">
               <img
                  className="K-Gallery__article__apartImage article__apartImage"
                  src={saloon}
                  alt="Intérieur d'appartement"
               />
               <span className="K-Gallery__article__title article__title">
                  Titre de la location
               </span>
            </Link>
         </article>
         <article className="K-Gallery__article article">
            <Link to="/sheet">
               <img
                  className="K-Gallery__article__apartImage article__apartImage"
                  src={saloon}
                  alt="Intérieur d'appartement"
               />
               <span className="K-Gallery__article__title article__title">
                  Titre de la location
               </span>
            </Link>
         </article>
         <article className="K-Gallery__article article">
            <Link to="/sheet">
               <img
                  className="K-Gallery__article__apartImage article__apartImage"
                  src={saloon}
                  alt="Intérieur d'appartement"
               />
               <span className="K-Gallery__article__title article__title">
                  Titre de la location
               </span>
            </Link>
         </article>
         <article className="K-Gallery__article article">
            <Link to="/sheet">
               <img
                  className="K-Gallery__article__apartImage article__apartImage"
                  src={saloon}
                  alt="Intérieur d'appartement"
               />
               <span className="K-Gallery__article__title article__title">
                  Titre de la location
               </span>
            </Link>
         </article>
      </section>
   )
}

export default Gallery
