
import './Experience.css'
import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

const Experience = () => {
  return (
    <section id='experience'>
      <div className='title'> <h5>What Skills I Have</h5>
      <h2>My Experience</h2></div>
     

      <div className='container experience__container'>
        <div className="experience__frontend">
         
          <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <FaCircleCheck />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
          </article>

          <article className="experience__details">
              <FaCircleCheck />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
          </article>

          <article className="experience__details">
              <FaCircleCheck />
             <div>
             <h4>JAVASCRIPT</h4>
             <small className='text-light'>Intermediate</small>
             </div>
          </article>

          <article className="experience__details">
              <FaCircleCheck />
              <div>
              <h4>REACTJS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
          </article>

          <article className="experience__details">
              <FaCircleCheck />
              <div>
              <h4>TAILWIND</h4>
              <small className='text-light'>Beginner</small>
              </div>
          </article>

          <article className="experience__details">
              <FaCircleCheck />
              <div>
              <h4>TYPESCRIPT</h4>
              <small className='text-light'>Beginner</small>
              </div>
          </article>
          </div>
        </div>


        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <FaCircleCheck />
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Beginner</small>
              </div>
          </article>

          <article className="experience__details">
              <FaCircleCheck />
             <div>
             <h4>MongoDB</h4>
             <small className='text-light'>Beginner</small>
             </div>
          </article>

          <article className="experience__details">
              <FaCircleCheck />
              <div>
              <h4>PYTHON</h4>
              <small className='text-light'>Intermediate</small>
              </div>
          </article>

          <article className="experience__details">
              <FaCircleCheck />
             <div>
             <h4>MYSQL</h4>
             <small className='text-light'>Beginner</small>
             </div>
          </article>

          {/* <article className="experience__details">
              <FaCircleCheck />
              <h4>TAILWIND</h4>
              <small className='text-light'>Beginner</small>
          </article> */}

          {/* <article className="experience__details">
              <FaCircleCheck />
              <h4>TYPESCRIPT</h4>
              <small className='text-light'>Beginner</small>
          </article> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience