import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Hero.css";

const cards = [
  {
    title: "Why a Companion",
    text: "A digital presence that understands emotions and responds with empathy.",
    color: "yellow",
  },
  {
    title: "Always Listening",
    text: "Understands tone, pauses, and intent beyond just words.",
    color: "white",
  },
  {
    title: "Personalized Support",
    text: "Adapts responses based on your emotional patterns and needs.",
    color: "yellow",
  },
  {
    title: "Built for Trust",
    text: "Privacy-first design with transparency at every step.",
    color: "white",
  },
];

export default function Advantages() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="advantages">
      {cards.map((card, i) => {
        const start = i * 0.22;
        const end = start + 0.22;

        // 🔥 More drastic slide (starts WAY lower, slightly overshoots)
        const y = useTransform(
          scrollYProgress,
          [start, end],
          ["140%", "-10%"]
        );

        return (
          <div key={i} className="card-wrapper">
            {/* TITLE (now color-aware) */}
            <h2 className={`adv-title ${card.color}`}>
              {card.title}
            </h2>

            {/* SLIDING CARD */}
            <motion.div
              className={`adv-card ${card.color}`}
              style={{ y }}
            >
              <p className="adv-text">{card.text}</p>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
