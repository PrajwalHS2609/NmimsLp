"use client"
import React from "react";
import "./HomeSpecialization.css";
import marketing from "@/Images/ServiceImgs/marketing-management.png";
import business from "@/Images/ServiceImgs/business-management.png";
import financial from "@/Images/ServiceImgs/financial-management.png";
import hr from "@/Images/ServiceImgs/hr-management.png";
import operation from "@/Images/ServiceImgs/operations-and-data-science-management.png";
import infoTec from "@/Images/ServiceImgs/Information Technology Management.png";
import business_analytic from "@/Images/ServiceImgs/Business Analytics.png";

import Image from "next/image";

const HomeSpecialization = () => {
    const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  const data = [
    {
      title: "Marketing Management",
      image: marketing,
      tag: "POPULAR",
      tagClass: "orange",
    },
    {
      title: "Business Management",
      image: business,
    },
    {
      title: "Financial Management",
      image: financial,
      tag: "TRENDING",
      tagClass: "green",
    },
    {
      title: "Human Resource Management",
      image: hr,
      tag: "TOP RATED",
      tagClass: "green",
    },
    {
      title: "Operations and Data Science Management",
      image: operation,
    },
     {
      title: "Information Technology Management",
      image: infoTec,
      tag: "TOP RATED",
      tagClass: "green",
    },
    {
      title: "Business Analytics",
      image: business_analytic,
    },
  ];
  return (
    <section className="spec-section">
      <h2 className="spec-title">
        Future-Ready Specializations for Tomorrow’s Leaders
      </h2>
      <div className="spec-grid">
        {data.map((item, index) => (
          <div className="spec-card" key={index}>
            <div className="spec-image">
              {item.tag && (
                <span className={`spec-tag ${item.tagClass}`}>{item.tag}</span>
              )}
              <Image src={item.image} alt={item.title} />
            </div>

            <div className="spec-content">
              <h3>{item.title}</h3>
            </div>

            <div className="spec-btnContainer">
              <button onClick={handlePop}>Enquire Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSpecialization;
