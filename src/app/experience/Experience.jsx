import React from "react";
export const experienceData = [
  {
    role: "Senior Frontend Developer",
    company: "Strat Agile",
    others: "Client: Standard Chartered Bank",
    location: "Bengaluru , India",
    duration: "March 2025 – Present",
    description: [
      "Developing and maintaining scalable banking web applications with a focus on performance and security",
      "Built and enhanced credit card application flows including form handling, validation, and dynamic user journeys",
      "Worked on multiple user journeys such as 0% handling fee offers, multi-transaction flows, and priority card experiences",
      "Implemented complex form validations and dynamic field rendering based on user inputs and business logic",
      "Integrated REST APIs and handled real-time data updates for seamless user experience",
      "Optimized frontend performance and reduced load time for critical user flows",
      "Ensured responsive design and cross-browser compatibility across devices",
      "Collaborated closely with backend, QA, and product teams in an Agile environment",
    ],
    impact: [
      "Improved conversion rate and user experience in credit card application journeys",
      "Successfully delivered multiple production-level banking features with high reliability",
      "Reduced form errors through improved validation and UX enhancements",
    ],
    tech: ["React.js", "HTML", "CSS", "JavaScript", "REST API", "SCSS"],
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
      "Developed and delivered 15+ real-world client projects with a focus on modern UI/UX and performance",
      "Built responsive and visually appealing user interfaces using React.js and Next.js",
      "Implemented API integration and handled dynamic data rendering across multiple applications",
      "Developed and optimized form handling, validation, and submission workflows",
      "Improved frontend performance and ensured smooth user experience across devices",
      "Worked on reusable components and scalable frontend architecture",
      "Collaborated with backend developers and designers to deliver production-ready applications",
    ],
    impact: [
      "Successfully delivered multiple client projects with high-quality UI and performance",
      "Improved user experience and responsiveness across applications",
      "Built scalable and reusable frontend solutions used across projects",
    ],
    tech: [
      "React.js",
      "Next.js",
      "HTML",
      "CSS",
      "JavaScript",
      "REST API",
      "Bootstrap",
    ],
    tools: ["VS Code", "GitHub", "Postman", "Figma", "ClickUp", "ChatGPT"],
  },
  {
    role: "Frontend Developer",
    company: "Ayka Tech - Sales Town",
    others: "",
    location: "Noida , India",
    duration: "March 2022 - September 2022",
    description: [
      "Built UI components using React.js, HTML, CSS and JavaScript",
      "Converted design mockups into responsive web pages",
      "Assisted in frontend development and testing",
      "Learned modern frontend workflows and best practices",
      "Collaborating with backend and design teams",
    ],
    impact: ["Delivered clean and responsive UI"],
    tech: ["React.js", "HTML", "CSS", "JavaScript", "Bootstrap", "SCSS"],
    tools: ["VS Code", "GitHub", "Postman", "Figma"],
  },
];
const Experience = () => {
  return (
    <div className="mt-5">
      <h1 className="fs-1 fw-bold text-center">Experience</h1>
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
            <div className="col-md-4 col-12 ">
              <p className="fs-4 fw-bold cardText">{item.role}</p>
              <p className="fs-5 fw-bold sky-blue">{item.company}</p>
              <p className="fs-6 fw-semibold sky-blue">{item.others}</p>
              <p className="fs-6 fw-semibold cardText">{item.location}</p>
              <p className="fs-7 fw-semibold cardText">{item.duration}</p>
            </div>
            <div className="col-md-8 col-12">
              <p className="fw-bold mt-3 cardText">Roles & Responsibility:</p>

              <ul>
                {item.description.map((desc, i) => (
                  <li key={i} className="cardText">
                    {desc}
                  </li>
                ))}
              </ul>

              {item.impact.length > 0 && (
                <>
                  <p className="fw-bold mt-3 cardText">Impact:</p>
                  <ul>
                    {item.impact.map((imp, i) => (
                      <li className="cardText" key={i}>
                        {imp}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="mt-3 d-flex flex-wrap gap-2 cardText ">
                <span>
                  <b>Tech Stack :</b>
                </span>
                {item.tech.map((t, i) => (
                  <span key={i} className="skillsTag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-3 d-flex flex-wrap gap-2 cardText">
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
