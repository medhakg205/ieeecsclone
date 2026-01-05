import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Hero.css";

const functionsData = [
  {
    image: "/func1.png",
    header: "Listen",
    subheader: "Companion tailors advice based on your emotional state.",
    chat: [
      { text: "Hey, I’m here with you.", side: "left" },
      { text: "Tell me what’s been bothering you.", side: "left" },
      { text: "I’m listening carefully.", side: "right" },
    ],
  },
  {
    image: "/func2.png",
    header: "Understand",
    subheader: "Combines what you see and hear.",
    chat: [
      { text: "I notice patterns in what you say.", side: "left" },
      { text: "That makes sense emotionally.", side: "right" },
      { text: "Let’s break this down together.", side: "left" },
    ],
  },
  {
    image: "/func3.png",
    header: "Support",
    subheader: "Encouragement when you need it.",
    chat: [
      { text: "You’re not alone in this.", side: "right" },
      { text: "You’ve handled tough things before.", side: "left" },
      { text: "I believe in you.", side: "right" },
    ],
  },
];

const FunctionsSection = () => {
  return (
    <section className="functions-section" id="functions">
      <div className="solution-bg" />
      <h2 className="functions-title">How can a companion help?</h2>

      <div className="functions-container">
        {functionsData.map((item, idx) => {
          const rowRef = useRef(null);
          const isLeft = idx % 2 === 0;

          // ONE scroll tracker per row
          const { scrollYProgress } = useScroll({
            target: rowRef,
            offset: ["start center", "end center"],
          });

          return (
            <div
              ref={rowRef}
              key={idx}
              className={`function-row ${isLeft ? "image-left" : "image-right"}`}
            >
              {isLeft && (
                <img src={item.image} alt={item.header} className="function-image" />
              )}

              <div className="text-container">
                <h3 className="function-header">{item.header}</h3>
                <h4 className="function-subheader">{item.subheader}</h4>

                <div className="function-text-box">
                  {item.chat.map((msg, i) => {
                    // stagger each bubble
                    const start = i * 0.15;
                    const end = start + 0.25;

                    const opacity = useTransform(
  scrollYProgress,
  [
    i * 0.2,        // starts later
    i * 0.2 + 0.35, // takes longer to fade in
    0.85,
    1
  ],
  [0, 1, 1, 0]
);


                    const y = useTransform(
                      scrollYProgress,
                      [start, start + 0.1],
                      [20, 0]
                    );

                    return (
                      <motion.div
                        key={i}
                        style={{ opacity, y }}
                        className={`chat-bubble ${
                          msg.side === "left"
                            ? "chat-left white-bubble"
                            : "chat-right yellow-bubble"
                        }`}
                      >
                        {msg.text}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {!isLeft && (
                <img src={item.image} alt={item.header} className="function-image" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FunctionsSection;
