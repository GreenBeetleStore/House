/* Gallery 🍱 src/components/Gallery.jsx */

import React from 'react'
import saloon from '../assets/images/sejour.webp'

const Gallery = () => {
   return (
      <section className="K-Gallery">
         <a href="../pages/Card">
            <article className="K-Gallery__article article">
               <img
                  className="K-Gallery__article__apartImage article__apartImage"
                  src={saloon}
                  alt="Intérieur d'appartement"
               />
               <span className="K-Gallery__article__title article__title">
                  Titre de la location
               </span>
            </article>
         </a>
         <a href="../pages/Card">
            <article className="K-Gallery__article article">
               <img
                  className="K-Gallery__article__apartImage article__apartImage"
                  src={saloon}
                  alt="Intérieur d'appartement"
               />
               <span className="K-Gallery__article__title article__title">
                  Titre de la location
               </span>
            </article>
         </a>
         <a href="../pages/Card">
            <article className="K-Gallery__article article">
               <img
                  className="K-Gallery__article__apartImage article__apartImage"
                  src={saloon}
                  alt="Intérieur d'appartement"
               />
               <span className="K-Gallery__article__title article__title">
                  Titre de la location
               </span>
            </article>
         </a>
         <a href="../pages/Card">
            <article className="K-Gallery__article article">
               <img
                  className="K-Gallery__article__apartImage article__apartImage"
                  src={saloon}
                  alt="Intérieur d'appartement"
               />
               <span className="K-Gallery__article__title article__title">
                  Titre de la location
               </span>
            </article>
         </a>
         <a href="../pages/Card">
            <article className="K-Gallery__article article">
               <img
                  className="K-Gallery__article__apartImage article__apartImage"
                  src={saloon}
                  alt="Intérieur d'appartement"
               />
               <span className="K-Gallery__article__title article__title">
                  Titre de la location
               </span>
            </article>
         </a>
         <a href="../pages/Card">
            <article className="K-Gallery__article article">
               <img
                  className="K-Gallery__article__apartImage article__apartImage"
                  src={saloon}
                  alt="Intérieur d'appartement"
               />
               <span className="K-Gallery__article__title article__title">
                  Titre de la location
               </span>
            </article>
         </a>
      </section>
   )
}

export default Gallery
