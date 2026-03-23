import React from "react";
export const experienceData = [
  {
    role: "Senior Frontend Developer",
    company: "Strat Agile",
    others: "Standard Chartered Bank Client",
    location: "Bengaluru , India",
    duration: "March 2025 – Present",
    description: [
      "Developing and maintaining scalable web applications.",
      "Building reusable components and improving application architecture",
      "Fixed bugs and improved UI consistency",
      "Integrating REST APIs and handling dynamic data efficiently",
      "Optimizing performance and reducing loading time",
      "Ensuring responsive and cross-browser compatible UI",
      "Collaborating with backend and design teams",
    ],
    impact: [
      "Improved application performance and user experience",
      "Delivered multiple production-level features successfully",
    ],
    tech: ["React.js", "HTML", "CSS", "JavaScript", "Rest API", "SCSS"],
    tools: [
      "VS Code",
      "GitHub",
      "GitHub Desktop",
      "Azure DevOps",
      "Postman",
      "Figma",
      "ChatGPT",
      "Copilot",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Hi-Lab Solution",
    others: "",
    location: "Work From Home , India",
    duration: "October 2022 - March 2025",
    description: [
      "Developing and maintaining scalable web applications using React and Next.js",
      "Worked on API integration and dynamic data rendering",
      "Fixed bugs and improved UI consistency",
      "Enhanced performance and optimized frontend code",
      "Collaborating with backend and design teams",
    ],
    impact: [
      "Delivered stable and user-friendly interfaces",
      "Improved application responsiveness",
    ],
    tech: [
      "React.js",
      "Next.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Rest API",
      "Bootstrap",
    ],
    tools: ["VS Code", "GitHub", "Postman", "Figma", "Click UP", "ChatGPT"],
  },
  {
    role: "Frontend Developer",
    company: "Ayka Tech - Sales Town",
    others: "",
    location: "Noida , India",
    duration: "March 2022 - September 2022",
    description: [
      "Built UI components using HTML, CSS and JavaScript",
      "Converted design mockups into responsive web pages",
      "Assisted in frontend development and testing",
      "Learned modern frontend workflows and best practices",
    ],
    impact: ["Delivered clean and responsive UI"],
    tech: ["React.js", "HTML", "CSS", "JavaScript", "Bootstrap", "SCSS"],
    tools: ["VS Code", "GitHub", "Postman", "Figma"],
  },
];
const Experience = () => {
  return (
    <div>
      <p className="fs-1 fw-bold text-center">Experience</p>
      <p className="fs-5 tjutify col-md-8 col-11 m-auto">
        A summary of my professional journey and contributions as a frontend
        developer.
      </p>

      <div className="mb-5">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="darkcard p-3 py-4 col-11 m-auto row gap-md-0 gap-4 mt-5 align-items-center"
          >
            <div className="col-md-4 col-12">
              <p className="fs-4 fw-bold">{item.role}</p>
              <p className="fs-5 fw-bold sky-blue">{item.company}</p>
              <p className="fs-6 fw-semibold sky-blue">{item.others}</p>
              <p className="fs-6 fw-semibold ">{item.location}</p>
              <p className="fs-7 fw-semibold">{item.duration}</p>
            </div>
            <div className="col-md-8 col-12">
              <p className="fw-bold mt-3">Roles & Responsibility:</p>

              <ul>
                {item.description.map((desc, i) => (
                  <li key={i} className="">
                    {desc}
                  </li>
                ))}
              </ul>

              {item.impact.length > 0 && (
                <>
                  <p className="fw-bold mt-3">Impact:</p>
                  <ul>
                    {item.impact.map((imp, i) => (
                      <li key={i}>{imp}</li>
                    ))}
                  </ul>
                </>
              )}

              <div className="mt-3 d-flex flex-wrap gap-2">
                <span>
                  <b>Tech Stack :</b>
                </span>
                {item.tech.map((t, i) => (
                  <span key={i} className="skillsTag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-3 d-flex flex-wrap gap-2">
                <span>
                  <b>Tools :</b>
                </span>
                {item.tools.map((t, i) => (
                  <span key={i} className="skillsTag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
