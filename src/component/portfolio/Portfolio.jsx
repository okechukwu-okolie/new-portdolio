

import './Portfolio.css'
import React from 'react'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="/country.png" alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
         <a href="http://github.com">Github</a>
         <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>

        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="/country.png" alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
         <a href="http://github.com">Github</a>
         <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>

        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="/country.png" alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
         <a href="http://github.com">Github</a>
         <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>

        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="/country.png" alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
         <a href="http://github.com">Github</a>
         <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="/country.png" alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
         <a href="http://github.com">Github</a>
         <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>

        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="/country.png" alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
         <div className="portfolio__item-cta">
         <a href="http://github.com">Github</a>
         <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>

        </article>
      </div>
    </section>
  )
}

export default Portfolio