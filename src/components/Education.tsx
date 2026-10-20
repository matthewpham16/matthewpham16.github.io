import React from "react";
import '../assets/styles/Education.scss';

function Education() {
  return (
    <div className="education-container" id="education">
      <h1>Education</h1>
      <h2>The University of Texas at Austin</h2>
      <p className="education-meta">Aug 2023 - May 2027 | Austin, TX</p>
      <p><strong>B.S. in Computer Science</strong>, minors in Statistics & Data Sciences and Business</p>
      <p>
        UT's Department of Computer Science is consistently ranked among the top 10 in the country, with a project-driven curriculum: CPU emulators, operating system kernels, and full-stack web platforms built from scratch. My minors add a quantitative modeling and business foundation on top of the systems work.
      </p>
      <p><strong>Coursework:</strong> Operating Systems, Computer Architecture, Compilers, Software Engineering, Data Structures, Algorithms, Artificial Intelligence, Machine Learning, Discrete Math, Linear Algebra</p>
      <p><strong>Involvement:</strong> Machine Learning and Data Science Club (LLM-powered agent for multi-agent simulations); ECLAIR (robotic arm control in Python and MATLAB)</p>
    </div>
  );
}

export default Education;
