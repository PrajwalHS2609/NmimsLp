import React from "react";
import "./HomeSpecialization.css";
const HomeSpecialization = () => {
  const data = [
    {
      title: "Marketing Management",
      image:
        "https://www.collegesathi.com/nmimsonlinemba/assets/marketing-management-CVGuvy-G.avif",
      tag: "POPULAR",
      tagClass: "orange",
    },
    {
      title: "Business Management",
      image:
        "https://www.collegesathi.com/nmimsonlinemba/assets/marketing-management-CVGuvy-G.avif",
    },
    {
      title: "Financial Management",
      image:
        "https://www.collegesathi.com/nmimsonlinemba/assets/marketing-management-CVGuvy-G.avif",
      tag: "TRENDING",
      tagClass: "green",
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
              <img src={item.image} alt={item.title} />
            </div>

            <div className="spec-content">
              <h3>{item.title}</h3>
            </div>

            <div className="spec-btnContainer">
              <button>Enquire Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSpecialization;
