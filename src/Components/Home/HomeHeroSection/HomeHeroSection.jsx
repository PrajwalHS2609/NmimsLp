import React from "react";
import "./HomeHeroSection.css";
import Image from "next/image";
import headerWoman from "@/Images/headerWoman.png"
const HomeHeroSection = () => {
  return (
    <div className="homeHero-container">
      <div className="homeHero-content">
        <h2>Uplift Your Career with NMIMS Online MBA</h2>
        <div className="enquiry-card">
          <h2 className="enquiry-title">Enquire with us</h2>
          <p className="enquiry-sub">Get 1-on-1 Career Counselling</p>

          <form className="enquiry-form">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email address" />

            <div className="mobile-field">
              <span>+91</span>
              <input type="text" placeholder="Mobile number" />
            </div>

            <select>
              <option>Select Specialization</option>
            </select>
          </form>

          <div className="consent-box">
            <input type="checkbox" defaultChecked />
            <p>
              I authorize NMIMS University Online and its associates to contact
              me with updates and notifications via email, SMS, WhatsApp, and
              voice calls. This consent will override any registration under
              DNC/NDNC.
            </p>
          </div>

          <div className="submit-wrap">
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      </div>
      <div className="homeHero-content">
        <div className="homeHero-wrapper">
          <div className="homeHero-block1">
            <b>24*7</b>
            <p>access to all live & recorded lectures</p>
          </div>
          <div className="homeHero-block1">
            <b>Explore</b>
            <p>world-class study resource </p>
          </div>
        </div>
        <div className="homeHero-wrapper">
          <div className="homeHero-block2">
            <Image
              src={headerWoman}
              alt="header Woman"
            />
            <div className="homeHero-float">
              <b>30+</b>
              <p>Programs designed for working professionals</p>
            </div>
            <div className="homeHero-float">
              <p>Learn with experienced faculty members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
