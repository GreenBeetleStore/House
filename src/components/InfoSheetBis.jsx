/* InfoSheet 🚦 src/components/InfoSheet.jsx */

import Description from './Description'
import Equipment from './Equipment'

function InfoSheet(logement) {
   return (
      <div className="K-Sheet__info k-info">
         <Description description={logement.description} />
         {logement.equipments.map((equip) => (
            <div className="K-Sheet__info__article__description">
               <Equipment key={equip} advantage={equip} />
            </div>
         ))}
      </div>
   )
}

export default InfoSheet
