"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import "./HomeCurriculum.css";
const HomeCurriculum = () => {
  const faq = [
    {
      question: "Semester 1",
      list: [
        "Business Communication",
        "Financial Accounting",
        "Micro Economics & Macro Economics",
        "Organisational Behaviour",
        "Marketing Management",
        "Quantitative Methods – I",
      ],
    },
    {
      question: "Semester 2",
      list: [
        "Cost & Management Accounting",
        "Human Resource Management",
        "Strategic Management",
        "Business Analytics",
        "Legal Aspect of Business",
        "Operations Management",
      ],
    },
    {
      question: "Semester 3",
      list: [
        "Corporate Finance",
        "Research Methodology",
        "Project Part-I",
        "Subject as per chosen specialization 1",
        "Subject as per chosen specialization 2",
        "Subject as per chosen specialization 3",
        "Subject as per chosen specialization 4",
      ],
    },
    {
      question: "Semester 4",
      list: [
        "Indian Ethos & Ethics",
        "Corporate Sustainability",
        "International Business",
        "Project -II",
        "Subject as per chosen specialization 5",
        "Subject as per chosen specialization 6",
        "Subject as per chosen specialization 7",
      ],
    },
  ];
  return (
    <div className="homeProgram-container">
      <div className="homeProgram-wrapper">
        <div className="homeProgram-heading">
          <h2>Program Overview & Structure</h2>
        </div>
        <div className="homeProgram-stats">
          <div className="stat-box">
            <h2>2</h2>
            <p>Years Duration</p>
          </div>

          <div className="stat-box">
            <h2>4</h2>
            <p>Years Validity</p>
          </div>

          <div className="stat-box">
            <h2>4</h2>
            <p>Semesters</p>
          </div>
        </div>
        <Accordion defaultActiveKey="0" className="homeFaq-acc">
          {faq.map((item, index) => (
            <Accordion.Item
              eventKey={String(index)}
              key={index}
              className="homeFaq-item"
            >
              <Accordion.Header className="homeFaq-head">
                <h5>{item.question}</h5>
              </Accordion.Header>

              <Accordion.Body>
                {item.list && (
                  <ul className="feature-list">
                    {item.list.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default HomeCurriculum;
