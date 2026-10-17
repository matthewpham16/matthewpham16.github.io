import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience & Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2026 - Aug 2026"
            iconStyle={{ background: '#0053c5', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Platform Engineer Intern, William Blair</h3>
            <h4 className="vertical-timeline-element-subtitle">Chicago, IL</h4>
            <p>
              Architected automated Argo Workflows, Docker, and Kubernetes pipelines to execute and validate large-scale financial data models; built a cloud-native data pipeline on Python, Snowflake, and ADLS; centralized vendor workflows into one modular codebase.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - Jul 2024"
            iconStyle={{ background: '#0053c5', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern, Loan Ranger Capital</h3>
            <h4 className="vertical-timeline-element-subtitle">Austin, TX</h4>
            <p>
              Python and SQL validation scripts that corrected 300+ database inconsistencies; REST API integrations for an automated outreach system; data collection and cleaning pipelines that added 2,500+ Kansas City leads.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2023 - May 2027"
            iconStyle={{ background: '#0053c5', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">B.S. Computer Science, UT Austin</h3>
            <h4 className="vertical-timeline-element-subtitle">Austin, TX</h4>
            <p>
              Minors in Statistics & Data Sciences and Business. Coursework: Operating Systems, Computer Architecture, Data Structures, Algorithms, Software Engineering, AI, Machine Learning, Discrete Math, Linear Algebra.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;