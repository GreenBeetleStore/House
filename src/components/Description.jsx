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
            <img onClick={()=>setIsDeployed(false)} src={ArrowDown} alt="Flèche vers le bas" />
         </div>
         <div className="K-Sheet__info__article__description">
            <p>{description}</p>
         </div>
      </div>
   ) : (
      <div className="K-Sheet__info__article">
         <div className="K-Sheet__info__article__tab">
            <h4>Description</h4>
            <img onClick={()=>setIsDeployed(true)} src={ArrowUp} alt="Flèche vers le haut" />
         </div>
         <div className="K-Sheet__info__article__description">
            <p>{description}</p>
         </div>
      </div>
   )
}

export default Description
