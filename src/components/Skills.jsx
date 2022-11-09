/* Skills 🎭 src/components/Skills.jsx */

import React from 'react'
import traits from '../mocks/traits.json'
import DropDowns from './DropDowns'

const Skills = () => {
   const traitsAbout = traits.map((trait) => (
      <DropDowns>
         <h3>{trait.titleTrait}</h3>
         <p>{trait.skillTrait}</p>
      </DropDowns>
   ))
   return <section className="K-Skills">{traitsAbout}</section>
}

export default Skills
