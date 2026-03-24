"use client";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Lobster_Two } from "next/font/google";
import { IoCloseCircle, IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { MdWbSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";

const lobster = Lobster_Two({
  subsets: ["latin"],
  weight: ["700"],
});

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [theme, setTheme] = useState("light");

  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMobileMenu(false);
  };

  // load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  // apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.nav}>
          <div
            className={`${styles.nav_icon}  name`}
            onClick={() => handleNavigation("/")}
          >
            Kamesh hedau
          </div>
          <div className={styles.desktop}>
            <p
              onClick={() => handleNavigation("/")}
              className={pathname === "/" ? styles.activePath : ""}
            >
              Home
            </p>
            <p
              onClick={() => handleNavigation("/about")}
              className={pathname === "/about" ? styles.activePath : ""}
            >
              About
            </p>
            <p
              onClick={() => handleNavigation("/experience")}
              className={pathname === "/experience" ? styles.activePath : ""}
            >
              Experience
            </p>
            <p
              onClick={() => handleNavigation("/projects")}
              className={pathname === "/projects" ? styles.activePath : ""}
            >
              Projects
            </p>
            <p
              onClick={() => handleNavigation("/contact")}
              className={pathname === "/contact" ? styles.activePath : ""}
            >
              Contact
            </p>
          </div>
          <div className={styles.nav_tool}>
            <button
              className={` btn-light ${styles.navbtn}`}
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1v4ovUXHIFI43obv0XsFdWAZ6Zv2_ovVG",
                  "_blank",
                )
              }
            >
              Resume
            </button>
            <p className="fs-2" onClick={toggleTheme}>
              {theme === "light" ? <IoIosMoon /> : <MdWbSunny />}
            </p>
            <p
              className={styles.mobile}
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {!mobileMenu ? <IoMenu /> : <IoCloseCircle />}
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.mobile_menu} ${mobileMenu && styles.active}`}>
        <div className={styles.mobile_menu_items}>
          <p onClick={() => handleNavigation("/")}>Home</p>
          <p onClick={() => handleNavigation("/about")}>About</p>
          <p onClick={() => handleNavigation("/experience")}>Experience</p>
          <p onClick={() => handleNavigation("/projects")}>Projects</p>
          <p onClick={() => handleNavigation("/contact")}>Contact</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
