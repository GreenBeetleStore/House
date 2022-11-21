/* Skills 🎭 src/components/Skills.jsx */

import React, { useState } from 'react'
import traits from '../mocks/traits.json'
import ArrowUp from '../assets/icons/arrowUp.svg'
import ArrowDown from '../assets/icons/arrowDown.svg'

// Façon mentor.
// ======================================================================

// const Skills = ({ titleTrait, skillTrait }) => {
//    const [trigger, isTrigger] = useState(false)
//    return (
//       <section className="K-Skills">
//          <button className="K-Skills__article__statement buttonSkills" onClick={() => isTrigger(!trigger)}>
//             <h3 className="titleButton">{titleTrait}</h3>
//             <img className={trigger ? 'arrowUp' : 'arrowDown'}
//                src={ArrowDown}
//                alt="Flèche en bas"
//                />
//          </button>
//          {trigger && (
//             <div className="K-Skills__article__info">
//                <p>{skillTrait}</p>
//             </div>
//          )}
//       </section>
//    )
// }

// TEST 1.
// ======================================================================

// const Skills = () => {
//    /* DropDown 🏹 Disparador */
//    const [trigger, isTrigger] = useState(false)
//    const triggerStatus = () => {
//       isTrigger(!trigger)
//    }

//    const traitsAbout = traits.map((trait) => (
//       <article className="K-Skills__article" >
//          <div className="K-Skills__article__statement" onClick={triggerStatus}>
//             <h3>{trait.titleTrait}</h3>
//             {trigger ? (
//                <img src={ArrowUp} alt="Flèche en haut" />
//             ) : (
//                <img src={ArrowDown} alt="Flèche en bas" />
//             )}
//          </div>
//          <div className="K-Skills__article__info">
//             {trigger && <p>{trait.skillTrait}</p>}
//          </div>
//       </article>
//    ))
//    return <section className="K-Skills">{traitsAbout}</section>
// }

// TEST 1.
// ======================================================================

function Skills({ titleTrait, skillTrait }) {
   const [isTrigger, setIsTrigger] = useState(false)

   return isTrigger ? (
      <div className="K-Skills">
         <div className="K-Skills__article">
            <h3 className="articleTitle">{traits.titleTrait}</h3>
            <img
               src={ArrowUp}
               alt="Flèche en haut"
               onClick={() => setIsTrigger(false)}
            />
         </div>
         <p className="articleInfo">{traits.skillTrait}</p>
      </div>
   ) : (
      <div className="K-Skills">
         <div className="K-Skills__article">
            <h3 className="articleTitle">{traits.titleTrait}</h3>
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
