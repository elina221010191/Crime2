import "../Styles/about.css";
import Login from "./Login";
import { Link } from "react-router-dom";
// import CrimeTypes from "./About"
import { useState } from "react";
import React from "react";


const About = () => {
  return (
    <section className="why-choose-us">
      {/* Left Section */}
      <div className="why-text">
        <h2>ABOUT</h2>
        <p>
        There are many parking solutions available, but the majority lack efficiency, security, or convenience. 
        Before you leave your location, make sure you know exactly where you'll be parking your car.
         Our platform eliminates uncertainty by offering a seamless booking experience, real-time availability updates, 
         and secure parking spaces. 
        No more wasted time searching for a spot—reserve instantly and park with confidence.
        </p>
        <button className="read-more">Read More</button>
      </div>

      {/* Right Section (Image Grid) */}
      <div className="image-grid">
        <div className="image-overlay">
          <img src="/w-1.jpg" alt="Parking 1" />
          <div className="hover-overlay">🔗</div>
        </div>
        <div className="image-overlay">
          <img src="/w-2.jpg" alt="Parking 2" />
          <div className="hover-overlay">🔗</div>
        </div>
        <div className="image-overlay">
          <img src="/w-3.jpg" alt="Parking 3" />
          <div className="hover-overlay">🔗</div>
        </div>
        <div className="image-overlay">
          <img src="/w-4.jpg" alt="Parking 4" />
          <div className="hover-overlay">🔗</div>
        </div>
      </div>
    </section>
  );
};

export default About;