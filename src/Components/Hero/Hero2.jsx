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
      
      <div
        className="hero-bg"
        id="bg2"
      />

      
      <motion.div
        className="hero-content"
        variants={{
          hidden: {
            opacity: 0,
            y: "25%",
          },
          visible: {
            opacity: 1,
            y: "0%",
            transition: {
              duration: 0.6,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
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
