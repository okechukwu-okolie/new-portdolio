 import React from 'react'
 import './About.css'
 import { FaAward } from "react-icons/fa6";
 import { FaUsers } from "react-icons/fa";
 import { MdOutlineWorkOutline } from "react-icons/md";
 
 const About = () => {
   return (
     <section id='about'>
       <div className='aboutHeading'>
            <h5>
            Get to know
          </h5>
          <h2>About Me</h2>
       </div>
       <div className='container about__container'>
         <div className="about__content">
       <div className="about__cards">
          <article className="about__card">
          <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>9months+</small>
          </article>

          <article className="about__card">
          <MdOutlineWorkOutline className='about__icon'/>
            <h5>Projects</h5>
            <small>5+</small>
          </article>

          <article className="about__card">
          <FaUsers  className='about__icon'/>
            <h5>Clients</h5>
            <small>be the first</small>
          </article>
        </div>


        <p>
        
        I am a passionate FULL STACK DEVELOPER also with formal training  
        in Electrical Electronics Engineering.
        <br />
        I am passionate about developing software based solutions tailored to address clients and users pain-points and 
        maximise users interaction.
        <br />
        I am objective centered, goal driven and a lover of good music and food.
      
      <br />
      <a href="#contact" className='btn btn-primary'>More about Me</a>
        </p>
         </div>
         <div className="about__me">
          <img className='image'  src="/1730466831258.png" alt="" />
         </div>
       </div>
     </section>
   )
 }
 
 export default About