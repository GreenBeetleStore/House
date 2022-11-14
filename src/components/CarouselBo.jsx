/* Carousel 🎠 src/components/Carousel.jsx */

import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import logements from '../mocks/logements.json'
import ArrowRight from '../assets/icons/arrowRight.svg'
import ArrowLeft from '../assets/icons/arrowLeft.svg'

const Carousel = () => {

   const { logementId } = useParams("id")
   const pictures = logements.find((picture) => picture.id === logementId)
   
   // Modificador d'estat.
   const [expose, isExpose] = useState(0)
   // Longitud de l'array.
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
               <div key={index} className={
                  index === expose
                     ? "K-Sheet__carousel__photoIn k-carousel__photoIn"
                     : "K-Sheet__carousel__photoOut k-carousel__photoOut"
               }
               >
                  {index === expose && (
                     <img src={picture} alt="" className="K-Sheet__carousel__photo k-carousel__photo"/>
                  )}
               </div>
            )
         })}
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