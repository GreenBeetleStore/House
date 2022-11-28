// Description 🪑 src/components/Description.jsx

import ArrowUp from '../assets/icons/arrowUp.svg'
import ArrowDown from '../assets/icons/arrowDown.svg'

function Description({ description }) {
   return (
      <div className="K-Sheet__info__article">
            <div className="K-Sheet__info__article__tab">
               <h4>Description</h4>
               <img src={ArrowUp} alt="Flèche vers le haut" />
            </div>
            <div className="K-Sheet__info__article__description">
               <p>"estem intentant"</p>
            </div>
         </div>
   )
}

export default Description
