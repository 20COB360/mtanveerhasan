import React from 'react'
import '../../pages/projects/project.scss'
import amutc from '../../static-images/amutc.png'

export default function Amutc() {
  return (
    <div className="project">
            <div className="title">
                <h2>Web Developer at Aligarh Muslim University Tech Conference 2023</h2>
            </div>

            <div className="details">
                <div className="cover-img">
                    <img src={amutc} alt="Unable to Load" />
                </div>
                <div className="wrapper">
                    <div className="link">
                        <a href="https://www.amutechconference.org/" target='_blank' rel="noreferrer">Visit Site -&gt;</a>
                    </div>
                    <div className="description">
                        <p>A website for Aligarh Muslim University Tech Conference scheduled to be held in 2023.</p>
                        <p>The website is developed using WIX and my job was to make website responsive and optimize it.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
