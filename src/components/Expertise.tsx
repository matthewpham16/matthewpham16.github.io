import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Docker",
    "Kubernetes",
    "Argo Workflows",
    "AWS",
    "Linux",
    "CI/CD",
    "Git",
    "GitLab CI",
];

const labelsSecond = [
    "Python",
    "SQL",
    "Snowflake",
    "Azure Data Lake Storage",
    "PostgreSQL",
    "Pandas",
    "NumPy",
    "Scikit-learn",
];

const labelsThird = [
    "React",
    "TypeScript",
    "Flask",
    "Node.js",
    "REST APIs",
    "C",
    "Java",
    "Multithreading",
    "Virtual Memory",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Platform & Cloud Infrastructure</h3>
                    <p>Containerizing applications and orchestrating multi-step workflows on Kubernetes and Argo, building CI/CD pipelines, and moving legacy workloads onto cloud-native infrastructure.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Pipelines & Machine Learning</h3>
                    <p>Fault-tolerant ETL and validation pipelines with Python, SQL, Snowflake, and ADLS, plus statistical and machine learning models on messy real-world data.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full-Stack & Systems Engineering</h3>
                    <p>React frontends and REST APIs in Flask and Node.js, alongside low-level systems work in C: thread scheduling, synchronization, and virtual memory.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;