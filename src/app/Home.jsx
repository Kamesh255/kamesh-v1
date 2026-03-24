"use client";
import React, { useEffect } from "react";
import styles from "./home.css";
import HeroSection from "./HeroSection";
import CountUp from "./CountUp";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";
import ScrollButton from "./ScrollButton";
// import HeroRight from "./HeroRight";
import dynamic from "next/dynamic";

const HeroRight = dynamic(() => import("./HeroRight"), {
  ssr: false,
});

export const projects = [
  {
    title: "Plastic Innovation",
    tagline: "Custom Manufacturing Platform",
    desc: "Developed a fully responsive and performance-optimized business website with clean UI architecture and seamless navigation across devices, delivering a production-ready frontend solution.",
    img: "/image/plasticSite.png",
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    link: "http://plasticinnovations.com/",
    role: "Frontend Developer",
    projects: "(client project - Hilab Solutions)",
  },
  {
    title: "Chashmaghar",
    tagline: "E-commerce Platform",
    desc: "Developed an intuitive e-commerce UI with optimized product browsing and responsive design, improving usability and engagement in a production-level environment.",
    img: "/image/chshmaghar.png",
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    link: "https://www.chashmaghar.in/",
    role: "Frontend Developer",
    projects: "(client project - Hilab Solutions)",
  },
  {
    title: "Arthro 3D",
    tagline: "3D Healthcare Platform",
    desc: "Designed and developed interactive UI for complex 3D visualization workflows, focusing on clarity, performance, and seamless user interaction.",
    img: "/image/arthro3D.png",
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    link: "https://arthro3d.com/",
    role: "Frontend Developer",
    projects: "(client project - Hilab Solutions)",
  },
  {
    title: "KDCC Bank",
    tagline: "Banking Services Platform",
    desc: "Developed a clean and responsive UI with optimized navigation and accessibility, ensuring smooth user experience.",
    img: "/image/kddc.png",
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    link: "https://www.kdccbank.in/",
    role: "Frontend Developer",
    projects: "(client project - Hilab Solutions)",
  },
  {
    title: "Chiku Orchard",
    tagline: "Event & Venue Platform",
    desc: "Designed a visually engaging and responsive frontend with smooth layouts and improved user interaction.",
    img: "/image/chiku.png",
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    link: "https://thechiku.in/",
    role: "Frontend Developer",
    projects: "(client project - Hilab Solutions)",
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  const router = useRouter();
  return (
    <div className="main">
      <div className=" m-auto row align-items-center justify-content-between">
        <div className="col-md-6 ">
          <div className="py-4 col-md-10 col-11 m-auto">
            <p className="fs-2 fw-bold" data-aos="fade-up">
              Hi, I'm <br />
            </p>
            <h1 className="fs-1 fw-bold  name" data-aos="fade-up">
              Kamesh Hedau
            </h1>
            <p className="fs-3 fw-bold" data-aos="fade-up">
              Senior Frontend Developer
            </p>
            <p className="fs-5  col-lg-10 col-12" data-aos="fade-up">
              I build scalable, high-performance and interactive web
              applications using React, Next.js and modern frontend
              technologies.
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
        </div>
        <div className="col-md-6">
          {/* <div className="homeMobile"> */}
            <HeroRight />
          {/* </div> */}
          {/* <div className="homeDesktop"> */}
            {/* <HeroSection /> */}
          {/* </div> */}
        </div>
      </div>

      <div className="col-lg-6 col-md-8 col-11 m-auto mt-5 text-center">
        <p className="fs-1 fw-bold text-center" data-aos="fade-up">
          About Me
        </p>
        <p className="fs-5" data-aos="fade-up">
          I'm a frontend developer with 4 years of experience building modern
          and responsive web applications. I focus on performance, clean code
          and creating seamless user experiences.
        </p>
        <button
          className="btn-light mt-4 "
          data-aos="fade-up"
          onClick={() => router.push("/about")}
        >
          Know More
        </button>
      </div>

      <div className="col-11 m-auto row justify-content-center">
        <div className="col-lg-4 col-md-6 col-12 mt-5 ">
          <div
            className="darkcard col-11 m-auto text-center h-100  "
            data-aos="zoom-in"
          >
            <div className="p-3 ">
              <p className="fs-1 cardText">
                💼 <CountUp end={4} suffix="" />
              </p>
              <p className="fs-3 cardText">Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mt-5">
          <div
            className="darkcard col-11 m-auto text-center h-100 "
            data-aos="zoom-in"
          >
            <div className="p-3">
              <p className="fs-1 cardText">
                {" "}
                🚀
                <CountUp end={20} suffix="+" />
              </p>
              <p className="fs-3 cardText"> Completed Projects </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mt-5">
          <div
            className="darkcard col-11 m-auto text-center h-100 "
            data-aos="zoom-in"
          >
            <div className="p-3">
              <p className="fs-1 cardText">
                {" "}
                ⭐<CountUp end={100} suffix="%" />
              </p>
              <p className="fs-3 cardText"> Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="col-lg-6 col-md-8 col-11 m-auto mt-5 text-center">
          <p className="fs-1 fw-bold text-center" data-aos="fade-up">
            Featured Projects
          </p>
          <p className="fs-5" data-aos="fade-up">
            Here are some of the projects I’ve worked on, showcasing my skills
            and experience.
          </p>
        </div>

        <div className="col-11 m-auto row  justify-content-center">
          {projects.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-12 mt-5" key={index}>
              <div
                className="darkcard col-11 m-auto  h-100 "
                data-aos="zoom-in"
              >
                <img
                  src={item.img}
                  className="projectImg"
                  alt={`Project ${index + 1}`}
                />
                <div>
                  <p className="fs-4 fw-semibold sky-blue mt-2">{item.title}</p>
                  <p className="fs-6  text-center cardText">{item.tagline}</p>

                  <p className="fs-7 text-start mt-2 cardText">{item.desc}</p>
                  <p className="fs-7 my-2 text-start cardText ">
                    <b>Role :</b> {item.role}
                  </p>
                  {item.projects && item.projects != "" && (
                    <p className="fs-7 my-2 text-start cardText">
                      <b>Project :</b> {item.projects}
                    </p>
                  )}
                  {item.link && item.link != "" && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fs-7 sky-blue"
                      style={{ textAlign: "start" }}
                    >
                      Live link
                    </a>
                  )}

                  <p className="mt-3 mb-2 cardText">
                    <b> Tech Stack</b>
                  </p>
                  <div className=" d-flex gap-3 align-items-center flex-wrap">
                    {item.skills.map((skill, skillIndex) => (
                      <span className="skillsTag" key={skillIndex}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="btn-light  my-4 m-auto "
          onClick={() => router.push("/projects")}
        >
          View All Projects
        </button>

        <br />
      </div>
    </div>
  );
};

export default Home;
