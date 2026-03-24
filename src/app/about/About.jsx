"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGit,
  FaGithubSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
} from "react-icons/si";

import { MdDevices, MdSpeed } from "react-icons/md";

import { BsFiletypeScss } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";
import { TbBrandRedux } from "react-icons/tb";
import CodeStats from "../CodeStats";

export const skillsData = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact color="#61DBFB" size={36} /> },
      { name: "Next.js", icon: <SiNextdotjs color="#3f3434" size={36} /> },
      { name: "JavaScript", icon: <SiJavascript color="#f7df1e" size={36} /> },
      { name: "HTML", icon: <FaHtml5 color="#e34c26" size={36} /> },
      { name: "CSS", icon: <FaCss3Alt color="#264de4" size={36} /> },
    ],
  },
  {
    title: "Styling",
    items: [
      { name: "Tailwind", icon: <SiTailwindcss color="#38bdf8" size={36} /> },
      { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" size={36} /> },
      { name: "SCSS", icon: <BsFiletypeScss color="#cc6699" size={36} /> },
    ],
  },
  {
    title: "Tools & Others",
    items: [
      { name: "Git", icon: <FaGit color="#f1502f" size={36} /> },
      { name: "GitHub", icon: <FaGithubSquare color="#463e3e" size={36} /> },
      { name: "VS Code", icon: <VscVscode color="#029aff" size={36} /> },

      { name: "Redux", icon: <TbBrandRedux color="#7952b3" size={36} /> },
    ],
  },
  {
    title: "Additional",
    items: [
      { name: "Three.js", icon: <SiThreedotjs color="#18363f" size={36} /> },
      {
        name: "Responsive Design",
        icon: <MdDevices color="#3da9fc" size={36} />,
      },
      { name: "Performance", icon: <MdSpeed color="#22c55e" size={36} /> },
    ],
  },
];

const education = [
  {
    title: "Courses",
    degree: "Full-Stack Web Development",
    institution: "Masai School, Bangalore",
    year: "(July 2021 - Feb. 2022)",
  },
  {
    title: "Post Graduation",
    degree: "M.Tech",
    institution: "Samrat Ashok Technological Institute Vidisha (M.P.)",
    year: "(July 2021 - June 2025)",
  },
  {
    title: "Graduation",
    degree: "Bachelor Of Engineering ",
    institution: "Sagar Institute of Science & Technology, Bhopal (M.P.)",
    year: "(July 2015 - June 2019)",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <div className="mt-5" style={{ overflow: "hidden" }}>
      <div className="col-11 m-auto row align-items-center gap-md-0 gap-5 my-4">
        <div className="col-md-6">
          <h1 className="fs-1 fw-bold" data-aos="fade-up">
            About Me
          </h1>
          <p className="fs-5 tjustify  col-md-10 col-12" data-aos="fade-up">
            I'm a frontend developer with 4 years of experience building modern
            and responsive web applications. I focus on performance, clean code
            and creating seamless user experiences.
          </p>
          <div
            className="d-flex gap-4 mt-3 align-items-center"
            data-aos="fade-up"
          >
            <a
              href="https://github.com/Kamesh255"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ fontSize: "30px", color: "#463e3e" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/kamesh-hedau-b22349226/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{ fontSize: "30px" }} className="sky-blue" />
            </a>
            <button
              className="btn-light"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1v4ovUXHIFI43obv0XsFdWAZ6Zv2_ovVG",
                  "_blank",
                )
              }
            >
              View Resume
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="m-auto aboutImg" data-aos="zoom-in">
            <img src="./image/kamesh.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div className="col-11 mt-5 m-auto">
        <p className="fs-1 fw-semibold" data-aos="fade-up">
          Professional Summary
        </p>
        <p className="fs-5 mt-3 tjustify" data-aos="fade-up">
          I specialize in React.js and Next.js, focusing on building modern,
          responsive and performance-optimized applications.
        </p>
        <p className="fs-5 mt-3 tjustify" data-aos="fade-up">
          Over the years, I have worked on multiple production-level projects,
          handling complete frontend development — from UI implementation to API
          integration and performance optimization.
        </p>

        <p className="fs-5 mt-3 tjustify" data-aos="fade-up">
          I focus on writing clean, maintainable code and delivering seamless
          user experiences.
        </p>
      </div>

      <div className="col-11 mt-5 m-auto">
        <p className="fs-1 fw-semibold" data-aos="fade-up">
          What I Do
        </p>
        <ul className="ulText">
          <li className="fs-5 mt-3 tjustify" data-aos="fade-up">
            Build scalable frontend architectures using React and Next.js
          </li>
          <li className="fs-5 mt-3 tjustify" data-aos="fade-up">
            Develop responsive and cross-device compatible UI
          </li>
          <li className="fs-5 mt-3 tjustify" data-aos="fade-up">
            Integrate REST APIs and handle dynamic data efficiently
          </li>
          <li className="fs-5 mt-3 tjustify" data-aos="fade-up">
            Optimize performance and improve loading speed
          </li>
          <li className="fs-5 mt-3 tjustify" data-aos="fade-up">
            Create reusable and maintainable components
          </li>
        </ul>
      </div>

      <div className="col-11 mt-5 m-auto">
        <p className="fs-1 fw-semibold text-center" data-aos="fade-up">
          Skills & Technologies
        </p>
        {skillsData.map((category, i) => (
          <div key={i}>
            <p className="fs-1 text-center mt-4" data-aos="fade-up">
              {category.title}
            </p>

            <div className="skills-grid mt-3">
              {category.items.map((skill, index) => (
                <div key={index} className="skill-card" data-aos="zoom-in">
                  <div className="icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <CodeStats />
      </div>
      <div>
        <p className="fs-1 fw-bold text-center mt-5" data-aos="fade-up">
          Education
        </p>
        <div className="col-11 m-auto row  justify-content-center mb-5">
          {education.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-12 mt-5" key={index}>
              <div className="darkcard col-11 m-auto h-100 " data-aos="zoom-in">
                <div className="text-start p-3">
                  <p className="fs-3 fw-bold sky-blue">{item.title}</p>
                  <p className="fs-5 fw-bold cardText">{item.degree}</p>
                  <p className="fs-5  fw-lighter cardText">
                    {item.institution}
                  </p>
                  <p className="fs-7 cardText">{item.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
