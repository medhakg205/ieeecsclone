import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./specs.css";
import demoGif from './your-gif.gif'; // Replace with your GIF path

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { id: 1, color: "#ffffff", title: "Card 1", text: "This is card one." },
  { id: 2, color: "#FFD93D", title: "Card 2", text: "This is card two." },
  { id: 3, color: "#ffffff", title: "Card 3", text: "This is card three." },
  { id: 4, color: "#FFD93D", title: "Card 4", text: "This is card four." },
  { id: 5, color: "#ffffff", title: "Card 5", text: "This is card five." },
  { id: 6, color: "#FFD93D", title: "Card 6", text: "This is card six." },
  { id: 7, color: "#ffffff", title: "Card 7", text: "This is card seven." },
];

export default function Specs() {
  const containerRef = useRef(null);
useEffect(() => {
  const container = containerRef.current;
  const cardsEl = container.querySelectorAll(".cardstack"); // Gets ALL 7 cards
  console.log("Found cards:", cardsEl.length); // DEBUG: Should log 7

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      pin: true,
      pinSpacing: true,
    }
  });

  // FIXED: Animate ALL 7 cards (0-6 indices)
  cardsEl.forEach((card, index) => {
    const startTime = index * 0.12; // Slightly faster stagger
    const yDistance = -15 * (index + 1);
    
    tl.fromTo(card, 
      { y: "0%", scale: 1, rotation: 0 },
      {
        y: `${yDistance}px`,
        scale: 0.96 - (index * 0.015),
        rotation: index * -0.5,
        duration: 0.4,
        ease: "power2.out"
      }, startTime
    );
  });

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);


  return (
    <div className="scroll-wrapper">
      <div className="layout-container" ref={containerRef}>
        {/* LEFT SIDE - GIF + HEADING */}
        <div className="left-column">
          <h2 className="left-heading">Visual Demo</h2>
          <img src={demoGif} alt="Demo" className="demo-gif" />
        </div>

        {/* RIGHT SIDE - CARDS + HEADING */}
        <div className="right-column">
          <h2 className="right-heading">Key Features</h2>
          <div className="big-card-container">
            {cards.map((card) => (
              <div
                key={card.id}
                className="cardstack"
                style={{ backgroundColor: card.color }}
              >
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
