"use client";
import React, { useEffect } from "react";
import styles from "./home.css";
import HeroSection from "./HeroSection";
import CountUp from "./CountUp";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";

const project = [
  {
    name: "Plastic Innovation",
    description:
      "Plastic Innovations specializes in custom plastic solutions, offering expertise in design, prototyping, and manufacturing. They provide a range of services, including injection molding, blow molding, and thermoforming, catering to diverse industries. Their focus is on delivering high-quality, innovative plastic products tailored to meet specific client needs.",
    skills: ["React JS", "HTML", "CSS", "Bootstrap", "NPM"],
    image: "/image/plasticSite.png",
    link: "https://plasticinnovations.com/",
  },
  {
    name: "Arthro 3D",
    description:
      "Arthro3D provides 3D visualization tools for orthopedic surgical planning. Their technology creates detailed, customizable models to assist surgeons in improving precision and outcomes in orthopedic procedures.",
    skills: ["React JS", "HTML", "CSS", "Bootstrap", "NPM"],
    image: "/image/arthro3d.png",
    link: "https://arthro3d.com/",
  },
  {
    name: "Chiku Orchard",
    description:
      "Discover Chiku Orchard, where timeless beauty meets modern elegance. With 19 years of wedding event management experience, our 100,000 sq. ft. property boasts a stunning landscape of majestic Chiku trees. Enjoy a magical ambiance and immerse yourself in nature.",
    skills: ["React JS", "HTML", "CSS", "Bootstrap", "NPM"],
    image: "/image/chiku.png",
    link: "https://thechiku.in/",
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  const router = useRouter();

  return (
    <div className="main">
      <div className="col-11 m-auto row align-items-center justify-content-between">
        <div className="col-md-6">
          <div className="py-4">
            <p className="fs-1 fw-bold" data-aos="fade-up">
              Hi, I'm <br />
              <span className="fw-bold sky-blue name">Kamesh Hedau</span>
            </p>
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
                <FaGithub style={{ fontSize: "30px" }} className="dark-blue" />
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
          <HeroSection />
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
        <div className="col-lg-4 col-md-6 col-12 mt-5">
          <div
            className="darkcard col-11 m-auto text-center  "
            data-aos="zoom-in"
          >
            <div className="p-3">
              <p className="fs-1">
                💼 <CountUp end={4} suffix="" />
              </p>
              <p className="fs-3">Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mt-5">
          <div
            className="darkcard col-11 m-auto text-center "
            data-aos="zoom-in"
          >
            <div className="p-3">
              <p className="fs-1">
                {" "}
                🚀
                <CountUp end={20} suffix="+" />
              </p>
              <p className="fs-3"> Completed Projects </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mt-5">
          <div
            className="darkcard col-11 m-auto text-center "
            data-aos="zoom-in"
          >
            <div className="p-3">
              <p className="fs-1">
                {" "}
                ⭐<CountUp end={100} suffix="%" />
              </p>
              <p className="fs-3"> Client Satisfaction</p>
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
          {project.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-12 mt-5" key={index}>
              <div
                className="darkcard col-11 m-auto text-center h-100 "
                data-aos="zoom-in"
              >
                <img
                  src={item.image}
                  className="projectImg"
                  alt={`Project ${index + 1}`}
                />
                <div>
                  <p className="fs-3 fw-bold sky-blue">{item.name}</p>
                  <p className="fs-7 tjustify">{item.description}</p>
                  <div className=" d-flex gap-3 align-items-center py-3 mb-5 flex-wrap">
                    {item.skills.map((skill, skillIndex) => (
                      <span className="skillsTag" key={skillIndex}>
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{ position: "absolute", bottom: "20px", left: "0" }}
                    className="col-12 d-flex justify-content-center"
                  >
                    <button
                      className="btn-light "
                      onClick={() => window.open(item.link, "_blank")}
                    >
                      Live Demo
                    </button>
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
