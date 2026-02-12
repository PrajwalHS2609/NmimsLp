import React from "react";
import "./Footer.css";

const Footer = () => {
  const footerData = [
    [
      "NMIMS Online MBA in Marketing Management",
      "NMIMS Online MBA in Business Management",
      "NMIMS Online MBA in Financial Management",
      "NMIMS Online MBA in Human Resource Management",
      "NMIMS Online MBA in Operations and Data Science Management",
    ],
    [
      "NMIMS Online MBA specialization",
      "NMIMS Online MBA registration",
      "NMIMS Online MBA fees structure",
      "NMIMS Online MBA admission",
      "NMIMS Online MBA",
    ],
    [
      "NMIMS Online MBA fee",
      "NMIMS university Online MBA fees",
      "NMIMS university Online MBA",
      "NMIMS MBA review",
      "NMIMS Online MBA brochure",
    ],
    [
      "NMIMS Online MBA exam",
      "NMIMS Online MBA syllabus",
      "NMIMS Online MBA fees",
      "NMIMS Online MBA accreditation",
      "Online MBA by NMIMS",
      "NMIMS Online MBA degree certificate",
      "NMIMS Online MBA experience",
      "NMIMS mumbai Online MBA brochure",
    ],
    [
      "NMIMS Online MBA fees for 2 years",
      "NMIMS Online MBA exams",
      "NMIMS Online MBA 2026 start date",
      "NMIMS Online MBA subjects",
      "NMIMS Online MBA admission process",
      "NMIMS Online MBA admission criteria",
    ],
    [
      "NMIMS Online MBA criteria",
      "NMIMS Online MBA curriculum",
      "NMIMS Online MBA certificate sample",
      "NMIMS Online MBA last date",
      "NMIMS Online MBA eligibility",
      "NMIMS MBA requirements",
    ],
  ];
  return (
    <footer className="footer">
      <div className="footer-grid">
        {footerData.map((column, index) => (
          <ul key={index}>
            {column.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ))}
      </div>

      <p className="disclaimer">
        Disclaimer: As an Affiliate Enquiry Partner (AEP) of NMIMS CDOE, we
        display and showcase program information of NMIMS CDOE. Counselling,
        Admission, Program delivery and examination is solely managed by NMIMS
        CDOE and as an AEP, we have no role to play in it.
      </p>
      <p className="disclaimer">
        Collegesathi 2025. All Rights Reserved | NMIMS University | Terms &
        Conditions | Privacy Policy
      </p>
    </footer>
  );
};

export default Footer;
