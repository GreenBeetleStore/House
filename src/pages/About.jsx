/* About 🎭 src/pages/About.jsx */

import React from 'react'
import BannerAp from '../components/BannerAp'
import Skills from '../components/Skills'
import Data from '../mocks/traits.json'

function About() {
   return (
      <div className="About">
         <BannerAp />
         {Data.map((trait) => (
            <Skills
               key={trait}
               title={trait.titleTrait}
               skill={trait.skillTrait}
            />
         ))}
      </div>
   )
}

export default About
