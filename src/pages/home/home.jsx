import React from 'react';
import './home.scss';
import img from '../../static-images/tanveer.jpg'
export default function Home() {
    return (
        <>
            <div class="container-home">
                <div class="details">
                    <div class="my-img"><img src={img} alt="" /></div>
                    <div class="bio">
                        <h2><span className="orange">Hello There !</span></h2>
                        <h2>I am <span className="green">Mohd Tanveer Hasan</span></h2>
                        <p>A Computer Engineering Undergrad</p>
                        <p>Zakir Hussain College of Engineering and Technology</p>
                        <p>Aligarh Muslim University, India</p>
                    </div>
                </div>
            </div>
        </>
    )
}
