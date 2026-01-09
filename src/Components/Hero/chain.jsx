import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Chain.css";

const cardsData = [
  {
    title: "For those experiencing loneliness and Social Isolation:",
    img: "/chain1.png",
  },
  {
    title: "For those who are dealing with Stress and Anxiety:",
    img: "/chain2.png",
  },
  {
    title: "For those experiencing Emotional Difficulties and Crises:",
    img: "/chain3.png",
  },
  {
    title: "For those who Value Anonymity and Confidentiality:",
    img: "/chain4.png",
  },
];

export default function Chain() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const startScroll = 0.4;
  const endScroll = 0.8;

  // Horizontal movement (cards slide left/right)
  const xTransforms = cardsData.map((_, i) =>
    useTransform(scrollYProgress, [startScroll, endScroll], [500 - i * 400, -500 - i * 400])
  );

  // Rotation for visual flair
  const rotateTransforms = cardsData.map((_, i) =>
    useTransform(scrollYProgress, [startScroll, (startScroll + endScroll)/2, endScroll], [i % 2 === 0 ? 15 : -15, 0, i % 2 === 0 ? -15 : 15])
  );

  return (
    <section id="forwhom" ref={ref} className="chain-section">
      <h1 className="chain-title">Companion is for everyone</h1>

      <div  className="chain-cards-container">
        {cardsData.map((card, i) => (
          <motion.div
            key={i}
            className="chain-card"
            style={{
              x: xTransforms[i],
              rotate: rotateTransforms[i],
              zIndex: 1, // ensures cards are ABOVE the title
            }}
          >
            <div className="chain-card-content">
              <h2 className="chain-card-title">{card.title}</h2>
              <img src={card.img} alt={card.title} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
