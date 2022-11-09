// ApartProperty 🈴 src/components/ApartProperty.jsx

import React from 'react'
import '../css/index.css'
import ApartScore from '../components/ApartScore'
// import Aparts from '../mocks/Aparts'

function handleClick(apartTitle) {
   alert(`Vous allez visiter ${apartTitle} ? Bienvenue à Kasa ✨🏡✨`)
}

function ApartProperty({
   id,
   title,
   cover,
   pictures,
   description,
   host,
   rating,
   location,
   equipments,
   tags,
}) {
   return (
      <li key={id} className="k-apart-item" onClick={handleClick(title)}>
         <img
            className="k-apart-item-cover"
            src={cover}
            alt={`${title} cover`}
         />
         {title}
         <div>
            <ApartScore scaleRate />
         </div>
      </li>
   )
}

export default ApartProperty
