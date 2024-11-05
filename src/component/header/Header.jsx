
import './Header.css'
import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Samuel Okolie</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials /> 

        <div className="me">
          <img src="/1730466831234.png" alt="" />

          {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header