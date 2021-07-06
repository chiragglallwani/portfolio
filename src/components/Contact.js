import React, { useState } from 'react'
import '../css/contact.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import StackoverFlowIcon from '../images/stack-overflow.png'
import QuoraIcon from '../images/quora.png';
import Thankyou from '../images/shake.svg';
import emailjs from 'emailjs-com'
export default function Contact() {
    const[sendersSubject, setSendersSubject] = useState("");
    const[senderMessage, setSendersMessage] = useState("");
    const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(!message);
        emailjs.sendForm('service_2xhymqk','template_h1abvod', e.target, 'user_FSDlyBGfOha9P49cjl12g').then((result) => {
            setSendersSubject("");
            setSendersMessage("");
        }, error => {
            console.log(error.text);
        })
    }
    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="left">
                    <img src={Thankyou} alt="Thank you"/>
                </div>
                <div className="right">
                    <h2>Contact</h2>
                    <form onSubmit={handleSubmit}>
                        <input onChange={e => setSendersSubject(e.target.value)} value={sendersSubject}  type="text" placeholder="Subject" name="subject"/>
                        <textarea onChange={e => setSendersMessage(e.target.value)} value={senderMessage} type="text" placeholder="Message for me" name="message"></textarea>
                        <button type="submit">Send</button>
                        {message && <span>Thank you!</span>}
                    </form>
                </div>
            </div>
            <footer>
               <p>You can also find me on</p>
                <div className="icons">
                    <a rel="noreferrer" target="_blank" href="https://github.com/lalwanichirag3"><GitHubIcon htmlColor="Black" /></a>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/chirag-lalwani-3a5390184/"><LinkedInIcon htmlColor="Black"/></a>
                    <a rel="noreferrer" target="_blank" href="https://twitter.com/ChiragL01375681"><TwitterIcon htmlColor="Black"/></a>
                    <a rel="noreferrer"  target="_blank" href="https://stackoverflow.com/users/12986378/chirag-lalwani?tab=profile"><img src={StackoverFlowIcon} alt="stackoverflow" width="25px" height="25px"/></a>
                    <a rel="noreferrer"  target="_blank" href="https://quora.com/profile/Chirag-Lalwani-30"><img src={QuoraIcon} alt="Quora" width="25px" height="25px"/></a>
                </div>
            </footer>
        </div>
    )
}
