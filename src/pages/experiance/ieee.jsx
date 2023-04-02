import React from 'react'
import '../../pages/projects/project.scss'
import ieee from '../../static-images/ieee.png'
export default function Ieee() {
    return (
        <div className="project">
            <div className="title">
                <h2>Co-Coordinator of Web and Tech at IEEE Aligarh Muslim University Student Branch</h2>
            </div>

            <div className="details">
                <div className="cover-img">
                    <img src={ieee} alt="Unable to Load" />
                </div>
                <div className="wrapper">
                    <div className="link">
                        <a href="https://www.linkedin.com/company/ieee-amu-student-branch/?originalSubdomain=in" target='_blank' rel="noreferrer">Visit Page -&gt;</a>
                    </div>
                    <div className="description">
                        <p>As a Co-Coordinator of Web and Tech, my job is to handle every web and tech related events. We organize various competition and events with our team.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
