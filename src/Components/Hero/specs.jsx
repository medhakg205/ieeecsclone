import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./specs.css";
import demoGif from './your-gif.gif'; // Replace with your GIF path

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { id: 1, color: "#ffffff", title: "Form factor", text: "Miniature brooch (60x40x10 mm)\nMagnetic attachment to clothing\nWeight: up to 50 g" },
  { id: 2, color: "#FFD93D", title: "Display", text: "No visible screen, e-ink type display\nHidden matte display for auxiliary indications only" },
  { id: 3, color: "#ffffff", title: "Audio", text: "Noise-canceling microphone\nUltra-directional speaker with counterbalance for sound privacy" },
  { id: 4, color: "#FFD93D", title: "Companion", text: "Bluetooth 5.2\nWi-Fi 6 (802.11ax)\neSIM support / synchronization with smartphon" },
  { id: 5, color: "#ffffff", title: "AI Features", text: "TNeural model trained on data from open psychological support lines\nEmotional tone recognition\nReal-time responsive suggestions and replies\nIntegration with conversation history" },
  { id: 6, color: "#FFD93D", title: "Privacy and Security", text: "Full data encryption\nPartial on-device processing\nAnonymous conversation mode" },
  { id: 7, color: "#ffffff", title: "Battery", text: "Battery life: up to 48 hours\nCharging: USB-C / magnetic contact dock" },
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
    <div id="specs" className="scroll-wrapper">
      <div className="layout-container" ref={containerRef}>
        {/* LEFT SIDE - GIF + HEADING */}
        <div className="left-column">
          <h2 className="left-heading">Specifications</h2>
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
