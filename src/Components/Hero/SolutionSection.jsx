import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Hero.css";

const SolutionSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Header animation
  const titleOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0.2, 0.5], [0, -40]);

  // Video expansion
  const scale = useTransform(scrollYProgress, [0.2, 1], [0.8, 1.3]);

  // 🔥 Gradient background animation
  const bgOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const bgScale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);

  return (
    <section id="solution" ref={ref} className="solution-section">
      {/* Animated gradient background */}
      <motion.div
        className="solution-bg"
        style={{ opacity: bgOpacity, scale: bgScale }}
      />

      {/* Content */}
      <motion.h2
        style={{ opacity: titleOpacity, y: titleY }}
        className="solution-title"
      >
        Solution
      </motion.h2>

      <motion.div style={{ scale }} className="video-wrapper">
        <video
          src="/solution-preview.mp4"
          poster="/video-thumb.jpg"
          muted
          playsInline
        />
      </motion.div>
    </section>
  );
};

export default SolutionSection;
