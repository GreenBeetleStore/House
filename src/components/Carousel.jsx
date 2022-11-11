/* Carousel 🎠 src/components/Carousel.jsx */

import React from 'react'
import { useState } from 'react'
import ArrowRight from '../assets/icons/arrowRight.svg'
import ArrowLeft from '../assets/icons/arrowLeft.svg'

const Carousel = ({ slides }) => {
   const [expose, isExpose] = useState(0)
   const length = slides.length
   const nextPicture = () => {
      isExpose(expose === length - 1 ? 0 : expose + 1)
   }
   const previousPicture = () => {
      isExpose(expose === 0 ? length - 1 : expose - 1)
   }
   return (
      <div className="K-Sheet__carousel k-carousel">
         {slides.map((picture, index) => {
            return (
               <div
                  key={index}
                  className={
                     index === expose
                        ? 'slide slider__pictureIn'
                        : 'slide slider__pictureOut'
                  }
               >
                  {index === expose && (
                     <img
                        src={picture}
                        alt=""
                        className="K-Sheet__carousel__picture k-carousel__picture"
                     />
                  )}
               </div>
            )
         })}
         {length > 1 ? (
            <div>
               <div
                  className="K-Sheet__carousel__left"
                  onClick={previousPicture}
               >
                  <img
                     className="K-Sheet__carousel__arrowLeft"
                     src={ArrowLeft}
                     alt="flèche gauche"
                  />
               </div>
               <div className="K-Sheet__carousel__right" onClick={nextPicture}>
                  <img
                     className="K-Sheet__carousel__arrowRight"
                     src={ArrowRight}
                     alt="flèche droite"
                  />
               </div>

               <p className="K-Sheet__carousel__pageNumber">1/4</p>
            </div>
         ) : null}
      </div>
   )
}

export default Carousel
