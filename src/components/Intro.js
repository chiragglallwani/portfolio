import { ArrowDownwardRounded } from '@material-ui/icons';
import React, {useEffect} from 'react'
import '../css/intro.scss';
import profilePicture from '../images/IMG-2647.JPG';
import {init} from 'ityped';
export default function Intro() {

    useEffect(() => {
        const myElement = document.querySelector("#textChanger");
        init(myElement, {showCursor: true, 
             
            strings: ['Developer', 'Designer']
        })
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={profilePicture} alt="Profile"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Chirag Lalwani</h1>
                    <h3>Web <span id="textChanger"></span></h3>
                </div>
                <a href="#projects">
                    <ArrowDownwardRounded  />
                </a>
            </div>
        </div>
    )
}
