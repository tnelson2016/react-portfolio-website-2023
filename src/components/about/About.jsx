import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { TiSocialInstagram } from 'react-icons/ti'
const About = () => {
  return (
    <section id='about'>
      <h2>About Me </h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
           <img src={ME} alt='About Image' />

      </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className= 'about__icon'/> 
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

              <article className='about__card'>
              <VscFolderLibrary className= 'about__icon'/> 
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
            
            <article className='about__card'>
              <TiSocialInstagram className= 'about__icon'/> 
              <h5>Education</h5>
                <small>Lander University</small>
                <br/>
                <small>The Citadel Graduate College</small>
                <br/>
              <small>Jack Russell Coding School</small>
    
                        </article>
          </div>

          <p>Im a results-driven, self-starting software engineer with a
            passion for creating innovative solutions. Seeking a challenging
            position where I can leverage my technical skill in software development,
            problem solving and strong collaboration abilities to develop high-quality software applications that drive business growth and enhance
            user experience.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About