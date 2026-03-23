"use client";
import React, { useState } from 'react'
import styles from "./navbar.module.css";
import { Lobster_Two } from 'next/font/google';
import { IoCloseCircle, IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';


const lobster = Lobster_Two({
  subsets: ['latin'],
  weight: ['700'],
});

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
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
  return (
    <>


      <div className={styles.main}>
        <div className={styles.nav}>
          <div className={`${styles.nav_icon}  name`} onClick={() => handleNavigation('/')}>Kamesh hedau</div>
          <div className={styles.desktop}>
            <p onClick={() => handleNavigation('/')}  className={pathname === "/" ? styles.activePath : ""}>Home</p>
            <p onClick={() => handleNavigation('/about')} className={pathname === "/about" ? styles.activePath : ""}>About</p>
            <p onClick={() => handleNavigation('/experience')} className={pathname === "/experience" ? styles.activePath : ""}>Experience</p>
            <p onClick={() => handleNavigation('/projects')} className={pathname === "/projects" ? styles.activePath : ""}>Projects</p>
            <p onClick={() => handleNavigation('/contact')} className={pathname === "/contact" ? styles.activePath : ""}>Contact</p>
          </div>
          <div className={styles.nav_tool}>
            <button className="btn-light" onClick={()=> window.open('https://drive.google.com/drive/folders/1v4ovUXHIFI43obv0XsFdWAZ6Zv2_ovVG', '_blank')}>Resume</button>
            <p className={styles.mobile} onClick={() => setMobileMenu(!mobileMenu)}>{!mobileMenu ? <IoMenu /> : <IoCloseCircle />}</p>
          </div>

        </div>

      </div>
      <div className={`${styles.mobile_menu} ${mobileMenu && styles.active}`}>
        <div className={styles.mobile_menu_items}>
          <p onClick={() => handleNavigation('/')}>Home</p>
          <p onClick={() => handleNavigation('/about')}>About</p>
          <p onClick={() => handleNavigation('/experience')}>Experience</p>
          <p onClick={() => handleNavigation('/projects')}>Projects</p>
          <p onClick={() => handleNavigation('/contact')}>Contact</p>
        </div>
      </div>
    </>
  )
}

export default Navbar