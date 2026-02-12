"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import "./HomeFaq.css";
const HomeFaq = () => {
  return (
    <div className="homeFaq-container">
      {/* <HeadingProps title="" para="" /> */}
      <div className="homeWhyHead">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="homeFaq-wrapper">
        <div className="homeFaq-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="homeFaq-accItem" eventKey="0">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>Is the NMIMS CDOE&apos;s Online MBA UGC-Entitled ?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <div className="homeFaq-item">
                  <p>
                    Yes, the Online MBA at NMIMS CDOE is a UGC-Entitled and
                    AICTE-approved program, which means that it is a recognized
                    degree throughout India and globally.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="1">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>
                  What are the specializations offered in the NMIMS Online MBA
                  program?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <div className="homeFaq-item">
                  <p>
                    NMIMS Online MBA offers industry-specific specializations,
                    such as Marketing, Finance, Human Resource Management,
                    Operations and Data Science, supporting various career
                    objectives.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="2">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>
                  What are the eligibility criteria for NMIMS Online MBA
                  admission?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <div className="homeFaq-item">
                  <p>
                    The candidates should have a bachelor’s degree in any
                    discipline with at least 50% marks from a recognized
                    university to apply for NMIMS Online MBA.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="3">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>What are career prospects after NMIMS Online MBA?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <div className="homeFaq-item">
                  <p>
                    Graduates can opt for careers as Business Analysts,
                    Marketing Managers, HR Managers, Financial Analysts,
                    Consultants, and Project Managers, with opportunities in top
                    firms like TCS, Wipro, Infosys, Deloitte, and HDFC.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="4">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>
                  Do I need prior work experience to apply for NMIMS Online MBA?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <div className="homeFaq-item">
                  <p>
                    No, you can apply for an Online MBA at NMIMS CDOE without
                    work experience. If you are passing the eligibility
                    criteria, you can get admission at NMIMS CDOE.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default HomeFaq;
