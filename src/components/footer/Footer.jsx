import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
<ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
</ul>

      <div className="footer__socials">
          <a href="https://www.linkedin.com/in/troy-l-nelson-/" target="_blank"><BsLinkedin className= 'footer__logo' target='_blank'/></a>
          <a href="https://github.com/tnelson2016" target="_blank"><FaGithub className= 'footer__logo' target='_blank' /></a>
      </div>   
      <div className="footer__copyright">
        <small>Developed and Designed by Troy Nelson</small>
      </div>
    </footer>
  )
}

export default Footer