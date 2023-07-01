import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title:"Troy's Fitness App",
    github:"https://github.com/tnelson2016/gym_exercises",
    demo:'https://tln-gym.netlify.app/'  
  },
   {
    id: 2,
    image: IMG2,
    title:'Person Using Black Samsung Tablet',
     github: "https://github.com",
    demo:'https://www.pexels.com/photo/photo-of-imac-near-macbook-1029757/'
  },
  {
    id: 3,
    image: IMG3,
    title:'Person Using Black Tablet, Holding Coffee',
    github: "https://github.com",
    demo: 'https://www.pexels.com/photo/coffee-communication-computer-connection-461073/'
  },
  {
    id: 4,
    image: IMG4,
    title:'Person Using Black Photo of Imac',
    github:"https://github.com",
    demo:'https://www.pexels.https://www.https://www.pexels.com/photo/photo-of-imac-near-macbook-1029757/.com/https://www.pexels.com/photo/coffee-communication-computer-connection-461073//black-samsung-tablet-computer-106344//photo/person-using-black-and-white-smartphone-and-holding-blue-card-230544/'  
  },
   {
    id: 5,
    image: IMG5,
    title:'Person Woman Sitting Using Macbook',
    github: "https://github.com",
    demo:'https://www.pexels.com/photo/photo-of-imac-near-macbook-1029757/'
  },
    {
    id: 6,
    image: IMG6,
    title:'White Ipad on Table near coffee',
    github: "https://github.com",
     demo:'https://www.pexels.com/photo/white-ipad-on-table-430546/'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
    
      <div className="container portfolio__container">
{
        data.map(({id, image, title, github, demo}) => {
        return (
           <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
          <div className="portfolio__item-cta">
              <a href={github} className= 'btn' target= '_blank'>Github</a>
              <a href = {demo} className='btn btn-primary' target= '_blank'>Live Demo</a>
          </div>
        </article>
        )
})
}
          

        
        

          

         

         
      </div>
      
    
    </section>
    
  )
}

export default Portfolio