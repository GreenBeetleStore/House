/* Skills 🎭 src/components/Skills.jsx */

import React from 'react'
import traits from '../mocks/traits.json'
import { useState } from 'react'
import ArrowUp from '../assets/icons/arrowUp.svg'
import ArrowDown from '../assets/icons/arrowDown.svg'

const Skills = () => {
   /* DropDown 🏹*/
   const [trigger, isTrigger] = useState(false)
   const triggerStatus = () => {
      isTrigger(!trigger)
   }

   const traitsAbout = traits.map((trait) => (
      <article className="K-Skills__article">
         <div className="K-Skills__article__statement" onClick={triggerStatus}>
            <h3>{trait.titleTrait}</h3>
            {trigger ? (
               <img src={ArrowUp} alt="Flèche" />
            ) : (
               <img src={ArrowDown} alt="Flèche" />
            )}
         </div>
         {trigger && (
            <div className="K-Skills__article__info">
               <p>{trait.skillTrait}</p>
            </div>
         )}
      </article>
   ))
   return <section className="K-Skills">{traitsAbout}</section>
}

export default Skills
