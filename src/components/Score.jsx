// Score ⭐ src/components/Score.jsx

import Orange from '../assets/icons/starorange.svg'
import Grey from '../assets/icons/stargrey.svg'

function Score({ score }) {
   const stars = [1, 2, 3, 4, 5]

   return (
      <div className="K-Sheet__keywords__rightBox__starScore">
         {stars.map((data, index) =>
            score >= data ? (
               <img key={index} src={Orange} alt="" />
            ) : (
               <img key={index} src={Grey} alt="" />
            )
         )}
      </div>
   )
}

export default Score
