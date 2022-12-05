// Description 🪑 src/components/Description.jsx

import ArrowUp from '../assets/icons/arrowUp.svg'
import ArrowDown from '../assets/icons/arrowDown.svg'
import React, { useState } from 'react'

function Description({ description }) {
   const [isDeployed, setIsDeployed] = useState(true)

   return isDeployed ? (
      <div className="K-Sheet__info__article">
         <div className="K-Sheet__info__article__tab">
            <h4>Description</h4>
            <img
               src={ArrowDown}
               alt="Flèche vers le bas"
               onClick={() => setIsDeployed(false)}
            />
         </div>
      </div>
   ) : (
      <div className="K-Sheet__info__article">
         <div className="K-Sheet__info__article__tab">
            <h4>Description</h4>
            <img
               src={ArrowUp}
               alt="Flèche vers le haut"
               onClick={() => setIsDeployed(true)}
            />
         </div>
         <div className="K-Sheet__info__article__description">
            <p>{description}</p>
         </div>
      </div>
   )
}

export default Description
