import React from 'react'
import './project.scss';
import SkillCard from '../../components/skills/skill-card'

import image1 from '../../project-images/rls1.png'
import image2 from '../../project-images/rls2.png'
import image3 from '../../project-images/rls3.png'
import image4 from '../../project-images/rls4.png'
import image5 from '../../project-images/rls5.png'
import image6 from '../../project-images/rls6.png'
import image7 from '../../project-images/rls7.png'
import image8 from '../../project-images/rls8.png'
import image9 from '../../project-images/rls9.png'
import image10 from '../../project-images/rls10.png'
function showgallery() {
  let view = document.getElementById('gallery')
  view.classList.toggle('display')
}
export default function Rls() {
  return (
    <>
      <div className="project">
        <div className="title">
          <h2>Website for Raleigh Literary Society</h2>
        </div>

        <div className="details">
          <div className="cover-img">
            <img src={image4} alt="Unable to Load" />
          </div>
          <div className="wrapper">
            <div className="link">
              <a href="https://raleighliterarysociety.com/" target='_blank' rel="noreferrer">Visit Site -&gt;</a>
            </div>
            <div className="description">
              <p>Successfully designed a fully working site for Raleigh Literary Society, a club under Department of English, AMU.</p>
              <p>The site is fully functional where students can submit their articles and admin can approve the articles to be reflected on website.</p>
              <p>The website is built completely from scratch without using any framework. It uses <span>JavaScript</span>, <span>Html</span> and <span>CSS</span> for frontend and <span>MySQL</span>, <span>PhP</span> for database.</p>
            </div>
          </div>
        </div>
        <button className='gallery-btn' onClick={() => showgallery()}>View Gallery</button>
        <div className="gallery" id='gallery'>
          <img src={image4} alt="Unable to Load" className='grid-column-span-2' />
          <img src={image1} alt="Unable to Load" className='grid-column-span-3' />
          <img src={image6} alt="Unable to Load" />
          <img src={image2} alt="Unable to Load" className='grid-column-span-2' />
          <img src={image3} alt="Unable to Load" className='grid-column-span-2' />
          <img src={image5} alt="Unable to Load" className='grid-column-span-2' />
          <img src={image8} alt="Unable to Load" />
          <img src={image7} alt="Unable to Load" className='grid-column-span-2' />
          <img src={image9} alt="Unable to Load" className='grid-column-span-2' />
          <img src={image10} alt="Unable to Load" className='grid-column-span-2' />
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
