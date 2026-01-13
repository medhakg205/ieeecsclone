import React from "react";
import "./FullSection.css";
import sampleVideo from "/my-video.mp4"; 

const NavSection = () => {
  return (
    <section className="nav-section">
      <div className="nav-links">
        <a href="#solution">about</a>
        <a href="#functions">functions</a>
        <a href="#adv">advantages</a>
        <a href="#forwhom">for whom</a>
        <a href="#how">how does it work</a>
        <a href="#specs">technologies</a>
      </div>

      <h1 className="nav-background-text">companion</h1>

      <div className="nav-video-wrapper">
        <video
          src={sampleVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

    </section>
  );
};

export default NavSection;
