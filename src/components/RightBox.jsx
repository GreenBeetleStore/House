/* RightBox 🎁⏭ src/components/RightBox.jsx */

import Score from './Score'

function RightBox(host, rating) {
   return (
      <div className="K-Sheet__keywords k-keywords">
         <div className="K-Sheet__keywords__rightBox k-rightBox">
            <div className="K-Sheet__keywords__rightBox__owner k-owner">
               <p>{host.name}</p>
               <img className="k-thumbnail" src={host.picture} alt="" />
            </div>

            <div className="K-Sheet__keywords__rightBox__starScore">
               <Score rating={rating} />
            </div>
         </div>
      </div>
   )
}

export default RightBox
