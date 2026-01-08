import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./adv.css";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { id: 1, color: "#ffffff", title: "Card 1", text: "This is card one." },
  { id: 2, color: "#FFD93D", title: "Card 2", text: "This is card two." },
  { id: 3, color: "#ffffff", title: "Card 3", text: "This is card three." },
  { id: 4, color: "#FFD93D", title: "Card 4", text: "This is card four." },
];

export default function CardStack() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cardsEl = container.querySelectorAll(".card");

    // Card 1: start immediately, slide up 70% of container
    gsap.fromTo(
  cardsEl[0],
  { y: "0%" },
  {
    y: "-70%",  // final animation transformation
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "5% top",  // animation finishes by 20% scroll
      scrub: true,
      pin: true,       // keeps card in place after animation
      pinSpacing: false,
      onEnter: () => {
        gsap.to(cardsEl[0], {
          y: "-30vh",  // stop 30% from top after animation
          duration: 0.3,
          overwrite: true,
        });
      },
    },
  }
);


// Card 2: start after 10% scroll, slide up 50%
gsap.fromTo(cardsEl[1], 
  { y: "0px" }, // Line 1: Starting position (bottom of its initial flow)
  {
    y: "-150px",  // Line 2: Forced destination (50% up the container/itself)
    scrollTrigger: {
      trigger: container,     // Line 3: Watch the main container
      start: "5% top",       // Line 4: Animation begins when container is 10% past top
      end: "10% top",         // Line 5: Animation ends exactly at 20% scroll
      scrub: true,            // Line 6: Links movement directly to scrollbar
      // Removed onEnter and individual pinning to ensure smooth CSS transforms
    }
  }
);

    // Card 3: start after 10% scroll slide up 50%
    gsap.fromTo(cardsEl[2], 
  { y: "0px" }, // Line 1: Starting position (bottom of its initial flow)
  {
    y: "-100px",  // Line 2: Forced destination (50% up the container/itself)
    scrollTrigger: {
      trigger: container,     // Line 3: Watch the main container
      start: "10% top",       // Line 4: Animation begins when container is 10% past top
      end: "15% top",         // Line 5: Animation ends exactly at 20% scroll
      scrub: true,            // Line 6: Links movement directly to scrollbar
      // Removed onEnter and individual pinning to ensure smooth CSS transforms
    }
  }
);


    // Card 4: start after 15% scroll, slide up 40%
   gsap.fromTo(cardsEl[3], 
  { y: "0px" }, // Line 1: Starting position (bottom of its initial flow)
  {
    y: "-50px",  // Line 2: Forced destination (50% up the container/itself)
    scrollTrigger: {
      trigger: container,     // Line 3: Watch the main container
      start: "15% top",       // Line 4: Animation begins when container is 10% past top
      end: "20% top",         // Line 5: Animation ends exactly at 20% scroll
      scrub: true,            // Line 6: Links movement directly to scrollbar
      // Removed onEnter and individual pinning to ensure smooth CSS transforms
    }
  }
);

    
  }, []);

  return (
    <div className="scroll-wrapper">
      <div className="big-card-container" ref={containerRef}>
        {cards.map((card) => (
          <div
            key={card.id}
            className="card"
            style={{ backgroundColor: card.color }}
          >
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
