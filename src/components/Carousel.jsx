/* Carousel 🎠 src/components/Carousel.jsx */

import { useState } from 'react'
import ArrowRight from '../assets/icons/arrowRight.svg'
import ArrowLeft from '../assets/icons/arrowLeft.svg'

function Carousel({pictures}) {

   const [isExpose, setIsExpose] = useState(0)

   const previousPicture = () => {
      const firstPicture = isExpose === 0;
      const newIndex = firstPicture ? pictures.length - 1 : isExpose - 1
      setIsExpose(newIndex)
   }
   const nextPicture = () => {
      const lastPicture = isExpose === pictures.length - 1
      const newIndex = lastPicture ? 0 : isExpose + 1
      setIsExpose(newIndex)
   }

   return isExpose === 0 && 1 === pictures.length ? (
      <section className="K-Sheet__carousel k-carousel">
         <div className="K-Sheet__carousel__photo k-carousel__photo" style={{ backgroundImage: `url(${pictures[isExpose]})` }} ></div>
      </section>
   ) : (
      <section className="K-Sheet__carousel k-carousel">
         <div className="K-Sheet__carousel__photo k-carousel__photo" style={{ backgroundImage: `url(${pictures[isExpose]})` }} ></div>
         <div className="K-Sheet__carousel__arrows k-arrows">
            {/* <div className="K-Sheet__carousel__arrows__arrowLeft k-carousel__arrowLeft"> */}
               <img src={ArrowLeft} alt="flèche gauche" onClick={previousPicture} />
            {/* </div> */}
            {/* <div className="K-Sheet__carousel__arrows__arrowRight k-carousel__arrowRight"> */}
               <img src={ArrowRight} alt="flèche droite" onClick={nextPicture} />
            {/* </div> */}
         </div>
         <div className="K-Sheet__carousel__pageNumber k-carousel__pageNumber">
            <p>{isExpose + 1}/{pictures.length}</p>
         </div>
      </section>
   )
}

export default Carousel
