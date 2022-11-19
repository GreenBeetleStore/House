/* Carousel 🎠 src/components/Carousel.jsx */

import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import logements from '../mocks/logements.json'
import ArrowRight from '../assets/icons/arrowRight.svg'
import ArrowLeft from '../assets/icons/arrowLeft.svg'

console.log(logements)

const Carousel = ({ imgurl }) => {
   // Modificador d'estat.
   const [expose, isExpose] = useState(0)

   // Captura l'id de l'url.
   const id = useParams()
   console.log(id)

   // Trobar les imatges dins de logement.json.
   const { picture } = logements.map((picture) => picture.id === id)
   console.log({picture})

   // Si és la última foto -1 passa a la primera 0, sinó passa a la següent +1.
   const nextPicture = () => {
      const lastPicture = expose === imgurl.length - 1
      const newIndex = lastPicture ? 0 : expose + 1
      isExpose(newIndex)
   }
   // Si és a la primera posició passa a la última, sinó passa a l'anterior.
   const previousPicture = () => {
      const firstPicture = expose === 0
      const newIndex = firstPicture ? imgurl.length - 1 : expose - 1
      isExpose(newIndex)
   }

   return (
      <section className="K-Sheet__carousel k-carousel">
         <div
            className="K-Sheet__carousel__photo k-carousel__photo"
            style={{ picture: `url(${imgurl[expose]})` }}
         >
            <div
               className="K-Sheet__carousel__arrows k-arrows"
               style={imgurl.length === 1 ? { visibility: 'hidden' } : {}}
            >
               <div
                  className="K-Sheet__carousel__arrows__arrowLeft k-carousel__arrowLeft"
                  onClick={previousPicture}
               >
                  <img src={ArrowLeft} alt="flèche gauche" />
               </div>
               <div
                  className="K-Sheet__carousel__arrows__arrowRight k-carousel__arrowRight"
                  onClick={nextPicture}
               >
                  <img src={ArrowRight} alt="flèche droite" />
               </div>
            </div>
            <p className="K-Sheet__carousel__pageNumber k-carousel__pageNumber">
               {expose + 1}/{imgurl.length}
            </p>
         </div>
      </section>
   )
}

export default Carousel
