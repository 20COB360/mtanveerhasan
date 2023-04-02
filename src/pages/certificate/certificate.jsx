import React from 'react'
import unstop from '../../attachments/unstop.png'
import web from '../../attachments/web-cert.png'
import './cert.scss'

export default function Certificate() {
  return (
    <div className='cert-container'>
      <div className="certificate">
        <h3 className="heading">Flipkart Grid 4.0</h3>
        <img src={unstop} alt="Unable to Load" className="cert-img" />
      </div>
      <div className="certificate">
        <h3 className="heading">Web Development</h3>
        <img src={web} alt="Unable to Load" className="cert-img" />
      </div>
    </div>
  )
}
