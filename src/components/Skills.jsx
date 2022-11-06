/* Skills 🎭 src/components/Skills.jsx */

import React from 'react'
import ArrowUp from '../assets/icons/arrowUp.svg'

const Skills = () => {
   return (
      <section className="K-Skills">
         <article className="K-Skills__article">
            <div className="K-Skills__article__statement">
                  <h3>Fiabilité</h3>
                  <img src={ ArrowUp } alt="Flèche vers le haut" />
            </div>
            <div className='K-Skills__article__info'>
                  <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
            </div>
         </article>
         <article className="K-Skills__article">
            <div className="K-Skills__article__statement">
                  <h3>Respect</h3>
                  <img src={ ArrowUp } alt="Flèche vers le haut" />
            </div>
            <div className='K-Skills__article__info'>
                  <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
         </article>
         <article className="K-Skills__article">
            <div className="K-Skills__article__statement">
                  <h3>Service</h3>
                  <img src={ ArrowUp } alt="Flèche vers le haut" />
            </div>
            <div className='K-Skills__article__info'>
                  <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </div>
         </article>
         <article className="K-Skills__article">
            <div className="K-Skills__article__statement">
                  <h3>Sécurité</h3>
                  <img src={ ArrowUp } alt="Flèche vers le haut" />
            </div>
            <div className='K-Skills__article__info'>
                  <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
         </article>
      </section>
   )
}

export default Skills
