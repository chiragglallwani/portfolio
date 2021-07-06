import React from 'react'
import '../css/about.scss'
import aboutmeImg from '../images/503852.JPEG';
export default function About() {
    return (
        <div className="about" id="about">
            
            <div className="container">
                <div className="card">
                    <div className="left">
                        <img src={aboutmeImg} alt="aboutme"/>
                    </div>
                    <div className="right">
                        <h1>About me</h1>
                        <p>I am a graduate student in the department of computer science at the thompson river university.</p>
                        <br/>
                        <p>I have been working on several projects throughout my academic period, that has trained me to work
                             in real environment and prove my ability to serve at my best. As a full time Student
                              i worked hard to complete all my projectds and ovefcome all
                             the challenges that has enhanced my front-end, web designing
                             and backend skills using React, Adobe XD and nodejs amd 
                             familiarizing myself with the current web building softwares.</p>
                        <br/>
                        <p>My interest lie in desgining and 
                        developing the front-end part of the websites.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
