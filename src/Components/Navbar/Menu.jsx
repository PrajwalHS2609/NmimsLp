"use client";
import React, { useState } from "react";
import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbMenu3, TbX } from "react-icons/tb";

const Menu = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

const scrollToSection = (id) => {
  setSidebarOpen(false); // ✅ close sidebar
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };

  return (
    <div className="menu-container">
      {/* Desktop menu */}
      <div className="menu-content">
        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("specializations")}>
            Specializations
          </li>
          <li onClick={() => scrollToSection("curriculum")}>Curriculum</li>
          <li onClick={() => scrollToSection("certificate")}>
            Sample Certificate
          </li>
          <li onClick={() => scrollToSection("process")}>Admission Process </li>
          <li onClick={() => scrollToSection("faq")}>FAQ</li>
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
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("specializations")}>
            Specializations
          </li>
          <li onClick={() => scrollToSection("curriculum")}>Curriculum</li>
          <li onClick={() => scrollToSection("certificate")}>
            Sample Certificate
          </li>
          <li onClick={() => scrollToSection("process")}>Admission Process</li>
          <li onClick={() => scrollToSection("faq")}>FAQ</li>
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
