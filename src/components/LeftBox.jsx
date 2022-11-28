/* LeftBox ⏮🎁 src/components/LeftBox.jsx */

import Tags from './Tags'

function LeftBox({ title, location, tags }) {
   return (
      <div className="K-Sheet__keywords__leftBox k-leftBox">
         <div className="K-Sheet__keywords__leftBox__title k-title">
            <h2>{title}</h2>
         </div>
         <div className="K-Sheet__keywords__leftBox__region k-region">
            <p>{location}</p>
         </div>
         <div className="K-Sheet__keywords__leftBox__tags">
            {tags.map((tag) => (
               <div className="K-Sheet__keywords__leftBox__tags__labels">
                  <Tags key={tag} label={tag} />
               </div>
            ))}
         </div>
      </div>
   )
}

export default LeftBox
