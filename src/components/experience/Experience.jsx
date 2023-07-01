import React from 'react'
import './experience.css'
import{ BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
             <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />   
              <div><h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/*END of Frontend*/}


        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                 <h4>Node JS </h4>
              <small className="text-light">Experienced</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>

              <div>
                <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
              </div>


            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>

              <div>

                <h4>Django</h4>
              <small className="text-light">Intermediate</small>
              </div>
              
            </article>
             <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>

              <div>
                        <h4>AWS</h4>
              <small className="text-light">Experienced</small>
      </div>


            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>

              <div>
                  <h4>MYSQL</h4>
              <small className="text-light">Intermediate</small>
            </div>

            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>

              <div>
                <h4>Java</h4>
              <small className="text-light">Experienced</small>
              </div>
             
            </article>

          </div>
        </div>   
          
          </div>


    
    </section>
  )
}

export default Experience