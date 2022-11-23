/* Sheet 🈴 src/pages/Sheet.jsx*/

import React from 'react'
import { useParams, redirect } from 'react-router-dom'
import Logements from '../mocks/logements.json'
import Carousel from '../components/Carousel'
import LeftBox from '../components/LeftBox'
import RightBox from '../components/RightBox'
import InfoSheet from '../components/InfoSheet'

import FitxaSheet from '../components/FitxaSheet'

// ESTRUCTURA 1️⃣. 
//⏬=============⏬

// function Sheet() {
//    const { sheetId } = useParams();
//    const sheet = Logements.find((sheet) => sheet.id === sheetId)

//    const { pictures, title, description, host, rating, location, equipments, tags } = sheet

//    return sheet ? (
//       <div className="K-Sheet">

//          <Carousel Picture={pictures} />

//          <FitxaSheet />


//          <div className="K-Sheet__keywords k-keywords">
//             {/* <LeftBox /> */}
//             {/* <RightBox /> */}
//          </div>

//          <div className="K-Sheet__info k-info">
//             {/* <InfoSheet /> */}
//          </div>
//       </div>
//    ) : (
//       redirect('*')
//    )
// }

// ESTRUCTURA 2️⃣.
//⏬=============⏬

function Sheet() {

   const { id } = useParams()
      
   return (
      <div className="K-Sheet">

      {Logements.map( sheet =>
         <Carousel 
            key={id}
            Picture={sheet.pictures} 
         />
      )}

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
