/* LeftBox ⏮🎁 src/components/LeftBox.jsx */

import React from 'react'
import { useParams } from 'react-router-dom'
import logements from '../mocks/logements.json'
import Tags from '../components/Tags'

const LeftBox = () => {
   const { logementId } = useParams()
   const logement = logements.find((logement) => logement.id === logementId)
   const { title, location } = logement

   return (
      <div className="K-Sheet__keywords__leftBox k-leftBox">
         <div className="K-Sheet__keywords__leftBox__title k-title">
            <h2>{title}</h2>
         </div>
         <div className="K-Sheet__keywords__leftBox__region k-region">
            <p>{location}</p>
         </div>
         <div className="K-Sheet__keywords__leftBox__labels k-labels">
            {logement.tags.map((tag, index) => (
               <Tags key={index} label={tag} />
            ))}
         </div>
      </div>
   )
}

export default LeftBox
