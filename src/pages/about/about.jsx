import React from 'react'
import './about.scss'
import meta from '../../static-images/metaverse.png'

export default function About() {
  return (
    <div>
      <div className="about-container">
        <div className="brief">
          <div className="data">
            <p>Hi, I am Tanveer, a passionate computer engineering undergraduate at Zakir Husain College of Engineering and Technology, Aligarh Muslim University.</p>
            <br />
            <p> With a love for coding and an aptitude for technology, I have become well-versed in a variety of programming languages such as C, C++, Java, Python, and C#.</p>
            <p>As a Full-Stack web developer, I have honed my skills in a range of tools and technologies such as React, PHP, MongoDB, MySQL, ExpressJS, NodeJS, Html, JavaScript, CSS, and SASS.</p>
            <p>I also have experience with Unity game engine and app development, which has given me a deeper understanding of game development and the technical skills necessary to create engaging gaming experiences.</p>
          </div>
        </div>
        <div className="interests">
          <img src={meta} alt="Unable to Load" />
          <div className="data">
            <p>My interests extend beyond software development as I am an avid computer gamer.</p>
            <p>I am planning to pursue my passion for gaming by combining virtual reality technology with gaming to create a more immersive gaming experience. I am a team player who enjoys working collaboratively and is always approachable. I have the skills, passion, and teamwork abilities to succeed in game development.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
