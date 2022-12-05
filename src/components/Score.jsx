// Score ⭐ src/components/Score.jsx

import Orange from '../assets/icons/orangeStar.svg'
import Grey from '../assets/icons/greyStar.svg'

function Score({ score }) {
   const stars = [1, 2, 3, 4, 5]

   return (
      <div className="K-Sheet__keywords__rightBox__starScore">
         {stars.map((data, index) =>
            score >= data ? (
               <img key={index} src={Orange} alt="étoile orange" />
            ) : (
               <img key={index} src={Grey} alt="étoile grise" />
            )
         )}
      </div>
   )
}

export default Score
