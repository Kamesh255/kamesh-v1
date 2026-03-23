"use client";

import { FaDownLong } from "react-icons/fa6";

export default function ScrollButton() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.scrollY + 500,
      behavior: "smooth",
    });
  };

  return (
    <button className="scroll-btn btn-light fw-bold " onClick={scrollDown}>
      <FaDownLong  />
    </button>
  );
}