// Score ⭐ src/components/Score.jsx

import Star from '../assets/icons/star.svg'
import StarGrey from '../assets/icons/star-1.svg'

function Score({ rating }) {
   const stars = [1, 2, 3, 4, 5]

   return (
      <>
         {stars.map((data, index) =>
            rating >= data ? (
               <img key={index} src={Star} alt="gold star" />
            ) : (
               <img key={index} src={StarGrey} alt="grey star" />
            )
         )}
      </>
   )
}

export default Score
