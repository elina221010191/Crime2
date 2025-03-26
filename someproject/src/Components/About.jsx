import "../Styles/about.css";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";


const About = () => {
  return (
    <section className="why-choose-us">
      {/* Left Section */}
      <div className="why-text">
        <h2>ABOUT</h2>
        <p>
        Many crime-reporting solutions exist, but most lack efficiency, security, or accessibility. Before heading to a location, ensure you know how to report any suspicious activity or crime. Our platform eliminates uncertainty by providing a seamless reporting experience, real-time updates, and secure data handling. No more hesitation in reporting—submit instantly and help create a safer community. 
        Stay informed about crimes in your area.
        </p>
        <button className="read-more"><Link to="/Crime" style={{textDecoration:"none"}}>Read More </Link></button>
      </div>

      {/* Right Section (Image Grid) */}
      <div className="image-grid">
        <div className="image-overlay">
          <img src="/crime2.jpg" alt="Parking 1" />
          <div className="hover-overlay">🔗</div>
        </div>
        <div className="image-overlay">
          <img src="/crime1.jpg" alt="Parking 2" />
          <div className="hover-overlay">🔗</div>
        </div>
        <div className="image-overlay">
          <img src="/crime.jpg" alt="Parking 3" />
          <div className="hover-overlay">🔗</div>
        </div>
        <div className="image-overlay">
          <img src="/crime1111.jpg" alt="Parking 4" />
          <div className="hover-overlay">🔗</div>
        </div>
      </div>
    </section>
  );
};

export default About;