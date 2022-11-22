/* Sheet 🈴 src/pages/Sheet.jsx*/

import React from 'react'
import { useParams, redirect } from 'react-router-dom'
import logements from '../mocks/logements.json'
import Carousel from '../components/Carousel'
import LeftBox from '../components/LeftBox'
import RightBox from '../components/RightBox'
import InfoSheet from '../components/InfoSheet'

import FitxaSheet from '../components/FitxaSheet'

// ESTRUCTURA 1.

function Sheet() {
   const { sheetId } = useParams();
   const sheet = logements.find((sheet) => sheet.id === sheetId)
   const { pictures, } = sheet
   // const { pictures, title, description, host, rating, location, equipments, tags } = sheet

   return sheet ? (
      <div className="K-Sheet">

         <Carousel 
            pictures={pictures} 
         />

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

// ESTRUCTURA 2.

// function Sheet() {
   
//    return (
//       <div className="K-Sheet">

//       {logements.map( sheet =>
//          <Carousel 
//             pictures={sheet.pictures} 
//          />
//          )}

//          <FitxaSheet />


//          <div className="K-Sheet__keywords k-keywords">
//             {/* <LeftBox /> */}
//             {/* <RightBox /> */}
//          </div>

//          <div className="K-Sheet__info k-info">
//             {/* <InfoSheet /> */}
//          </div>
//       </div>
//    ) 
// }

export default Sheet
