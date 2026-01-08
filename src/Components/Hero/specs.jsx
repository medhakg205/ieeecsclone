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
  const cardsEl = container.querySelectorAll(".cardstack");

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: "bottom+=200 top",
    scrub: 1,
    pin: true,
    pinSpacing: true,
  });

  gsap.fromTo(
    cardsEl,
    {
      opacity: 0,
      y: 150,          // start from right
      rotate: 5        // small tilt
    },
    {
      opacity: 1,
      y: 0,
      rotate: 0,
      stagger: 0.25,   // one by one
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    }
  );

  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
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
