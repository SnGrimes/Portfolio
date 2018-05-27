import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about" className="about__wrapper">
      <div className="about__column-1">
        <img className="about__profile-pic" src={profilePic} alt="" />
      </div>
      <div className="about__column-2">
        <h2>About Me</h2>
        <p>
        I am a self taught web developer and have been using CSS and HTML since 2004 and have spent my free time teaching myself JavaScript. I enjoy solving problems. I always look for faster, more efficient methods to reach the best results and I bring this mindset to my development projects. I look at problems from different viewpoints and consider several approaches. The more details I can learn about a language or browser the better. Re-creating mock-up designs in HTML/CSS is easy for me. I am also actively seeking new knowledge.</p>

        <p>Recently, I served as the project manager for a remote developer project as part of Chingu Cohorts Voyage 4. It was first time joining a Chingu cohort and it was an honor to be selected as a project manager in my first voyage. It was a great way to learn how to work on an app as a team and I learned a lot.</p>        
        <p>I am currently seeking a full-time front end developer position where I can put me skills to use and work with a team of like minded developers.</p>
        {/* <p>
          <button className="about__button">
            <FaCloudDownload /> Download Resume
          </button>
        </p>               */}
      </div>
  </section>
);

export default About;
