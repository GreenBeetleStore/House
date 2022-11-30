/* RightBox 🎁⏭ src/components/RightBox.jsx */

import Score from './Score'

function RightBox(host, rating) {
   return (
      <div className="K-Sheet__keywords__rightBox k-rightBox">
         <div className="K-Sheet__keywords__rightBox__owner k-owner">
            <p>{host.name}</p>
            <img className="k-thumbnail" src={host.picture} alt="" />
         </div>
         <Score key={rating} score={rating} />
      </div>
   )
}

export default RightBox
