// ApartScore ⭐ src/components/ApartScore.jsx

import React from 'react'
import '../css/index.css'
import Star from '../assets/icons/star.svg'

function ApartScore () {
   const rating = [1, 2, 3, 4, 5]
   const scaleRate = <img src={Star} alt='star-icon' className='starRating' />
   
   return (
      <div>
         {rating.map((ratingElem) =>
            scaleRate >= ratingElem ? (
               <span key={ratingElem.toString()}>{Star}</span>
            ) : null
         )}
      </div>
   )
}

export default ApartScore
