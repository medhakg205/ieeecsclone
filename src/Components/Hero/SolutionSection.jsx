import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./SolutionSection.css";

const SolutionSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  
  const titleOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0.2, 0.4], [0, -60]);

  const videoScale = useTransform(scrollYProgress, [0.2, 1], [0.9, 1]);
  const bgOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);


  const panelScaleX = useTransform(
    scrollYProgress,
    [0.32, 0.65],
    [0.29, 0.7]
  );

 
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.5, 0.6], [20, 0]);

  return (
    <section id="solution" ref={ref} className="solution-section">
      <motion.div className="solution-bg" style={{ opacity: bgOpacity }} />

      

     
      <motion.h2
        className="solution-title"
        style={{ opacity: titleOpacity, y: titleY }}
      >
        Solution
      </motion.h2>

      
      <motion.div
        className="solution-panel"
        style={{
          left: "50%",
          top: "80%",      
          x: "-50%",
          y: "-50%",
          scaleX: panelScaleX,
        }}
      >
        <h2 className="panel-title">Companion</h2>
      </motion.div>

      
      <motion.div className="video-wrapper" style={{ scale: videoScale }}>
        <video
          src="/solution-preview.mp4"
          muted
          autoPlay
          loop
          playsInline
        />
      </motion.div>

      
      <motion.div
        className="solution-text-box"
        style={{ opacity: textOpacity, y: textY }}
      >
        <p>
          Companion is a personal AI device that learns thousands of conversations
          from different people with an open line of psychological support.
        </p>
      </motion.div>
    </section>
  );
};

export default SolutionSection;
