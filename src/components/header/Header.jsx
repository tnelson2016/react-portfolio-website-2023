import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profilepic1.jpg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Troy Nelson</h1>
        <h1 className="text-light">Fullstack Developer</h1>
        <CTA />
        <HeaderSocials/>
        <div className= "me">
          <img src={ME} alt="me" />
          <a href = "#contact" className='scroll__down'>Scroll Down</a>

        </div>
      </div>
    </header>
  )
}

export default Header