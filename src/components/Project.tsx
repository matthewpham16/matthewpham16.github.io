import React from "react";
import civichousing from '../assets/images/civichousing.png';
import operatingsystem from '../assets/images/operatingsystem.png';
import systememulator from '../assets/images/systememulator.png';
import machinelearning from '../assets/images/machinelearning.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/matthewpham16/CivicHousing" target="_blank" rel="noreferrer"><img src={civichousing} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/matthewpham16/CivicHousing" target="_blank" rel="noreferrer"><h2>CivicHousing</h2></a>
                <p>Full-stack civic housing platform: Node.js REST APIs specified in Postman, React and Bootstrap visualizations, deployed on AWS with GitLab CI/CD verification and testing.</p>
            </div>
            <div className="project">
                <a href="https://github.com/matthewpham16/Pintos-OS" target="_blank" rel="noreferrer"><img src={operatingsystem} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/matthewpham16/Pintos-OS" target="_blank" rel="noreferrer"><h2>Pintos Operating System</h2></a>
                <p>Led a 3-person team turning a bare-bones kernel into a multi-threaded OS: recursive priority donation, system calls with page-fault isolation, demand paging with clock eviction, and an indexed file system with a buffer cache. C, x86 assembly, GDB.</p>
            </div>
            <div className="project">
                <a href="https://github.com/matthewpham16/Computer-Architecture" target="_blank" rel="noreferrer"><img src={systememulator} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/matthewpham16/Computer-Architecture" target="_blank" rel="noreferrer"><h2>System Emulator</h2></a>
                <p>5-Stage Pipelined CPU: a cycle-accurate emulator in C with Fetch, Decode, Execute, Memory, and Writeback stages, data forwarding, stalls and bubbles for hazards, caching, and branch prediction.</p>
            </div>
            <div className="project">
                <a href="https://github.com/matthewpham16/Milk-Yield-Analysis" target="_blank" rel="noreferrer"><img src={machinelearning} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/matthewpham16/Milk-Yield-Analysis" target="_blank" rel="noreferrer"><h2>Machine Learning Project</h2></a>
                <p>Predictive Milk Yield Analysis: an ML pipeline over 250,000+ records with modular Python preprocessing, regularized linear and tree-based Scikit-learn models with k-fold cross-validation, and automated tuning and benchmarking.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
