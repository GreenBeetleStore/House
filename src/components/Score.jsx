// Score ⭐ src/components/Score.jsx

import React from 'react'
import Star from '../assets/icons/star.svg'
import StarGrey from '../assets/icons/star-1.svg'

const Score = ({ rating }) => {
   const stars = [1, 2, 3, 4, 5]
   
   
   return (
      <div className="K-Sheet__keywords__rightBox__starScore k-starScore">
         {stars.map((star) => 
         rating >= star ? (
            <img key={star.toString()} src={Star} alt="gold star" className='k-starScore__star' />
         ) : (
            <img key={star.toString()} src={StarGrey} alt="gold star" className='k-starScore__star' />
         )
         )}
      </div>
   )
}

export default Score
