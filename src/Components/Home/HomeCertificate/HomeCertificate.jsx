import React from "react";
import "./HomeCertificate.css";
import certificate from "@/Images/certificate.png";
import Image from "next/image";
const HomeCertificate = () => {
  return (
    <section className="sample-cert">
      <div className="container">
        <h2 className="section-title">Sample Certificate</h2>

        <div className="cert-wrapper">
          {/* Orange Content Box */}
          <div className="cert-content">
            <ul>
              <li>
                Get an official certificate from NMIMS upon the successful
                completion of the program.
              </li>
              <li>
                NMIMS Online MBA certificate will be accepted and recognized for
                higher education and higher job roles.
              </li>
            </ul>
          </div>

          {/* Certificate Image */}
          <div className="cert-image">
            <Image src={certificate} alt="Certificate" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCertificate;
