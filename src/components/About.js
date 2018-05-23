import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
        I am seeking an entry level position as a frontend web developer. I have several years' experience with HTML and CSS and have a passion for web code. I graduated cum laude with a degree in Arts and Technology from The University of Texas at Dallas. After graduation and discovering that the movie and videogame animation fields no longer appealed to me, I decided to learn as much as possible about web development. Since 2004 I have become proficient with web coding and created a websites using HTML, CSS and Javascript. I am passionate about the Internet and would like to contribute to it.
        I enjoy solving problems. I always look for faster, more efficient methods to reach the best results and I bring this mindset to my development projects. I look at problems from different viewpoints and consider several approaches. The more details I can learn about a language or browser the better.  
        My strengths lie in coding, especially frontend code. Recreating mock-up designs in HTML/CSS is easy for me. I also actively seek new knowledge. After discovering a Javascript-based animation library called Greensock, I plan to learn as much as possible about it because of my love for the art of animation.
        </p>
        <div className="row">
          <div className="columns download">
            <p>
              <a href="#" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
