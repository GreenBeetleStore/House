/* RightBox 🎁⏭ src/components/RightBox.jsx */

import Score from './Score'

function RightBox( host, photo, rating ) {
   return (
      <div className="K-Sheet__keywords__rightBox k-rightBox">
         <div className="K-Sheet__keywords__rightBox__owner k-owner">
            <p>{host}</p>
            {/* <img className="k-thumbnail" src={photo} alt="" /> */}
         </div>

         <div className="K-Sheet__keywords__rightBox__starScore">
            <Score rating={rating} />
         </div>
      </div>
   )
}

export default RightBox
