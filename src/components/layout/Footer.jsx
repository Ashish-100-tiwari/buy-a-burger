import React from 'react'
import {AiFillYoutube,AiFillLinkedin,AiFillGithub} from "react-icons/ai"
const Footer = () => {
  return (
    <footer>
        <div>
            <h2>BUY A BURGER</h2>
            <p>we are trying to give you the best taste </p>
            <br/>
            <em>We give attention to genuine feedback</em>
            <strong>All right received @buyaburger </strong>
        </div>
        <aside>
            <h4> Follow Us</h4>
            <a href='https://youtube.com/'><AiFillYoutube/></a>
            <a href='https://www.linkedin.com/in/ashish-tiwari-57303a217/'><AiFillLinkedin/></a>
            <a href='https://github.com/Ashish-100-tiwari'><AiFillGithub/></a>
        </aside>
    </footer>
  )
}

export default Footer