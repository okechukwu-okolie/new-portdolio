import './Contact.css'
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_07nh3dd', 'template_xr3634e', form.current, {
        publicKey: 'LW---iXM8TMcefiQl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  return (
    <section id='contact'>
      <div className="title">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      </div>

      <div className='container contact__container'>
        <div className="contact__options">
    <article className="contact_option">
    <MdEmail className='contact__option-icon' />
      <h4>Email</h4>
      <h5>okechukwu.okolie.2023@gmail.com</h5>
      <a href="mailto:dummyokechukwu.okolie.2023@gmail.com" target='_blank'> Send a message</a>
    </article>

    

    <article className="contact_option">
    <FaWhatsapp className='contact__option-icon'/>
      <h4>Whatsapp</h4>
      <h5>+2348072676311</h5>
      <a href="https://api.whatspp.com/send?=+2348072676311" target='_blank'> Send a message</a>
    </article>
        </div>
        {/* end of contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name here' required className='contactInput'/>
          <input type="email" name='email' placeholder='Your Email here' required className='contactInput'/>
          <textarea name="message" rows='7' placeholder='Your message' id="" required></textarea>
          <div className='contactButtonDiv'>
          <button type='submit' className='btn btn-primary send'> Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact