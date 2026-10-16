import React from "react";
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/matthewpham16" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/matthewpham16" target="_blank" rel="noreferrer"><h2>Pintos Operating System</h2></a>
                <p>Upgraded a teaching OS kernel in C: priority scheduling, synchronization primitives, system calls, and virtual memory with demand paging, frame allocation, and LRU eviction. Led a 3-person team.</p>
            </div>
            <div className="project">
                <a href="https://github.com/matthewpham16" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/matthewpham16" target="_blank" rel="noreferrer"><h2>Civic Housing</h2></a>
                <p>Node.js REST APIs plus React components that automate document and applicant verification, deployed on AWS through GitLab CI/CD.</p>
            </div>
            <div className="project">
                <a href="https://github.com/matthewpham16" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/matthewpham16" target="_blank" rel="noreferrer"><h2>5-Stage Pipelined CPU</h2></a>
                <p>Designed and simulated a pipelined processor with hazard detection, data forwarding, and stall logic.</p>
            </div>
            <div className="project">
                <a href="https://github.com/matthewpham16" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/matthewpham16" target="_blank" rel="noreferrer"><h2>Predictive Milk Yield Analysis</h2></a>
                <p>Python data transformation modules and Scikit-learn models over 250,000+ inputs, with automated validation and testing.</p>
            </div>
            <div className="project">
                <a href="https://github.com/matthewpham16" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/matthewpham16" target="_blank" rel="noreferrer"><h2>Sports Analytics & ML</h2></a>
                <p>Classification and regression models across F1, PGA, NFL, and MLB data, tuned for ROC-AUC.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;