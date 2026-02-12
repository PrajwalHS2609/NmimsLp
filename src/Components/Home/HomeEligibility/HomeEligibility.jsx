import React from "react";
import "./HomeEligibility.css";
import eligibility from "@/Images/eligibility.png";
import Image from "next/image";
const HomeEligibility = () => {
  return (
    <section className="eligibility">
      <h2 className="eligibility-title">
        NMIMS Online MBA Eligibility Criteria
      </h2>

      <div className="eligibility-container">
        {/* Left Card */}
        <div className="eligibility-card">
          <h3>Who Can Apply for NMIMS Online MBA?</h3>

          <Image
            src={eligibility}
            alt="Eligibility"
            className="eligibility-img"
          />
        </div>

        {/* Right Content */}
        <div className="eligibility-content">
          <div className="eligibility-point">
            <div className="dot"></div>
            <p>
              The candidate must have a bachelor&apos;s degree (10+2+3) in any
              discipline from a recognized University or an equivalent degree
              recognized by the Association of Indian Universities (AIU) with
              minimum 50% marks at Graduation Level. (45% for SC/ST/OBC/PwD).
            </p>
          </div>

          <div className="eligibility-point">
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeEligibility;
