import React from 'react'
import './project.scss';
import SkillCard from '../../components/skills/skill-card'

import image1 from '../../project-images/iot1.png'
import image2 from '../../project-images/iot2.png'
import image3 from '../../project-images/iot3.png'
import image4 from '../../project-images/iot4.png'
import image5 from '../../project-images/iot5.png'
import image6 from '../../project-images/iot6.png'
import image7 from '../../project-images/iot7.png'
import image8 from '../../project-images/iot8.png'

function showgallery() {
  let view = document.getElementById('gallery')
  view.classList.toggle('display')
}
export default function Hms() {
  return (
    <>
      <div className="project">
        <div className="title">
          <h2>IOT Based Health Monitoring System</h2>
        </div>
        
        <div className="details">
          <div className="cover-img">
            <img src={image4} alt="Unable to Load" />
          </div>
          <div className="wrapper">
            {/* <div className="link">
              <a href="https://raleighliterarysociety.com/" target='_blank' rel="noreferrer">Visit Site -&gt;</a>
            </div> */}
            <div className="description">
              <h4>An IOT based application to measure pulse rate and temperature.</h4>
              <p>This IoT project is designed to measure the pulse rate and temperature of the human body using various sensors connected to an <span>Arduino</span> microcontroller. The sensors provide accurate and reliable data, which is then transmitted to <span>Google Firebase</span> for storage and retrieval. This allows for real-time data management and synchronization with the app created on <span>Android Studio</span> using <span>Flutter</span>.</p>
              <p>The app provides a user-friendly interface for accessing the collected data, enabling users to monitor their health and wellness. The app displays the pulse rate and temperature of the human body, making it easy to track changes over time.</p>
              <p>By integrating different technologies, we have created a powerful and innovative solution that has potential applications in healthcare, fitness, and sports. This project showcases the capabilities of IoT technology and demonstrates how it can be used to improve people's lives.</p>
            </div>
          </div>
        </div>
        <button className='gallery-btn' onClick={() => showgallery()}>View Gallery</button>
        <div className="gallery" id='gallery'>
          <img src={image4} alt="Unable to Load" className='grid-column-span-3' />
          <img src={image1} alt="Unable to Load" className='grid-column-span-2 grid-row-span-2' />
          <img src={image3} alt="Unable to Load" className='grid-column-span-2 grid-row-span-2' />
          <img src={image6} alt="Unable to Load" />
          <img src={image2} alt="Unable to Load" className='grid-column-span-3' />
          <img src={image5} alt="Unable to Load" className='grid-column-span-2' />
          <img src={image8} alt="Unable to Load" />
          <img src={image7} alt="Unable to Load" className='grid-column-span-2' />
        </div>
        <h2>Skills Used</h2>
        <div className="tech-used">
        <SkillCard
          image = 'flutter.png'
          title = 'Flutter'
        />
        <SkillCard
          image = 'androidstudio.png'
          title = 'Android Studio'
        />
        <SkillCard
          image = 'arduino.png'
          title = 'Arduino'
        />
        <SkillCard
          image = 'firebase.png'
          title = 'Firebase'
        />
        </div>
      </div>
    </>
  )
}
