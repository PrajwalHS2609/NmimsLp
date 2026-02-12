import React from "react";
import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/Images/logo.png"
const Logo = () => {
  return (
    <div className="logo-container">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
