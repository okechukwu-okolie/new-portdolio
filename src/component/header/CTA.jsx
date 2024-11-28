

import React from 'react'
import CV from '/OKOLIE-Okechukwu-Samuel-cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <div> <a href={CV} download className='btn'>Download CV</a></div>
       
       <div> <a href="#contact" className='btn btn-primary '>Let's Talk</a></div>
    </div>
  )
}

export default CTA