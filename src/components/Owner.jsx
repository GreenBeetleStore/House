// Owner 👩‍🦰 src/components/Owner.jsx

import React from 'react'

const Owner = ({ host }) => {
      const name = host.name

      return (
            <div className="K-Sheet__keywords__rightBox__owner k-owner">
                  <p>{name}</p>
                  <img src={host.picture} alt="" className="K-Sheet__keywords__rightBox__thumbnail k-thumbnail"/>
               </div>
      )
}

export default Owner