/* Gallery 🍱 src/components/Gallery.jsx */

import React from 'react'
import logements from '../mocks/logements.json'
import Card from '../components/Card'

const Gallery = () => {
   return (
      <section className='K-Gallery'>
         <ul>
            {logements.map((logement) => (
               <Card key={logement.id} logement={logement} />
            ))}
         </ul>
      </section>
   )
}

export default Gallery
