/* Sheet 🈴 src/pages/Sheet.jsx*/

import React from 'react'
import { useParams, redirect } from 'react-router-dom'
import Apartments from '../mocks/logements.json'
import Carousel from '../components/Carousel'
import LeftBox from '../components/LeftBox'
import RightBox from '../components/RightBox'
import InfoSheet from '../components/InfoSheet'

import FitxaSheet from '../components/FitxaSheet'

function Sheet() {
   const { logeId } = useParams();
   const logement = Apartments.find((logement) => logement.id === logeId)
   const { title, pictures, description, host, rating, location, equipments, tags } = logement

   return logement ? (
      <div className="K-Sheet">

         <Carousel pictures={pictures} />


         <FitxaSheet />


         <div className="K-Sheet__keywords k-keywords">
            {/* <LeftBox /> */}
            {/* <RightBox /> */}
         </div>

         <div className="K-Sheet__info k-info">
            {/* <InfoSheet /> */}
         </div>
      </div>
   ) : (
      redirect('*')
   )
}

export default Sheet
