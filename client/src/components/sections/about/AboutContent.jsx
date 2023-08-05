import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import "./AboutContent.css";
import AboutItem from "./AboutItem.jsx";

function AboutContent({ about }) {
  // const [loading, setLoading] = useState(true);
  // const [about, setAbout] = useState([]);

  // const fetchAbout = async () => {
  //   fetch("http://localhost:5000/api/about")
  //     .then((res) => res.json())
  //     .then((resData) => {
  //       setAbout(resData.data.about);
  //       setLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   fetchAbout();
  // }, []);

  return (
    <div className="about-content">
      {about.education && (
        <div className="about-content__container">
          <h2 className="title">Education</h2>
          {about.education.map((education, index) => (
            <AboutItem
              key={index}
              firstLine={education.program}
              secondLine={education.school}
            />
          ))}
        </div>
      )}
      {about.experiences && (
        <div className="about-content__container">
          <h2 className="title">Experiences</h2>
          {about.experiences.map((experience, index) => (
            <AboutItem
              key={index}
              firstLine={`${experience.company}, ${experience.location}`}
              secondLine={`${experience.role}, ${experience.time}`}
            />
          ))}
        </div>
      )}
      {about.exhibitions && (
        <div className="about-content__container">
          <h2 className="title">Exhibitions</h2>
          {about.exhibitions.map((exhibition, index) => (
            <AboutItem
              key={index}
              firstLine={exhibition.title}
              secondLine={`${exhibition.type} at ${exhibition.venue}, ${exhibition.time}`}
            />
          ))}
        </div>
      )}
      {about.awards && (
        <div className="about-content__container">
          <h2 className="title">Awards</h2>
          {about.awards.map((award, index) => (
            <AboutItem
              key={index}
              firstLine={award.title}
              secondLine={award.ranking}
            />
          ))}
        </div>
      )}
      {about.teachingWorkshop && (
        <div className="about-content__container">
          <h2 className="title">Teaching / Workshop</h2>
          {about.teachingWorkshop.map((teachingWorkshop, index) => (
            <AboutItem
              key={index}
              firstLine={teachingWorkshop.title}
              secondLine={`${teachingWorkshop.program}, ${teachingWorkshop.time}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AboutContent;
