/* Carousel 🎠 src/components/Carousel.jsx */

import React from 'react'
import { useState } from 'react'
import ArrowUp from '../assets/icons/arrowUp.svg'
import ArrowDown from '../assets/icons/arrowDown.svg'
import ArrowRight from '../assets/icons/arrowRight.svg'
import ArrowLeft from '../assets/icons/arrowLeft.svg'
import Background from '../assets/images/Background.png'
import logements from '../mocks/logements.json'

const Carousel = () => {
   return (
      const pictures = logements.map((picture) => (
      <div className="K-Sheet__carousel k-carousel">
         <img src={Background} alt="salon" />
         <img
            className="K-Sheet__carousel__arrowLeft"
            src={ArrowLeft}
            alt="flèche gauche"
         />
         <img
            className="K-Sheet__carousel__arrowRight"
            src={ArrowRight}
            alt="flèche droite"
         />
         <p className="K-Sheet__carousel__pageNumber">1/4</p>
      </div>
      ))
   )
}

export default Carousel
