import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <motion.main
      id="hero-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4 }}
    >
      {/* Background image – NORMAL scroll */}
      <div
        className="hero-bg"
        id="bg2"
      />

      {/* Text – slides UP gently */}
      <motion.div
        className="hero-content"
        variants={{
          hidden: { opacity: 0, y: 40, scale: 0.96 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.8,
               ease: [0.16, 1, 0.3, 1],
              delay: 0.55,
            },
          },
        }}
      >
        <h1 className="hero-text">Your words unheard?</h1>
      </motion.div>
    </motion.main>
  );
};

export default Hero;
