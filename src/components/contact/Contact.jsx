import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import  { useRef } from 'react'
import emailjs from 'emailjs-com'
import Swal from "sweetalert2"  


const Contact = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0ul327f', 'template_e17ecgf', form.current, '8DfxUIpOcrYNNruh_')

      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully!'
        })
        
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: "Oooopps, Something Went Wrong",
          text: error.text,
        })
      });
    e.target.reset()
  }
  
  return (
    <section id="contact">
      <h2>Contact Me</h2>
    
      
      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>troynelson2009@gmail.com</h5>
            <a href="mailto:troynelson2023@gmail.com" target="_blank"> Send a message</a>
          </article>

           <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Cell Phone</h4>
            <h5>803-427-3954</h5>
            <a href="tel:8034273954" target="_blank">Call Me</a>
          </article>

           <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Troy Nelson</h5>
            <a href="https://m.me/troy.nelson.94" target="_blank">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder= 'Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      
    </section>
  )
}

export default Contact