// ApartList 📜 src/components/ApartList.jsx

import React from 'react'
import '../styles/index.css'
import { Aparts } from '../mocks/Aparts'
// import ApartItem from '../ApartItem/index'

function ApartList() {
   const descriptions = Aparts.reduce(
      (acc, apart) =>
         acc.includes(apart.description) ? acc : acc.concat(apart.description),
      []
   )

   return (
      <div className="k-favorits-list">
         <ul>
            {descriptions.map((desc) => (
               <li key={desc}>{desc}</li>
            ))}
         </ul>
         <ul className="k-apart-list">
            {Aparts.map(
               ({
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
               }) => (
                  <div key={id}>
                     <ApartItem
                        id={id}
                        title={title}
                        cover={cover}
                        pictures={pictures}
                        description={description}
                        host={host}
                        rating={rating}
                        location={location}
                        equipments={equipments}
                        tags={tags}
                     />
                  </div>
               )
            )}
         </ul>
      </div>
   )
}

export default ApartList
