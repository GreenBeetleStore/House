// Equipment 🪑 src/components/Equipment.jsx

import ArrowUp from '../assets/icons/arrowUp.svg'
import ArrowDown from '../assets/icons/arrowDown.svg'

function Equipment({ advantage }) {
   return (
      <div className="K-Sheet__info__article">
         <div className="K-Sheet__info__article__tab">
            <h4>Équipements</h4>
            <img src={ArrowUp} alt="Flèche vers le haut" />
         </div>
         {/* <div className="K-Sheet__info__article__description"> */}
            <p className="K-Sheet__info__article__description__equipment">
               {advantage}
            </p>
         {/* </div> */}
      </div>
   )
}

export default Equipment
