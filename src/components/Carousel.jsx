/* Carousel 🎠 src/components/Carousel.jsx */

import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import logements from '../mocks/logements.json'
import ArrowRight from '../assets/icons/arrowRight.svg'
import ArrowLeft from '../assets/icons/arrowLeft.svg'

const Carousel = () => {
   const { id } = useParams()
   const { pictures } = logements.find((loge) => loge.id === id)
   const [expose, isExpose] = useState(0)
   // Si és la última foto -1 passa a la primera 0, sinó passa a la següent +1.
   const nextPicture = () => {
      isExpose(expose === pictures.length - 1 ? 0 : expose + 1)
   }
   // Si és a la primera posició passa a la última, sinó passa a l'anterior.
   const previousPicture = () => {
      isExpose(expose === 0 ? pictures.length - 1 : expose - 1)
   }

   return (
      <section className="K-Sheet__carousel k-carousel">
         {/* Mostra les fletxes sempre que hi hagin més d'una imatge */}
         {pictures.length > 1 && (
            <img
               className="K-Sheet__carousel__arrowLeft"
               src={ArrowLeft}
               alt="flèche gauche"
               onClick={previousPicture}
            />
         )}
         {pictures.length > 1 && (
            <img
               className="K-Sheet__carousel__arrowRight"
               src={ArrowRight}
               alt="flèche droite"
               onClick={nextPicture}
            />
         )}

         {pictures.map((picture, index) => {
            return (
               <div key={index}>
                  {index === expose && (
                     <img
                        src={picture}
                        alt={pictures.title}
                        className="K-Sheet__carousel__picture k-carousel__picture"
                     />
                  )}
                  {index === expose && (
                     <span className="K-Sheet__carousel__picture--number k-carousel__picture--number">
                        {expose + 1}/{pictures.length}
                     </span>
                  )}
               </div>
            )
         })}
      </section>
   )
}

export default Carousel
