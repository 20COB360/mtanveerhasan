import React from 'react'
import './project.scss';
import SkillCard from '../../components/skills/skill-card'

import image1 from '../../project-images/c1.png'
import image2 from '../../project-images/c2.png'
import image3 from '../../project-images/c3.png'

function showgallery() {
  let view = document.getElementById('gallery')
  view.classList.toggle('display')
}
export default function Calc() {
  return (
    <>
      <div className="project">
        <div className="title">
          <h2>Calculator</h2>
        </div>
        
        <div className="details">
          <div className="cover-img">
            <img src={image2} alt="Unable to Load" />
          </div>
          <div className="wrapper">
            {/* <div className="link">
              <a href="https://raleighliterarysociety.com/" target='_blank' rel="noreferrer">Visit Site -&gt;</a>
            </div> */}
            <div className="description">
              <h4>Calculator</h4>
              <p>A simple <span>HTML</span>, <span>CSS</span> and <span>JavaScript</span> based calculator.</p>
              <p>It performs basic addition, subtraction, multiplicaion and division operations.</p>
            </div>
          </div>
        </div>
        <button className='gallery-btn' onClick={() => showgallery()}>View Gallery</button>
        <div className="gallery" id='gallery'>
          <img src={image2} alt="Unable to Load" className='grid-column-span-2' />
          <img src={image1} alt="Unable to Load" />
          <img src={image3} alt="Unable to Load" className='grid-column-span-2' />
        </div>
        <h2>Skills Used</h2>
        <div className="tech-used">
        <SkillCard
            image='js.png'
            title='JavaScript'
          />
          <SkillCard
            image='html.png'
            title='HTML'
          />
          <SkillCard
            image='css.png'
            title='CSS'
          />
        </div>
      </div>
    </>
  )
}
