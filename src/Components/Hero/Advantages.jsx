import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./adv.css";

const cardsData = [
  {
    title: "Card Title 1",
    text: "This is the subtext for card 1.",
  },
  {
    title: "Card Title 2",
    text: "This is the subtext for card 2.",
  },
  {
    title: "Card Title 3",
    text: "This is the subtext for card 3.",
  },
  {
    title: "Card Title 4",
    text: "This is the subtext for card 4.",
  },
];

export default function CardStack() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <div className="cards-section" ref={sectionRef}>
      {cardsData.map((card, index) => (
        <motion.div
          key={index}
          className={`card ${index % 2 === 0 ? "white" : "yellow"}`}
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
            ease: "easeOut",
          }}
        >
          <h2>{card.title}</h2>
          <p>{card.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
