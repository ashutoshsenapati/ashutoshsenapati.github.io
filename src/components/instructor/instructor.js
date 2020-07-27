import React from "react";
import './instructor.css'
import { Link } from "react-router-dom";

function Instructor() {
    return (
        <div align = "top" className="homeContainer">
            <div className="secondary">
                <div className="avatarImg">
                    <img width="100%" src='/assets/images/SDE.jpg' alt="thiva" />
                </div>
                <div align="center" className="socialbtns">
                <Link to="/publication">
                <p className="infoText2">SDE Projects </p>
                    <input type="button" className="primaryBtn" value="Enter"/>
                </Link>
                </div>
            </div>
            <div className="secondary">
                <div className="avatarImg">
                    <img width="100%" src='/assets/images/ML.jpg' alt="thiva" />
                </div>
                <div align="center" className="socialbtns">
                <Link to="/publication2">
                <p className="infoText2">AI/ ML Projects </p>
                    <input type="button" className="primaryBtn" value="Enter"/>
                </Link>
                </div>
            </div>
            <div className="secondary">
                <div className="avatarImg">
                    <img width="100%" src='/assets/images/picrandom.png' alt="thiva" />
                </div>
                <div align="center" className="socialbtns">
                <Link to="/publication2">
                <p className="infoText2"> Miscellaneous</p>
                    <input type="button" className="primaryBtn" value="Enter"/>
                </Link>
                </div>
            </div>
        </div>                
    );
}

export default Instructor;