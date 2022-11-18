/* Skills 🎭 src/components/Skills.jsx */

import React, { useState } from 'react'
import traits from '../mocks/traits.json'
import ArrowUp from '../assets/icons/arrowUp.svg'
import ArrowDown from '../assets/icons/arrowDown.svg'

const Skills = () => {
   /* DropDown 🏹 Disparador */
   const [trigger, isTrigger] = useState(false)
   const triggerStatus = () => {
      isTrigger(!trigger)
   }

   const traitsAbout = traits.map((trait) => (
      <article className="K-Skills__article" onClick={triggerStatus}>
         <div className="K-Skills__article__statement" >
            <h3>{trait.titleTrait}</h3>
            {trigger ? (
               <img src={ArrowUp} alt="Flèche en haut" />
            ) : (
               <img src={ArrowDown} alt="Flèche en bas" />
            )}
         </div>
         <div className="K-Skills__article__info">
            {trigger && <p>{trait.skillTrait}</p>}
         </div>
      </article>
   ))
   return <section className="K-Skills">{traitsAbout}</section>
}

export default Skills
