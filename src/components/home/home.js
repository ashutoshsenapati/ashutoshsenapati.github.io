import React from "react";
import './home.css'
import { Link } from "react-router-dom";
// npm install --save-dev @iconify/react @iconify/icons-simple-icons




function Home() {
    return (
        <div className="homeContainer">

            <div className="primary">
            <p className="titleName animate__bounce animate__repeat-3">Hello,
            <br /> I'm <span className="coloured">Ashutosh.</span></p>
                <p className="infoText">Full Stack Developer / AI Enthusiast / Competitve Coder </p>
                <Link to="/about">
                    <input type="button" className="primaryBtn" value="Learn More"/>
                </Link>
            </div>

            <div className="primary">
                <div className="avatarImg" align="center">
                    <img width="100%" src='/assets/images/Ashutosh.jpg' alt="thiva" />
                </div>
                <div align="center" className="socialbtns">
                <ul>
                <li>
                <a href="https://github.com/ashutoshsenapati" class="fa fa-lg fa-github" target="_blank"></a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/ashutoshsenapati/" class="fa fa-lg fa-linkedin" target="_blank"></a>
                </li> 
                <li>
                <a href="https://www.instagram.com/ashutosh_5enapati/?hl=en" class="fa fa-lg fa-instagram" target="_blank"></a>
                </li>
                <li>
                <a href="https://stackoverflow.com/users/718177/ashutosh" class="fa fa-lg fa-stack-overflow" target="_blank"></a>
                </li>
                <li>
                <a href="https://leetcode.com/ashutoshsenapati" class="fa fa-lg fa-file-text - 2x" target="_blank"></a>
                </li>
                </ul>
                </div>
            </div>
        </div>                
    );
}

export default Home;