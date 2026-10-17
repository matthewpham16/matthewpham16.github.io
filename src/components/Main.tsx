import React from "react";
import avatar from '../assets/images/avatar.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/matthewpham16" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/matthew-pham16" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Matthew Pham</h1>
          <p>Software, Platform & Systems Engineer</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/matthewpham16" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/matthew-pham16" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
      <div className="bio-section" id="about">
        <h1>About Me</h1>
        <p>
          I’m a Computer Science student at UT Austin (minoring in Statistics & Data Sciences and Business) focused on building software from the ground up. My work spans low-level systems, cloud infrastructure, and data-driven modeling.
        </p>
        <p>
          This past summer I was a Platform Engineer Intern at William Blair, building Argo, Docker, and Kubernetes workflows and a Snowflake data pipeline. Outside of work I build projects across the stack, including a multi-threaded operating system, a pipelined CPU emulator, a full-stack civic housing platform, and a machine learning pipeline.
        </p>
      </div>
    </div>
  );
}

export default Main;