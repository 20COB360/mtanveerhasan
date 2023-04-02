import React from 'react'
import '../../pages/projects/project.scss'
import piclub from '../../static-images/piclub.png'
export default function Piclub() {
  return (
    <div className="project">
            <div className="title">
                <h2>Web Developer at PI Club, Aligarh Muslim University </h2>
            </div>

            <div className="details">
                <div className="cover-img">
                    <img src={piclub} alt="Unable to Load" />
                </div>
                <div className="wrapper">
                    <div className="link">
                        <a href="https://www.linkedin.com/company/pi-club-zhcet-amu/mycompany/" target='_blank' rel="noreferrer">Visit Page -&gt;</a>
                    </div>
                    <div className="description">
                        <p>As a team member in PI Club AMU Web Development team, our work is to create a fully working site for the Club.</p>
                        <p>This site will be used to connect students with alumini and provide them different placement and internship related information.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
