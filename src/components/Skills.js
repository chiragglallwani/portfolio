import {ArrowBackIosRounded, ArrowForwardIosRounded} from '@material-ui/icons';
import React, { useState } from 'react'
import '../css/skills.scss';
import frontEndPicture from '../images/front-end-skills.png';
import webDesignPicture from '../images/webdesign-skills.jpg';
import backendPicture from '../images/backend-skills.png'
export default function Skills() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            title: "Front End Skills",
            description: "The above given projects have been built using the HTML5, CSS3, JavaScript.In addition to that most of the projects have been build using the Javascript frameworks such as React. Moreover, some of the projects such as tarotbypoonam, pinterest and healthease are using third party API's. The project healthease and tarotbypoonam are styled using bootstrap 4 and react-bootstrap library.",
            img: frontEndPicture
        },
        {
            id: "2",
            title: "Web Desgin Skills",
            description: "Some of the above given projects design was build first in Adobe XD and was updated as per the client requirements, Specially the healthease website was built by interacting with the clients on daily basis and update to the team by the product Owner during the class project.",
            img: webDesignPicture
        },
        {
            id: "3",
            title: "Backend Skills",
            description: "Most of the websites mentioned above are being deployed using firebase hosting services and some of them are deployed using vercel, The websites such as Todo, Messnger clone and other websites uses NoSQL database service provided by firebase, where as tarotbypoonam website uses MYSQL database for backend and PHP for handling the backend of the website which built using MVC software architecture",
            img: backendPicture
        }
    ]

    const handleClick = (direction) => {
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1: 2) :
        setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1: 0);
    }

    return (
        <div className="skills" id="skills">
            <h2 className="head">Skills</h2>
            <ArrowBackIosRounded onClick={() => handleClick("left")}  htmlColor="#FFFFFF" className="arrow left"/>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((skill) => (<div key={skill.id} className="container">
                    <div className="item">    
                        <div className="left">
                            <div className="leftContainer">
                                <h2>{skill.title}</h2>
                                <p>{skill.description}</p>
                            </div>
                        </div>
                        <div className="right">
                            <img src={skill.img} alt="front-end"/>
                        </div>
                    </div>
                </div>))}
            </div>
            <ArrowForwardIosRounded onClick={() => handleClick("right")}  fontSize="large" htmlColor="#FFFFFF" className="arrow right"/>
        </div>
    )
}
