import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./adv.css";

const cardsData = [
  {
    title: "Empathy",
    text: "Unlike standard virtual companions, Companion is based on a database of conversations\n from a professional support service. This means that it does not simply process\n information, but can truly listen, recognize subtle emotional signals, and offer support that is\n proven by real experience in helping people in a variety of life situations.",
  },
  {
    title: "Personalization",
    text: "Companion learns from your interactions, adapting its communication style and\n recommendations to your individual needs and preferences. You recieve support that is\n tailored to you, helping you grow and develop at your own",
  },
  {
    title: "Availability",
    text: "Companion is available 24/7, at any time of the day or night. You don't have to wait for\n someone to be free or in the mood to listen.Support and communication are always just a\n click or a voice command away.",
  },
  {
    title: "Confidentiality",
    text: "All your conversations with your device are processed locally or using advanced\n encryption methods, ensuring that your conversations with your computer remain\n completely private. ",
  },
];

export default function CardStack() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="adv" className="cards-section" ref={sectionRef}>
      
      <h1 className="section-heading">Why a Companion?</h1>
      {cardsData.map((card, index) => (
  <motion.div
    key={index}
    className={`card ${index % 2 === 0 ? "yellow" : "white"}`}
    initial={{ y: 100, opacity: 0 }}
    animate={isInView ? { y: 0, opacity: 1 } : {}}
    transition={{
      duration: 0.6,
      delay: index * 0.2,
      ease: "easeOut",
    }}
  >
    <div className="card-number">
      {String(index + 1).padStart(2, "0")}
    </div>
    <div className="card-content">
      <h2>{card.title}</h2>
      <p>{card.text}</p>
    </div>
  </motion.div>
))}

    </section>
  );
}
