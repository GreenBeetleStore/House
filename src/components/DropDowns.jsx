/* DropDowns 🏹 src/components/DropDowns.jsx */

import React, { useState } from 'react'
import ArrowUp from '../assets/icons/arrowUp.svg'
import ArrowDown from '../assets/icons/arrowDown.svg'

const DropDowns = () => {
   const [trigger, isTrigger] = useState(false)
   const triggerStatus = () => {
      isTrigger(!trigger)
   }
   return (
      <article className="K-Skills__article">
         <div className="K-Skills__article__statement" onClick={triggerStatus}>
            {trigger ? (
               <img src={ArrowUp} alt="FlècheHaut" />
            ) : (
               <img src={ArrowDown} alt="FlècheBas" />
            )}
         </div>
         {trigger && <div className="K-Skills__article__info"></div>}
      </article>
   )
}

export default DropDowns
