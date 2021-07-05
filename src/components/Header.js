import React from 'react'
import '../css/header.scss'
import EmailIcon from '@material-ui/icons/Email';
export default function Header({menuOpen, setmenuOpen}) {
    return (
        <div className={`${menuOpen ? 'header active' : 'header'}`}>
           <div className="wrapper">
               <div className="left">
                   <a href="#intro" className="logo">Chirag Lalwani</a>
                   <div className="itemContainer">
                        <EmailIcon className="icon" />
                        <span>lalwanichirag3@gmail.com</span>
                   </div>
               </div>
               <div className="right">
                    <div className="hamburger" onClick={() => setmenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
               </div>
           </div>
        </div>
    )
}
