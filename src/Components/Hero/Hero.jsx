import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <motion.main
      id="hero-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4}}
    >
      {/* Background image – slides UP */}
      <motion.div
        className="hero-bg"
        id="bg1"
        variants={{
          hidden: { y: "150%" },
          visible: {
            y: "0%",
            transition: {
              duration: 0.9,
              ease: "easeOut",
            },
          },
        }}
      />

      {/* Text – pops UP */}
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
        <h1 className="hero-text">Feeling Lonely?</h1>
      </motion.div>
    </motion.main>
  );
};

export default Hero;
