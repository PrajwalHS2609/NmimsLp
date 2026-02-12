"use client";
import React, { useState } from "react";
import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbMenu3, TbX } from "react-icons/tb";

const Menu = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };

  return (
    <div className="menu-container">
      {/* Desktop menu */}
      <div className="menu-content">
        <ul>
          <li>
            <Link href="#home" className={pathname === "#home" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#specializations"
              className={pathname === "#specializations" ? "active" : ""}
            >
              Specializations
            </Link>
          </li>
          <li>
            <Link
              href="#curriculum"
              className={pathname === "#curriculum" ? "active" : ""}
            >
              Curriculum
            </Link>
          </li>
          <li>
            <Link
              href="#certificate"
              className={pathname === "#certificate" ? "active" : ""}
            >
              Sample Certificate
            </Link>
          </li>
          <li>
            <Link
              href="#process"
              className={pathname === "#process" ? "active" : ""}
            >
              Admission Process{" "}
            </Link>
          </li>
          <li>
            <Link href="/faq" className={pathname === "/faq" ? "active" : ""}>
              FAQ
            </Link>
          </li>
          <button onClick={handlePop}>Enquire Now</button>
        </ul>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="repMenu-container">
        <TbMenu3
          className="respMenu-icon"
          onClick={() => setSidebarOpen(true)}
        />
      </div>

      {/* Sidebar menu */}
      <div className={`repMenu-content ${sidebarOpen ? "show" : ""}`}>
        <TbX
          className="respMenu-icon"
          style={{ position: "absolute", top: "20px", right: "20px" }}
          onClick={() => setSidebarOpen(false)}
        />
        <ul>
          <li>
            <Link
              href="#home"
              onClick={() => setSidebarOpen(false)}
              className={pathname === "#home" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#specializations"
              onClick={() => setSidebarOpen(false)}
              className={pathname === "/#specializations" ? "active" : ""}
            >
              Specializations
            </Link>
          </li>
          <li>
            <Link
              href="/#curriculum"
              onClick={() => setSidebarOpen(false)}
              className={pathname === "/#curriculum" ? "active" : ""}
            >
              Curriculum
            </Link>
          </li>
          <li>
            <Link
              href="#certificate"
              onClick={() => setSidebarOpen(false)}
              className={pathname === "#certificate" ? "active" : ""}
            >
              Sample Certificate
            </Link>
          </li>
          <li>
            <Link
              href="#process"
              onClick={() => setSidebarOpen(false)}
              className={pathname === "#process" ? "active" : ""}
            >
              Admission Process
            </Link>
          </li>
          <li>
            <Link
              href="#faq"
              onClick={() => setSidebarOpen(false)}
              className={pathname === "#faq" ? "active" : ""}
            >
              FAQ
            </Link>
          </li>
          <button
            style={{ margin: "30px 20px" }}
            onClick={() => {
              handlePop();
              toggleMenu();
            }}
          >
            Speak to Advisor
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
