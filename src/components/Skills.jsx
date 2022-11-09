/* Skills 🎭 src/components/Skills.jsx */

import React from 'react'
import ArrowUp from '../assets/icons/arrowUp.svg'
import traits from '../mocks/traits.json'

const Skills = () => {
   const traitsAbout = traits.map((trait) => (
      <article className="K-Skills__article">
         <div className="K-Skills__article__statement">
            <h3>{trait.titleTrait}</h3>
            <img src={ArrowUp} alt="Flèche" />
         </div>
         <div className="K-Skills__article__info">
            <p>{trait.skillTrait}</p>
         </div>
      </article>
   ))
   return <section className="K-Skills">{traitsAbout}</section>
}

export default Skills
