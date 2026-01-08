import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./FunctionsSection.css";

const functionsData = [
  {
    image: "/func1.png",
    id: "a1",
    header: "Listen",
    subheader: "The Companion actively listens and analyzes\n your words, tone of voice, and even pauses to\ntruly understand your emotional state.",
    chat: [
      { text: "I can't choose for twenty minutes. This one is nostalgia, that one is a new sound. What would you choose?", side: "right" },
      { text: "What is closer now. You feel it subtly, you are just afraid to trust yourself.", side: "left" },
      { text: "You're right...I often doubt. I want someone to confidently tell me.", side: "right" },
      { text: "I am close. But your voice is more important. Take a step-and it will grow stronger.", side: "left" },
    ],
  },
  {
    image: "/func2.png",
    id: "a2",
    header: "Understand",
    subheader: "By combining what you hear and what you see,\n the Companion seeks to deeply understand the\n roots of your experiences and current state.",
    chat: [
      { text: "I'm burnt out. I don't see the point. Can you help me notice what I'm missing?", side: "left" },
      { text: "You are brave to ask. Less control means more trust in yourself.", side: "right" },
      { text: "I often drive myself. But how else can I do it if I don't know how to do it any other way?", side: "left" },
      { text: "Start small. Notice the harshness-replace it with support. This is care. I am near.", side: "right" },
    ],
  },
  {
    image: "/func3.png",
    id: "a3",
    header: "Support",
    subheader: "Based on complete understanding, Companion\n provides personalized and always available\n emotional support.",
    chat: [
      { text: "I feel like I'm stuck. I do everything, but it's like there's no movement.", side: "right" },
      { text: "I understand. It's hard. But you're not alone-we can handle it.", side: "left" },
      { text: "Thank you, you always notice what is really needed.", side: "right" },
      { text: "I see your efforts. I believe in you-everything will work out.", side: "left" },
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

          // NEW fixed layout pattern:
          // row 0 → image right
          // row 1 → image left
          // row 2 → image right
          const imageRight = idx === 0 || idx === 2;

          const { scrollYProgress } = useScroll({
            target: rowRef,
            offset: ["start center", "end center"],
          });

          return (
            <div
  ref={rowRef}
  key={item.id}
  className={`function-row ${imageRight ? "image-right" : "image-left"} ${item.id}`}
>

              {/* If image should be left */}
              {!imageRight && (
                <img src={item.image} alt={item.header} className="function-image" />
              )}

              <div className="text-container">
                <h3 className="function-header">{item.header}</h3>
                <h4 className="function-subheader">{item.subheader}</h4>

                <div className="function-text-box">
                  {item.chat.map((msg, i) => {
                    const opacity = useTransform(
                      scrollYProgress,
                      [i * 0.2, i * 0.2 + 0.35, 0.85, 1],
                      [0, 1, 1, 0]
                    );

                    const y = useTransform(
                      scrollYProgress,
                      [i * 0.15, i * 0.15 + 0.1],
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

              {/* If image should be right */}
              {imageRight && (
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
