import React from 'react'
import '../css/menu.scss'
export default function Menu({menuOpen, setmenuOpen}) {
    //let targetElement = "#intro";

    const handleClick = () => {
        setmenuOpen(!menuOpen);
    }
    return (
        <div className={`${menuOpen ? 'menu active': 'menu'}`}>
            <ul onClick={handleClick}>
                <li>
                    <a className="link" href="#intro"  >Home</a>
                </li>
                <li >
                    <a className="link" href="#projects">Projects</a>
                </li>
                <li>
                    <a className="link" href="#skills">Skills</a>
                </li>
                <li>
                    <a className="link" href="#about">About Me</a>
                </li>
                <li >
                    <a className="link" href="#contact" >Contact</a>
                </li>
            </ul>
        </div>
    )
}
