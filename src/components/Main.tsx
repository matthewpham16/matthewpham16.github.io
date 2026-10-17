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
          <p>Engineering systems from the bare-metal kernel up to cloud-native infrastructure: high-throughput data pipelines (Kubernetes, Argo Workflows, Snowflake), low-level systems (C, OS kernels, CPU pipelining), and full-stack web automation (React, Node.js, AWS).</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/matthewpham16" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/matthew-pham16" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;