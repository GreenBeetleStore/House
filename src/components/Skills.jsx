/* Skills 🎭 src/components/Skills.jsx */

import React, { useState } from 'react'
import ArrowUp from '../assets/icons/arrowUp.svg'
import ArrowDown from '../assets/icons/arrowDown.svg'

function Skills({ title, skill }) {
   const [isTrigger, setIsTrigger] = useState(false)

   return isTrigger ? (
      <div className="K-Skills">
         <div className="K-Skills__article">
            <h3 className="articleTitle">{title}</h3>
            <img
               src={ArrowUp}
               alt="Flèche en haut"
               onClick={() => setIsTrigger(false)}
            />
         </div>
         <p className="K-Skills__info">{skill}</p>
      </div>
   ) : (
      <div className="K-Skills">
         <div className="K-Skills__article">
            <h3 className="articleTitle">{title}</h3>
            <img
               src={ArrowDown}
               alt="Flèche en bas"
               onClick={() => setIsTrigger(true)}
            />
         </div>
      </div>
   )
}

export default Skills
