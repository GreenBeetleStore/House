import React from 'react'
import ArrowUp from '../assets/icons/arrowUp.svg'
// import ArrowDown from '../assets/icons/arrowDown.svg'
import Star from '../assets/icons/star.svg'

// Fitxer COMODIN només d'estructura.
function FitxaSheet({ title, description, host, rating, location, equipments, tags}) {
   return (
      <div>
         <div className="K-Sheet__keywords k-keywords">

            <div className="K-Sheet__keywords__leftBox k-leftBox">
               <div className="K-Sheet__keywords__leftBox__title k-title">
                  <h2>{title}</h2>
               </div>
               <div className="K-Sheet__keywords__leftBox__region k-region">
                  <p>{location}</p>
               </div>

               <div className="K-Sheet__keywords__leftBox__labels k-labels">
                  <ul className="K-Sheet__keywords__leftBox__labels--list">
                     <li>{tags}</li>
                  </ul>
               </div>
            </div>

            <div className="K-Sheet__keywords__rightBox k-rightBox">
               <div className="K-Sheet__keywords__rightBox__owner k-owner">
                  <p>{host.name}</p>
                  {/* <div className="K-Sheet__keywords__rightBox__thumbnail k-thumbnail">{host.picture}</div> */}
               </div>
               <div className="K-Sheet__keywords__rightBox__starScore">
                  <img src={Star} alt="étoile" />
                  <img src={Star} alt="étoile" />
                  <img src={Star} alt="étoile" />
                  <img src={Star} alt="étoile" background="$colorEstrella" />
                  <img src={Star} alt="étoile" />
               </div>
            </div>
            
         </div>

         <div className="K-Sheet__info k-info">

            <div className="K-Sheet__info__article">
               <div className="K-Sheet__info__article__tab">
                  <h4>Description</h4>
                  <img src={ArrowUp} alt="Flèche vers le haut" />
               </div>
               <div className="K-Sheet__info__article__description">
                  <p>{ description }</p>
               </div>
            </div>

            <div className="K-Sheet__info__article">
               <div className="K-Sheet__info__article__tab">
                  <h4>Équipements</h4>
                  <img src={ArrowUp} alt="Flèche vers le haut" />
               </div>
               <div className="K-Sheet__info__article__description">
                  <p>{ equipments }</p>
               </div>
            </div>
            
         </div>
      </div>
      )
}

export default FitxaSheet
