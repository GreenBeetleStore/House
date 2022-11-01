import React from 'react'
import sejour from '../assets/images/sejour.webp'

const Gallery = () => {
   return (
      <section className="K-Gallery">
         <div className="k-gallery__container container">
               <a href="../pages/Card">
                  <article className="k-gallery__container__article article">
                     {galleryAparts.map((apart, index) => (
                        <div
                           key={`${apart.title}-${index}`}
                           pictures={apart.pictures}
                           title={apart.title}
                        />
                     ))}
                     <img
                        className="k-gallery__container__article__apartImage article__apartImage"
                        src={pictures}
                        alt="Intérieur d'appartement"
                     />
                     <span className="k-gallery__container__article__title article__title">
                        {title}
                     </span>
                  </article>
               </a>
            </div>
      </section>
   )
}

export default Gallery
