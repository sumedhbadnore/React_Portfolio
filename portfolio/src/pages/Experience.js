import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Work, Web } from "@mui/icons-material";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sep 2023 - May 2025"
          iconStyle={{ background: "#5A43CB", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Stevens Institute of Technology, Hoboken, NJ
          </h3>
          <p> Masters in Computer Science </p>
          <i> GPA 3.8/4 </i>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2022 - Dec 2022"
          iconStyle={{ background: "#FFA500", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Accenture, Pune, India
          </h3>
          <p> Developer Program Intern </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2022 - Aug 2022"
          iconStyle={{ background: "#FFA500", color: "#fff" }}
          icon={<Web />}
        >
          <h3 className="vertical-timeline-element-title">
            Vidyalankar Institute of Technology, Mumbai, India
          </h3>
          <p> Web Development Intern </p>
          <i> CovInfo Web App </i>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2019 - May 2023"
          iconStyle={{ background: "#5A43CB", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Vidyalankar Institute of Technology, Mumbai, India
          </h3>
          <p> Bachelors in Electronics and Communication Engineering </p>
          <i> GPA 3.7/4 </i>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
