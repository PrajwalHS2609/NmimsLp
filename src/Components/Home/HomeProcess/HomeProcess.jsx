import React from "react";
import "./HomeProcess.css";
const HomeProcess = () => {
  return (
    <section className="admission-section">
      <div className="admission-container">
        <h2 className="admission-title">Online MBA Admission Process</h2>

        <div className="timeline">
          <div className="timeline-line"></div>
          <div className="timeline-step">
            <div className="step-dot"></div>
            <p>Registration</p>
          </div>
          <div className="timeline-step">
            <p>Document Submission</p>
            <div className="step-dot"></div>
          </div>{" "}
          <div className="timeline-step">
            <div className="step-dot"></div>
            <p>Fee Payment</p>
          </div>{" "}
          <div className="timeline-step">
            <p>Confirmation</p>
            <div className="step-dot"></div>
          </div>{" "}
          <div className="timeline-step">
            <div className="step-dot"></div>
            <p>Student Portal Activation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;
