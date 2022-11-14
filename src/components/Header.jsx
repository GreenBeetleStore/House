/* Header 🤯 src/components/Header.jsx */

import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <header className="K-header">
         <Link to="/">
            <img src={logo} className="K-header__logo" alt="logo" />
         </Link>
         <nav className="K-header__menu">
            <ul className="K-header__menu__ul">
               <li className="K-header__menu__ul__li">
                  <Link to="/">Accueil</Link>
               </li>
               <li className="K-header__menu__ul__li">
                  <Link to="/about">A Propos</Link>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Header
