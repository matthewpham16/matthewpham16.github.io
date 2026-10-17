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
    "Linux/Unix",
    "GitLab CI/CD",
    "Git/GitHub",
    "Postman",
];

const labelsSecond = [
    "Python",
    "SQL",
    "Snowflake",
    "Azure Data Lake Storage",
    "Apache Kafka",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Jupyter",
    "Together AI",
];

const labelsThird = [
    "C",
    "C++",
    "Java",
    "Go",
    "TypeScript",
    "JavaScript",
    "R",
    "MATLAB",
    "React",
    "Node.js",
    "Flask",
    "Bootstrap",
    "REST APIs",
    "OS Kernel Development",
    "Concurrency",
    "Virtual Memory",
    "CPU Pipelining",
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
                    <p>Containerizing legacy systems and orchestrating fault-tolerant, distributed pipelines with Docker, Kubernetes, Argo Workflows, and GitLab CI/CD.</p>
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
                    <p>End-to-end ETL and machine learning pipelines in Python, SQL, Snowflake, and ADLS that clean and model hundreds of thousands of records.</p>
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
                    <p>Modular React frontends and Node.js/Flask REST APIs deployed on AWS, alongside memory-safe, concurrent C/C++ at the kernel and hardware level: scheduling, caching, virtual memory, and instruction throughput.</p>
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