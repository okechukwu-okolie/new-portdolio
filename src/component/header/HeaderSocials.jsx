import {FaLinkedinIn} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

import React from 'react'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank'><FaLinkedinIn /></a>  
        <a href="https://facebook.com" target='_blank'><FaFacebookF /></a>
        <a href="https://instagram.com" target='_blank'><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials