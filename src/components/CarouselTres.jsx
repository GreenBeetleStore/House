/* Carousel 🎠 src/components/Carousel.jsx */

import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import logements from '../mocks/logements.json'
import ArrowRight from '../assets/icons/arrowRight.svg'
import ArrowLeft from '../assets/icons/arrowLeft.svg'

const Carousel = () => {
   // Captura l'id a l'URL.
   const { id } = useParams()

   const { pictures } = logements.map((picture) => picture.id === id)

   // Modificador d'estat.
   const [expose, isExpose] = useState(0)

   const length = pictures.length

   // Si és la última foto -1 passa a la primera 0, sinó passa a la següent +1.
   const nextPicture = () => {
      isExpose(expose === length - 1 ? 0 : expose + 1)
   }
   // Si és a la primera posició passa a la última, sinó passa a l'anterior.
   const previousPicture = () => {
      isExpose(expose === 0 ? length - 1 : expose - 1)
   }

   return (
      <section className="K-Sheet__carousel k-carousel">
         {pictures.map((picture, index) => {
            return (
               <div
                  key={index}
                  className={
                     index === expose
                        ? 'carousels k-carousel__picture__screen'
                        : 'carousels k-carousel__picture__screenOut'
                  }
               >
                  {index === expose && (
                     <img
                        src={picture}
                        alt="foto apart"
                        className="K-Sheet__carousel__picture k-carousel__picture"
                     />
                  )}
                  {index === expose && (
                     <span className="K-Sheet__carousel__picture--number k-pictureNumber">
                        {expose + 1}/{length}
                     </span>
                  )}
               </div>
            )
         })}

         {/* Mostrar les fletxes si hi ha més d'una imatge. */}
         {length > 1 ? (
            <div className="K-Sheet__carousel__arrows k-arrows">
               <img
                  className="K-Sheet__carousel__arrows__arrowLeft k-carousel__arrowLeft"
                  src={ArrowLeft}
                  alt="flèche gauche"
                  onClick={previousPicture}
               />
               <img
                  className="K-Sheet__carousel__arrows__arrowRight k-carousel__arrowRight"
                  src={ArrowRight}
                  alt="flèche droite"
                  onClick={nextPicture}
               />
            </div>
         ) : null}
      </section>
   )
}

export default Carousel
