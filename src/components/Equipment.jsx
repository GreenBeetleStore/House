// Equipment 🪑 src/components/Equipment.jsx

import ArrowUp from '../assets/icons/arrowUp.svg'
import ArrowDown from '../assets/icons/arrowDown.svg'

function Equipment({ equipments }) {
   return (
      <div className="K-Sheet__info__article">
         <div className="K-Sheet__info__article__tab">
            <h4>Équipements</h4>
            <img src={ArrowUp} alt="Flèche vers le haut" />
         </div>
         <div className="K-Sheet__info__article__equipments">
            {equipments.map((equip) => (
               <p className="K-Sheet__info__article__equipments__equip">
                  {equip}
               </p>
            ))}
         </div>
      </div>
   )
}

export default Equipment
