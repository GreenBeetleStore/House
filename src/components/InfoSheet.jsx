/* InfoSheet 🚦 src/components/InfoSheet.jsx */

import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import logements from '../mocks/logements.json'
import ArrowUp from '../assets/icons/arrowUp.svg'
import ArrowDown from '../assets/icons/arrowDown.svg'

const InfoSheet = () => {
   const { logementId } = useParams()
   const logement = logements.find((logement) => logement.id === logementId)
   const { description, equipments } = logement


   /* DropDown 🏹*/
   const [trigger, isTrigger] = useState(false)
   const triggerStatus = () => {
      isTrigger(!trigger)
   }

   return (
      <div className="K-Sheet__info k-info">
         <div className="K-Sheet__info__article">
            <div className="K-Sheet__info__article__tab" onClick={triggerStatus}>
               <h4>Description</h4>
               {trigger ? (
               <img src={ArrowUp} alt="Flèche en haut" />
            ) : (
               <img src={ArrowDown} alt="Flèche en bas" />
            )}
            </div>
            <div className="K-Sheet__info__article__description">
            {trigger && <p>{description}</p>}
            </div>
         </div>
         <div className="K-Sheet__info__article">
            <div className="K-Sheet__info__article__tab" onClick={triggerStatus}>
               <h4>Équipements</h4>
               {trigger ? (
               <img src={ArrowUp} alt="Flèche en haut" />
            ) : (
               <img src={ArrowDown} alt="Flèche en bas" />
            )}
            </div>
            <div className="K-Sheet__info__article__description">
            {trigger && <p>{equipments}</p>}
            </div>
         </div>
      </div>
   )
}

export default InfoSheet
