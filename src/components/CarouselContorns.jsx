/* Carousel 🎠 src/components/Carousel.jsx */

import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import logements from '../mocks/logements.json'
import ArrowRight from '../assets/icons/arrowRight.svg'
import ArrowLeft from '../assets/icons/arrowLeft.svg'

// import Photo from '../assets/images/Background.png'

const CarouselB = () => {
   // Captura de l'id a l'URL.
   const { id } = useParams()

   const imgurl = logements.map((imgurl) => imgurl.id === id)
   // const traitsAbout = traits.map((trait) => (

   // Modificador d'estat.
   const [expose, isExpose] = useState(0)

   // Si és la última foto -1 passa a la primera 0, sinó passa a la següent +1.
   const nextPicture = () => {
      isExpose(expose === imgurl.length - 1 ? 0 : expose + 1)
   }
   // Si és a la primera posició passa a la última, sinó passa a l'anterior.
   const previousPicture = () => {
      isExpose(expose === 0 ? imgurl.length - 1 : expose - 1)
   }

   return (
      <section className="K-Sheet__carousel k-carousel">
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
         <>
            <img key={imgurl.id}
               src={logements.pictures}
               alt="foto apart"
               className="K-Sheet__carousel__picture k-carousel__picture"
            />
         </>
         <p className="K-Sheet__carousel__picture--number pictureNumber">
            {expose + 1}/{imgurl.length}
         </p>
      </section>
   )
}

export default CarouselB
