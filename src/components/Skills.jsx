/* Skills 🎭 src/components/Skills.jsx */

import React, { useState } from 'react'
// import traits from '../mocks/traits.json'
// import ArrowUp from '../assets/icons/arrowUp.svg'
import Arrow from '../assets/icons/arrowDown.svg'

const Skills = ({ titleTrait, skillTrait }) => {
   /* DropDown 🏹 Disparador */
   const [trigger, isTrigger] = useState(false)
   
   return (
      <article className="K-Skills__article">
         <div
            className="K-Skills__article__statement btnCollapse"
            onClick={() => isTrigger(!trigger)}
         >
            <h3 className="btnTitle">{titleTrait}</h3>
            <img
               className={trigger ? 'arrowUp' : 'arrowDown'}
               src={Arrow}
               alt="Flèche en bas"
            />
            </div>
            {trigger && (
               <div className="K-Skills__article__info">
                  <p>{skillTrait}</p>
               </div>
            )}
      </article>
   )
}

export default Skills
