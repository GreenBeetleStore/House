/* Sheet 🈴 src/pages/Sheet.jsx*/

import React from 'react'
import { useParams } from 'react-router-dom'
import Logements from '../mocks/logements.json'
import Carousel from '../components/Carousel'
import LeftBox from '../components/LeftBox'
import RightBox from '../components/RightBox'
import InfoSheet from '../components/InfoSheet'

function Sheet() {

   const { id } = useParams()
   const logement = Logements.find (l => l.id === id)

   return (
      <div className="K-Sheet">     
         <Carousel
            key={id}
            Picture={logement.pictures}
         />
         <div className="K-Sheet__keywords k-keywords">
            <LeftBox 
               title={logement.title}
               location={logement.location}               
            />
            {/* <RightBox
               host={logement.host.name}
               photo={logement.host.picture}
               rating={logement.rating}
            /> */}
            {/* <InfoSheet               
               description={logement.description}
               equipments={logement.equipments}
            /> */}
         </div>
      </div>
   )
}

export default Sheet
