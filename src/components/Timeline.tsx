import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from 'react-router-dom';
import { experiences } from '../data/experience';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          {experiences.map(({ slug, company, role, date, location, summary }) => (
            <VerticalTimelineElement
              key={slug}
              className="vertical-timeline-element--work"
              date={date}
              iconStyle={{ background: '#0053c5', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{role}, {company}</h3>
              <h4 className="vertical-timeline-element-subtitle">{location}</h4>
              <p>{summary}</p>
              <Link to={`/experience/${slug}`}>Read more →</Link>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;