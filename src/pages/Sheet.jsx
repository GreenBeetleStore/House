/* Sheet 🈴 src/pages/Sheet.jsx*/

import React from 'react'
import Carousel from '../components/Carousel'
import LeftBox from '../components/LeftBox'
import RightBox from '../components/RightBox'
import InfoSheet from '../components/InfoSheet'

import FitxaSheet from '../components/FitxaSheet'

function Sheet() {
   return (
      <div className="K-Sheet">
         <Carousel />
         {/* <CarouselB /> */}

         <FitxaSheet />


         <div className="K-Sheet__keywords k-keywords">
            {/* <LeftBox /> */}
            {/* <RightBox /> */}
         </div>

         <div className="K-Sheet__info k-info">
            {/* <InfoSheet /> */}
         </div>
      </div>
   )
}

export default Sheet
