import React from "react";
import Projects from "./Projects";

export const metadata = {
  title: "Projects",
  description:
    "Explore real-world projects built with React.js, Next.js, and modern frontend technologies including animations, API integration, and responsive design.",
};

const page = () => {
  return (
    <>
      <Projects />
    </>
  );
};

export default page;
