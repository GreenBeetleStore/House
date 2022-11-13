/* RightBox 🎁⏭ src/components/RightBox.jsx */

import React from 'react'
import { useParams } from 'react-router-dom'
import logements from '../mocks/logements.json'
import Owner from './Owner'
import Score from './Score'

const LeftBox = () => {
   const { logementId } = useParams()
   const logement = logements.find((logement) => logement.id === logementId)
   const { host, rating } = logement

   return (
      <div className="K-Sheet__keywords__rightBox k-rightBox">
         <Owner host={host} />
         <Score rating={rating} />
      </div>
   )
}

export default LeftBox
