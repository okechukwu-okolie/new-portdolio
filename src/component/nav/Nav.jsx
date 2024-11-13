
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { IoIosContacts } from "react-icons/io";
import './Nav.css'
import React from 'react'
import { useState } from "react";

const Nav = () => {
const [activeNav,setActiveNav]=useState('#')

  return (
    <nav> 
      <a href="#" className={activeNav == '#'?'active':''}><FaHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav == '#about'?'active':''}><FaRegUser /></a>
      <a href="#experience"  onClick={()=>setActiveNav('#experience')} className={activeNav == '#experience'?'active':''}><FaBookReader /></a>
      <a href="#portfolio"  onClick={()=>setActiveNav('#portfolio')} className={activeNav == '#portfolio'?'active':''}><GrServices /></a>
      <a href="#contact"  onClick={()=>setActiveNav('#contact')} className={activeNav == '#contact'?'active':''}><IoIosContacts /></a>
    </nav>
  )
}

export default Nav