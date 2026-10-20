import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { experiences } from "../data/experience";
import '../assets/styles/Experience.scss';

function ExperiencePage() {
  const { slug } = useParams();
  const exp = experiences.find((e) => e.slug === slug);

  useEffect(() => {
    if (!exp) return;
    document.title = `${exp.company} | Matthew Pham`;
    return () => { document.title = "Matthew Pham"; };
  }, [exp]);

  if (!exp) return <Navigate to="/" replace />;

  return (
    <div className="experience-container">
      <Link to="/" state={{ scrollTo: "history" }}>← Back to experience</Link>
      <h1>{exp.role}, {exp.company}</h1>
      <p className="experience-meta">{exp.date} | {exp.location}</p>

      <h2>About the Company</h2>
      <p>{exp.about}</p>

      <h2>What I Did</h2>
      <p>{exp.overview}</p>
      <ul className="experience-skills">
        {exp.skills.map((s) => <li key={s}>{s}</li>)}
      </ul>

      <h2>Contributions</h2>
      {exp.contributions.map(({ title, body }) => (
        <div key={title}>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      ))}

      <h2>Takeaways</h2>
      {exp.takeaways.map(({ title, body }) => (
        <div key={title}>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperiencePage;
