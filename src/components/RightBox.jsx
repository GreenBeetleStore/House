/* RightBox 🎁⏭ src/components/RightBox.jsx */

import Score from './Score'

function RightBox({ name, picture, rating }) {
   return (
      <div className="K-Sheet__keywords__rightBox k-rightBox">
         <div className="K-Sheet__keywords__rightBox__owner k-owner">
            <p>{name}</p>
            <img className="K-Sheet__keywords__rightBox__k-thumbnail" src={picture} alt="Propriétaire." />
         </div>
         <Score key={rating} score={rating} />
      </div>
   )
}

export default RightBox
