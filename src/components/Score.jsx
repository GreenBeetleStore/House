// Score ⭐ src/components/Score.jsx

import Star from '../assets/icons/star.svg'
import StarGrey from '../assets/icons/star-1.svg'

function Score({ score }) {
   const stars = [1, 2, 3, 4, 5]

   return (
      <div className="K-Sheet__keywords__rightBox__starScore">
         {stars.map((star) =>
            score >= star ? (
               <img
                  className="K-Sheet__keywords__rightBox__starScore__icon"
                  key={star.toString()}
                  src={Star}
                  alt="gold star"
               />
            ) : (
               <img
                  className="K-Sheet__keywords__rightBox__starScore__icon"
                  key={star.toString()}
                  src={StarGrey}
                  alt="grey star"
               />
            )
         )}
      </div>
   )
}

export default Score
