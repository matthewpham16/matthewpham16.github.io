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
              Argo, Docker, and Kubernetes workflows for large-scale data models; cloud-native data pipeline on Python, Snowflake, and ADLS; schema parity validation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2026 - May 2026"
            iconStyle={{ background: '#0053c5', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer, Civic Housing</h3>
            <h4 className="vertical-timeline-element-subtitle">Austin, TX</h4>
            <p>
              Node.js and RESTful APIs, React and Bootstrap data visualizations, AWS deployment through GitLab CI/CD.
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
              Python and SQL validation workflows, REST API integrations, and pipelines that added 2,500+ leads.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - May 2027"
            iconStyle={{ background: '#0053c5', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">B.S. Computer Science, UT Austin</h3>
            <h4 className="vertical-timeline-element-subtitle">Austin, TX</h4>
            <p>
              Minors in Statistics & Data Sciences and Business.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;