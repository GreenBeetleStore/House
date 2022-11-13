import React from 'react'
import ArrowUp from '../assets/icons/arrowUp.svg'
import Star from '../assets/icons/star.svg'

const FitxaSheet = () => {
   return (
      <div>
         <div className="K-Sheet__keywords k-keywords">

            <div className="K-Sheet__keywords__leftBox k-leftBox">
               <div className="K-Sheet__keywords__leftBox__title k-title">
                  <h2>Cozy loft on the Canal Saint-Martin</h2>
               </div>
               <div className="K-Sheet__keywords__leftBox__region k-region">
                  <p>Paris, Île-de-France</p>
               </div>

               <div className="K-Sheet__keywords__leftBox__labels k-labels">
                  <ul className="K-Sheet__keywords__leftBox__labels--list">
                     <li>Cozy</li>
                     <li>Canal</li>
                     <li>Paris 10</li>
                  </ul>
               </div>
            </div>

            <div className="K-Sheet__keywords__rightBox k-rightBox">
               <div className="K-Sheet__keywords__rightBox__owner k-owner">
                  <p>Alexandre Dumas</p>
                  <div className="K-Sheet__keywords__rightBox__thumbnail k-thumbnail"></div>
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
                  <p>
                     Vous serez à 50m du canal Saint-martin où vous pourrez
                     pique-niquer l'été et à côté de nombreux bars et
                     restaurants. Au cœur de Paris avec 5 lignes de métro et de
                     nombreux bus. Logement parfait pour les voyageurs en solo
                     et les voyageurs d'affaires. Vous êtes à1 station de la
                     gare de l'est (7 minutes à pied).{' '}
                  </p>
               </div>
            </div>
            <div className="K-Sheet__info__article">
               <div className="K-Sheet__info__article__tab">
                  <h4>Équipements</h4>
                  <img src={ArrowUp} alt="Flèche vers le haut" />
               </div>
               <div className="K-Sheet__info__article__description">
                  <p>
                     Climatisation
                     <br />
                     Wi-Fi
                     <br />
                     Cuisine
                     <br />
                     Espace de travail
                     <br />
                     Fer à repasser
                     <br />
                     Sèche-cheveux
                     <br />
                     Cintres{' '}
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FitxaSheet
