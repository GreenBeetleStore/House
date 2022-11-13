/* Sheet 🈴 src/pages/Sheet.jsx*/

import React from 'react'
import { useParams } from 'react-router-dom'
import logements from '../mocks/logements.json'
import Carousel from '../components/Carousel'
import LeftBox from '../components/LeftBox'
import RightBox from '../components/RightBox'

const Sheet = () => {
   const { logementId } = useParams()
   const logement = logements.find((logement) => logement.id === logementId)
   const {
      title,
      pictures,
      description,
      host,
      rating,
      location,
      equipments,
   } = logement

   return (
      <section className="K-Sheet">

         <Carousel photos={pictures} />

         <div className="K-Sheet__keywords k-keywords">
            <LeftBox />
            <RightBox />
         </div>

         <div className="K-Sheet__info k-info">
            
         </div>

         

      </section>
   )
}

export default Sheet
