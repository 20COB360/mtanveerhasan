import React from 'react'
import './footer.scss'

import github from '../../static-images/github-mark-white.png'
import linkedin from '../../static-images/linkedin-logo-png-2026.png'
import gmail from '../../static-images/logo-gmail-9952.png'
export default function Footer() {
  return (
    <div class="footer">
      <div class="link-box">
        <a href="https://github.com/20COB360" target="_blank"  rel="noreferrer"><img class="footer-img link-img"
          src={github} alt="Unable to load"/></a>
      </div>
      <div class="link-box">
        <a href="https://www.linkedin.com/in/mtanveerhasan2001/" target="_blank"  rel="noreferrer"><img class="footer-img link-img"
          src={linkedin} alt="Unable to load"/></a>
      </div>
      <div class="link-box">
        <a href="mailto:mtanveerhasan2001@gmail.com" target="_blank"  rel="noreferrer"><img class="footer-img link-img"
          src={gmail} alt="Unable to load"/></a>
      </div>
    </div>
  )
}
