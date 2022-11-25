/* Sheet 🈴 src/pages/Sheet.jsx*/

import React from 'react'
import { useParams, redirect } from 'react-router-dom'
import Logements from '../mocks/logements.json'
import Carousel from '../components/Carousel'
import FitxaSheet from '../components/FitxaSheet'

// ESTRUCTURA 1️⃣.
//⏬=============⏬

// function Sheet() {
//    const { logementId } = useParams()
//    const logement = Logements.find((logement) => logement.id === logementId)

//    const {
//       pictures,
//       title,
//       description,
//       host,
//       rating,
//       location,
//       equipments,
//       tags,
//    } = logement

//    return logement ? (
//       <div className="K-Sheet">
//          <Carousel Picture={pictures} />

//          <FitxaSheet
//             title={title}
//             description={description}
//             host={host}
//             rating={rating}
//             location={location}
//             equipments={equipments}
//             tags={tags}
//          />
//       </div>
//    ) : (
//       redirect('*')
//    )
// }

// ESTRUCTURA 2️⃣.
//⏬=============⏬

function Sheet() {

   const { id } = useParams()
   const logement = Logements.find (l => l.id === id)

   return (
      <div className="K-Sheet">     
         <Carousel
            key={id}
            Picture={logement.pictures}
         />

         {/* <FitxaSheet /> */}

         {/* <div className="K-Sheet__keywords k-keywords"> */}
            {/* <LeftBox /> */}
            {/* <RightBox /> */}
         {/* </div> */}

         {/* <div className="K-Sheet__info k-info"> */}
            {/* <InfoSheet /> */}
         {/* </div> */}
      </div>
   )
}

export default Sheet
