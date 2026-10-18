import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Resume.scss';

type Entry = { title: string; role?: string; date: string; bullets: string[] };
type Section = { heading: string; entries: Entry[] };

// Mirrors public/Resume.pdf word-for-word; update both together.
const experience: Entry[] = [
  {
    title: "William Blair", role: "Platform Engineer Intern", date: "June 2026 – August 2026",
    bullets: [
      "Architected automated Argo, Docker, and Kubernetes workflows to execute and validate large-scale data models.",
      "Engineered a scalable, cloud-native ETL data pipeline leveraging Python, Snowflake, and ADLS.",
      "Centralized disparate vendor workflows into a modular codebase using modern Git development workflows.",
      "Developed data validation algorithms for rigorous schema parity checks, ensuring dataset integrity.",
    ],
  },
  {
    title: "Loan Ranger Capital", role: "Data Analyst Intern", date: "May 2024 – July 2024",
    bullets: [
      "Engineered Python and SQL data validation workflows, translating raw datasets into reliable, scalable metrics",
      "Integrated REST APIs for an automated system, enhancing infrastructure scalability and workflow efficiency.",
      "Built data collection and cleaning pipelines that expanded lead generation by 2,500+ contacts.",
    ],
  },
];

const projects: Entry[] = [
  {
    title: "Civic Housing", role: "Software Engineer", date: "January 2026 – May 2026",
    bullets: [
      "Engineered Node.js servers and RESTful APIs to serve structured data models from Postman-defined endpoints.",
      "Developed modular React components with Bootstrap to visualize real-time data and API endpoints.",
      "Designed relational database schemas with server-side pagination, multi-attribute filtering, and dynamic search.",
      "Deployed on AWS via GitLab CI/CD for automated verification and Postman for architecture documentation.",
    ],
  },
  {
    title: "Pintos Operating System", role: "OS Engineer", date: "August 2025 – December 2025",
    bullets: [
      "Upgraded core OS Kernel components in C, debugging complex system-level memory and concurrency issues.",
      "Implemented robust multi-threading and synchronization primitives for secure CPU scheduling and memory safety.",
      "Architected virtual memory subsystems, including demand paging, frame allocation, and LRU eviction policies.",
      "Led a 3-person engineering team through weekly code reviews using Git source control and modern workflows.",
    ],
  },
  {
    title: "High-Volume Predictive Modeling Pipeline", role: "Machine Learning Engineer", date: "October 2025 – December 2025",
    bullets: [
      "Engineered reusable Python data transformation modules to clean 250,000+ inputs and optimize execution latency.",
      "Applied feature engineering, cross-validation, and hyperparameter tuning to regression and ensemble models.",
      "Evaluated multiple ML pipelines using Scikit-learn, translating raw performance data into actionable insights.",
      "Automated data validation and model testing pipelines, improving reliability and reducing end-to-end run time.",
    ],
  },
  {
    title: "System Emulator", role: "Systems Engineer", date: "January 2025 – May 2025",
    bullets: [
      "Built a five-stage pipelined CPU emulator in C across Fetch, Decode, Execute, Memory, and Writeback stages.",
      "Implemented data forwarding paths and pipeline stalling logic to resolve data, control, and structural hazards.",
      "Simulated hardware cache mechanisms and branch prediction to improve memory access latency and throughput.",
    ],
  },
];

const sections: Section[] = [
  { heading: "Experience", entries: experience },
  { heading: "Projects", entries: projects },
];

const skills = [
  ["Languages", "Python, C, C++, Java, JavaScript, TypeScript, SQL, R, HTML, CSS"],
  ["Tools", "Docker, Kubernetes, Argo Workflows, Snowflake, AWS, ADLS, GitLab CI/CD, Git/GitHub, Linux, Postman"],
  ["Libraries", "React, Node.js, Scikit-learn, Pandas, NumPy, Bootstrap, REST APIs, Jupyter Notebook"],
  ["Soft Skills", "Problem-solving, Collaboration, Communication, Time Management, Adaptability"],
];

function DownloadButton() {
  return (
    <Button variant="contained" startIcon={<DownloadIcon />} href="/Resume.pdf" download>
      Download Resume (PDF)
    </Button>
  );
}

function Resume() {
  useEffect(() => {
    document.title = "Resume | Matthew Pham";
    return () => { document.title = "Matthew Pham"; };
  }, []);

  return (
    <div className="resume-container">
      <h1>Matthew Aragorn Pham</h1>
      <p>
        <a href="mailto:mattpham016@gmail.com">mattpham016@gmail.com</a> | 832-746-6047 |{" "}
        <a href="https://github.com/matthewpham16" target="_blank" rel="noreferrer">github.com/matthewpham16</a> |{" "}
        <a href="https://www.linkedin.com/in/matthew-pham16" target="_blank" rel="noreferrer">www.linkedin.com/in/matthew-pham16</a>
      </p>
      <DownloadButton />

      <h2>Education</h2>
      <h3>The University of Texas at Austin <span className="resume-date">May 2027</span></h3>
      <p><em>Bachelor of Science in Computer Science, Minors in Statistics & Data Sciences and Business</em></p>
      <p><strong>Relevant Coursework:</strong> Operating Systems, Software Engineering, Artificial Intelligence, Machine Learning, Computer Architecture, Compilers, Data Structures, Algorithms, Discrete Math, Linear Algebra</p>

      <h2>Technical Skills</h2>
      {skills.map(([label, items]) => (
        <p key={label}><strong>{label}:</strong> {items}</p>
      ))}

      {sections.map(({ heading, entries }) => (
        <section key={heading}>
          <h2>{heading}</h2>
          {entries.map(({ title, role, date, bullets }) => (
            <div key={title} className="resume-entry">
              <h3>
                {title}{role && <> – <em>{role}</em></>} <span className="resume-date">{date}</span>
              </h3>
              <ul>
                {bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>
      ))}

      <DownloadButton />
    </div>
  );
}

export default Resume;
