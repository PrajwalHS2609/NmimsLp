import React from "react";
import "./Topbar.css";
import { FaPhoneAlt } from "react-icons/fa";
const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-content">
        MBA Help Desk – Connect Now
        <a href="tel:6362946008"><FaPhoneAlt />
 {" "}
+91 6362946008</a>
      </div>
    </div>
  );
};

export default Topbar;
