"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mnc from "@/Images/Approved/mnc.png";
import peacock from "@/Images/Approved/peacock.png";
import topFive from "@/Images/Approved/topFive.png";
import topHundred from "@/Images/Approved/topHundred.png";
import topTen from "@/Images/Approved/topTen.png";
import autonomy from "@/Images/Approved/autonomy.png";
import naac from "@/Images/Approved/naac.png";

import "./HomeApproval.css";
import Image from "next/image";
const HomeApproval = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4, // ⬅️ reduced from 10 (10 breaks layout)
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const items = [
    {
      img: mnc,
      text: "50+ corporates, MNCs and start-ups became the official Hiring Partners of NMIMS CDOE (erstwhile NGASCE)",
    },
    {
      img: topTen,
      text: "School of Business Management regularly featured NMIMS in the Top 10 MBA Schools",
    },
    {
      img: autonomy,
      text: "NMIMS has been Granted Category-1 Autonomy by UGC- 2018, showing credibility and quality of education ",
    },
    {
      img: naac,
      text: "NMIMS received the highest NAAC Accreditation score of 3.67 A++ Grade for the 4th consecutive cycle– 2025",
    },
    {
      img: topHundred,
      text: "NMIMS University has been ranked among top 100 universities by NIRF, making it valuable and creditable",
    },
    {
      img: topFive,
      text: "NMIMS CDOE (erstwhile NGASCE) ranked as the 5th Top Distance Learning Institute in India by DNA Indus Learning Survey – 2012",
    },
    {
      img: peacock,
      text: "NMIMS has recieved the Golden Peacock Innovation Management Award-2007",
    },
  ];
  return (
    <div className="homeApproval-container">
      <div className="homeApproval-heading">
        <h2>Approvals and Rankings</h2>
      </div>
      <div className="homeApproval-content">
        <Carousel
          responsive={responsive}
          swipeable
          draggable
          showDots={false}
          ssr
          infinite
          autoPlay
          autoPlaySpeed={13500}
          keyBoardControl
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          // itemClass="serviceHeaderCarousel-item"
        >
          {items.map((item, index) => (
            <div key={index} className="homeApproval-item">
              <div className="homeApproval-wrapper">
                <div className="homeApproval-icon">
                  <Image
                    src={item.img}
                    alt={item.text}
                    width={100}
                    height={100}
                  />
                </div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeApproval;
