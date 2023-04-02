import React from 'react'
import './project.scss';
import SkillCard from '../../components/skills/skill-card'


import image1 from '../../project-images/d1.png'
import image2 from '../../project-images/d2.png'
import image3 from '../../project-images/d3.png'
import image4 from '../../project-images/d4.png'
import image5 from '../../project-images/d5.png'
import image6 from '../../project-images/d6.png'


function showgallery() {
  let view = document.getElementById('gallery')
  view.classList.toggle('display')
}
export default function Dictionary() {
  return (
    <>
      <div className="project">
        <div className="title">
          <h2>Dictionary</h2>
        </div>

        <div className="details">
          <div className="cover-img">
            <img src={image5} alt="Unable to Load" />
          </div>
          <div className="wrapper">
            {/* <div className="link">
              <a href="https://raleighliterarysociety.com/" target='_blank' rel="noreferrer">Visit Site -&gt;</a>
            </div> */}
            <div className="description">
              <p>This dictionary project is designed to provide a user-friendly interface for accessing and managing a collection of words and their definitions. The project was developed using <span>HTML</span>, <span>PHP</span>, <span>CSS</span>, <span>JS</span>, and <span>MySQL</span> on <span>XAMPP</span> server, allowing for basic <span>CRUD</span> (create, read, update, delete) operations.</p>
              <p>This dictionary app allows users to search for a specific word or browse through the entire collection. The app displays the definition of the word and allows users to add, edit, or delete words as needed.</p>
              <p>By integrating different technologies, this project creates a powerful and efficient solution that enables users to manage a collection of words easily. Our project showcases the capabilities of web developments.</p>
            </div>
          </div>
        </div>
        <button className='gallery-btn' onClick={() => showgallery()}>View Gallery</button>
        <div className="alpha gallery" id='gallery'>
          <img src={image4} alt="Unable to Load" className='grid-column-span-2' />
          <img src={image1} alt="Unable to Load" className='grid-column-span-2' />
          <img src={image3} alt="Unable to Load" className='grid-column-span-2' />
          <img src={image2} alt="Unable to Load" className='grid-column-span-2' />
          <img src={image6} alt="Unable to Load" className='grid-column-span-2' />
          <img src={image5} alt="Unable to Load" className='grid-column-span-2' />
        </div>
        <h2>Skills Used</h2>
        <div className="tech-used">
          <SkillCard
            image='js.png'
            title='JavaScript'
          /><SkillCard
            image='mysql.png'
            title='MySQL'
          /><SkillCard
            image='php.png'
            title='PhP'
          /><SkillCard
            image='html.png'
            title='HTML'
          /><SkillCard
            image='css.png'
            title='CSS'
          />
        </div>
      </div>
    </>
  )
}
