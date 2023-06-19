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
      <li><a href="#Experience">Experience</a></li>
      <li><a href="#Portfolio">Portfolio</a></li>
      <li><a href="#Contact">Contact</a></li>
</ul>

      <div className="footer__socials">
          <a href="https://linkedin.com" target="_blank"><BsLinkedin className= 'footer__logo' target='_blank'/></a>
          <a href="https://github.com" target="_blank"><FaGithub className= 'footer__logo' target='_blank' /></a>
      </div>   
      <div className="footer__copyright">
        <small>Developed and Designed by Troy Nelson</small>
      </div>
    </footer>
  )
}

export default Footer