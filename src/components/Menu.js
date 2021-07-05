import React from 'react'
import '../css/menu.scss'
export default function Menu({menuOpen, setmenuOpen}) {
    return (
        <div className={`${menuOpen ? 'menu active': 'menu'}`}>
            <ul>
                <li>
                    <a className="link" href="#intro" onClick={() => setmenuOpen(!menuOpen)}>Home</a>
                </li>
                <li>
                    <a className="link" href="#skills" onClick={() => setmenuOpen(!menuOpen)}>Skills</a>
                </li>
                <li>
                    <a className="link" href="#projects" onClick={() => setmenuOpen(!menuOpen)}>Projects</a>
                </li>
                <li>
                    <a className="link" href="#contact" onClick={() => setmenuOpen(!menuOpen)}>Contact</a>
                </li>
            </ul>
        </div>
    )
}
