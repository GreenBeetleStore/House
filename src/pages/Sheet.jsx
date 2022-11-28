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
   const logement = Logements.find((l) => l.id === id)

   return (
      <div className="K-Sheet" key={id} >
         <Carousel Picture={logement.pictures} />
         <div className="K-Sheet__keywords k-keywords">
            <LeftBox title={logement.title} location={logement.location} tags={logement.tags} />
            <RightBox name={logement.host.name} picture={logement.host.picture} rating={logement.rating} />
         </div>
         <InfoSheet 
            description={logement.description}
            equipments={logement.equipments}
         />
      </div>
   )
}

export default Sheet
