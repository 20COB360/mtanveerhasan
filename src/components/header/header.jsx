import React from 'react';
import { Link } from "react-router-dom";
import './header.scss';
import img from '../../static-images/tanveer.jpg'
import github from '../../static-images/github-mark-white.png'
import linkedin from '../../static-images/linkedin-logo-png-2026.png'
import gmail from '../../static-images/logo-gmail-9952.png'
import resume from '../../attachments/MyResume.pdf'

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/about"> MOHD TANVEER HASAN</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Mohd Tanveer Hasan</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div className="image-box">
              <div className="profile-box">
                <img className="profile-img" src={img} alt="" />
              </div>
              <div className="my-links">
                <div className="link-box">
                  <Link to="https://github.com/20COB360" target="_blank"><img className="link-img"
                    src={github} alt="Unable to load" /></Link>
                </div>
                <div className="link-box">
                  <Link to="https://www.linkedin.com/in/mtanveerhasan2001/" target="_blank"><img
                    className="link-img" src={linkedin}
                    alt="Unable to load" /></Link>
                </div>
                <div className="link-box">
                  <Link to="mailto:mtanveerhasan2001@gmail.com" target="_blank"><img className="link-img" src={gmail} alt="Unable to load" /></Link>
                </div>
              </div>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/education">Education</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/skill">Skills</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/certificate">Certificates</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Projects
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><Link className="dropdown-item" to="/rls">Website for Raleigh Literay Society</Link></li>
                    <li><Link className="dropdown-item" to="hms">IOT Based Health Monitoring System</Link></li>
                    <li><Link className="dropdown-item" to="ad">Anime Review Website</Link></li>
                    <li><Link className="dropdown-item" to="dictionary">Dictionary with CRUD fuctionalities</Link></li>
                    <li><Link className="dropdown-item" to="calc">Simple Calculator</Link></li>
                    <li><Link className="dropdown-item" to="#">This Portfolio</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Experience
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><Link className="dropdown-item" to="/piclub">Web Developer at PI club AMU</Link></li>
                    <li><Link className="dropdown-item" to="/amutc">AMUTC Web and Tech Team Member</Link></li>
                    <li><Link className="dropdown-item" to="ieee">CO-Coordinator (Web) IEEE STB AMU</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href={resume} download="Tanveer's Resume">Resume <i class="fa fa-download"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav className="nav-hor">
        <Link to="/"><i className="fa fa-home"></i></Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <div className="dropdown">
          <Link to="#" className="dropbtn">Projects</Link>
          <div className="dropdown-content">
            <Link to="/rls">Website for Raleigh Literay Society</Link>
            <Link to="/hms">IOT Based Health Monitoring System</Link>
            <Link to="/ad">Anime Review Website</Link>
            <Link to="/dictionary">Dictionary with CRUD fuctionalities</Link>
            <Link to="/calc">Simple Calculator</Link>
            <Link to="#">This Portfolio</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="#" className="dropbtn">Experience</Link>
          <div className="dropdown-content">
            <Link to="/piclub">Web Developer at PI club AMU</Link>
            <Link to="/amutc">AMUTC Web and Tech Team Member</Link>
            <Link to="/ieee">CO-Coordinator (Web) IEEE STB AMU</Link>
          </div>
        </div>
        <Link to="./skill">Skills</Link>
        <Link to="./certificate">Certificates</Link>
        <a href={resume} download="Tanveer's Resume">Resume <i class="fa fa-download"></i></a>
      </nav>
    </>
  )
}
