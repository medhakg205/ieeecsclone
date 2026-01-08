import React from "react";
import "./FullSection.css";
import sampleVideo from "/my-video.mp4"; // replace with your video path

const NavSection = () => {
  return (
    <section className="nav-section">
      <div className="nav-links">
        <a href="#about">about</a>
        <a href="#functions">functions</a>
        <a href="#advantages">advantages</a>
        <a href="#for-whom">for whom</a>
        <a href="#how">how does it work</a>
        <a href="#technologies">technologies</a>
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

      <div className="credits">
        <p>“Designed by zaitsev.design and Uprock studio”</p>
        <p>Built by CompanionTeam / Made in TapTop</p>
      </div>
    </section>
  );
};

export default NavSection;
