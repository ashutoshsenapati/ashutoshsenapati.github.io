import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

const skills = [
    {
        "type": "Java EE 8",
        "level": 95
    },
    {
        "type": "FullStack Development",
        "level": 85
    },
    {
        "type": "Cloud Architecture",
        "level": 60
    },
    {
        "type": "Machine Learning",
        "level": 80
    },
    {
        "type": "Artificial Intelligence",
        "level": 90
    },
    {
        "type": "Competitive Programming",
        "level": 90
    }
]

function About() {
  return (
    <div className="aboutContainer">
      <div className="primaryAbt">
        <p className="titleText">About me ! </p>
        <p className="paraText">
        I am a Software Engineer, a Fullstack Developer always fueled by my passion. 
        I enjoy building everything, from small business sites to rich interactive web applications. 
        I also have a keen interest in Machine Learning, Artificial Intelligence and Competitive Programming among many others.
        </p>
        <Link to="/contact">
          <input type="button" className="primaryBtn" value="Contact me " />
        </Link>
      </div>

      <div className="secondaryAbt">
        <div class="u-center">
          <section class="skills">
            {
                skills.map((skill, i) => {
                    return(
                        <div class="skill">
                            <h3 class="skill__type">{skill.type}</h3>
                            <div class="skill__outer-bar">
                                <div style={{width: `${skill.level}%`}} class="skill__inner-bar"></div>
                            </div>
                        </div>
                    );
                })
            }

          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
