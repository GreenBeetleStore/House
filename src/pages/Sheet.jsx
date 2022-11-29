/* Sheet 🈴 src/pages/Sheet.jsx*/

import React from 'react'
import { useParams } from 'react-router-dom'
import Logements from '../mocks/logements.json'
import Carousel from '../components/Carousel'
import LeftBox from '../components/LeftBox'
import RightBox from '../components/RightBox'
import Description from '../components/Description'
import Equipment from '../components/Equipment'

function Sheet() {
   const { id } = useParams()
   const logement = Logements.find((l) => l.id === id)

   return (
      <div className="K-Sheet" key={id}>
         <Carousel Picture={logement.pictures} />
         <div className="K-Sheet__keywords k-keywords">
            <LeftBox
               title={logement.title}
               location={logement.location}
               tags={logement.tags}
            />
            <RightBox
               name={logement.host.name}
               picture={logement.host.picture}
               rating={logement.rating}
            />
         </div>
         <div className="K-Sheet__info k-info">
            <Description description={logement.description} />
            <Equipment key={logement.equipments} equipments={logement.equipments} />
         </div>
      </div>
   )
}

export default Sheet
