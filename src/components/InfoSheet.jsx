/* InfoSheet 🚦 src/components/InfoSheet.jsx */

import ArrowUp from '../assets/icons/arrowUp.svg'
import ArrowDown from '../assets/icons/arrowDown.svg'

function InfoSheet(description, equipments) {
   return (
      <div className="K-Sheet__info k-info">
         <div className="K-Sheet__info__article">
            <div className="K-Sheet__info__article__tab">
               <h4>Description</h4>
               <img src={ArrowUp} alt="Flèche vers le haut" />
            </div>
            <div className="K-Sheet__info__article__description">
               <p>{description}</p>
            </div>
         </div>

         <div className="K-Sheet__info__article">
            <div className="K-Sheet__info__article__tab">
               <h4>Équipements</h4>
               <img src={ArrowUp} alt="Flèche vers le haut" />
            </div>
            <div className="K-Sheet__info__article__description">
               <p>{equipments}</p>
            </div>
         </div>
      </div>
   )
}

export default InfoSheet
