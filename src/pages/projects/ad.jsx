import React from 'react'
import './project.scss';
import SkillCard from '../../components/skills/skill-card'

import image1 from '../../project-images/a1.png'
import image2 from '../../project-images/a2.png'
import image3 from '../../project-images/a3.png'
import image4 from '../../project-images/a4.png'
import image5 from '../../project-images/a5.png'
import image6 from '../../project-images/a6.png'
import image7 from '../../project-images/a7.png'
import image8 from '../../project-images/a8.png'
import image9 from '../../project-images/a9.png'
import image10 from '../../project-images/a10.png'
import image11 from '../../project-images/a11.png'

function showgallery() {
  let view = document.getElementById('gallery')
  view.classList.toggle('display')
}
export default function Ad() {
  return (
    <>
      <div className="project">
        <div className="title">
          <h2>Anime Review</h2>
        </div>

        <div className="details">
          <div className="cover-img">
            <img src={image7} alt="Unable to Load" />
          </div>
          <div className="wrapper">
            {/* <div className="link">
              <a href="https://raleighliterarysociety.com/" target='_blank' rel="noreferrer">Visit Site -&gt;</a>
            </div> */}
            <div className="description">
              <h4>CURRENTLY ONGOING</h4>
              <p>This anime review site is designed to provide a platform for anime enthusiasts to share their reviews and opinions about their favourite anime. The project was developed using <span>NodeJs</span>, <span>MongoDB</span>, <span>Sass</span>, <span>React</span>, and <span>ExpressJS</span> allowing for a smooth and efficient user experience.</p>
              <p>This site allows users to browse through a collection of anime and read reviews provided by other users. Users can also add anime to their wishlist and write their reviews. The site features a user login system that ensures the security and privacy of users' data.</p>
              <p>By integrating different technologies, we have created a powerful and innovative solution that connects anime enthusiasts from around the world. Our project showcases the capabilities of web development and demonstrates how it can be used to create an engaging community.</p>
            </div>
          </div>
        </div>
        <button className='gallery-btn' onClick={() => showgallery()}>View Gallery</button>
        <div className="gallery" id='gallery'>
          <img src={image4} alt="Unable to Load" className='grid-column-span-3' />
          <img src={image11} alt="Unable to Load" className='grid-column-span-2 grid-row-span-2' />
          <img src={image1} alt="Unable to Load" className='grid-column-span-3 ' />
          <img src={image5} alt="Unable to Load" />
          <img src={image6} alt="Unable to Load" />
          <img src={image2} alt="Unable to Load" className='grid-column-span-3' />
          <img src={image3} alt="Unable to Load" className='grid-column-span-3' />
          <img src={image8} alt="Unable to Load" className='grid-column-span-2' />
          <img src={image10} alt="Unable to Load" className='grid-column-span-2' />
          <img src={image7} alt="Unable to Load" className='grid-column-span-3' />
          <img src={image9} alt="Unable to Load" className='grid-column-span-3' />
        </div>
        <h2>Skills Used</h2>
        <div className="tech-used">
          <SkillCard
            image='react.png'
            title='React'
          />
          <SkillCard
            image='mongodb.png'
            title='MongoDB'
          />
          <SkillCard
            image='expressjs.png'
            title='ExpressJs'
          />
          <SkillCard
            image='nodejs.png'
            title='NodeJs'
          />
          <SkillCard
            image='sass.png'
            title='SASS'
          />
        </div>
      </div>
    </>
  )
}
