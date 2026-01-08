import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Hero.css";

const SolutionSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Orange title (UNCHANGED)
  const titleOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0.2, 0.4], [0, -60]);

  // Video (UNCHANGED)
  const videoScale = useTransform(scrollYProgress, [0.2, 1], [0.9, 1]);

  // ✅ White panel exists & expands
  const panelScaleX = useTransform(
    scrollYProgress,
    [0.32, 0.65],
    [0.29, 0.7]
  );

  // Bottom-right text (UNCHANGED)
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.5, 0.6], [20, 0]);

  return (
    <section id="solution" ref={ref} className="solution-section">
      <motion.div className="solution-bg" />

      {/* ORANGE TITLE (stays) */}
      <motion.h2
        className="solution-title"
        style={{ opacity: titleOpacity, y: titleY }}
      >
        Solution
      </motion.h2>

      {/* ✅ WHITE PANEL (already present) */}
      <motion.div
        className="solution-panel"
        style={{
          left: "50%",
          top: "80%",      // ⬅ slightly below title
          x: "-50%",
          y: "-50%",
          scaleX: panelScaleX,
        }}
      >
        <h2 className="panel-title">Companion</h2>
      </motion.div>

      {/* Video */}
      <motion.div className="video-wrapper" style={{ scale: videoScale }}>
        <video
          src="/solution-preview.mp4"
          muted
          autoPlay
          loop
          playsInline
        />
      </motion.div>

      {/* Bottom-right text box */}
      <motion.div
        className="solution-text-box"
        style={{ opacity: textOpacity, y: textY }}
      >
        <h4>How it works</h4>
        <p>
          Companion is a personal AI device that learns thousands of conversations
          from different people with an open line of psychological support.
        </p>
      </motion.div>
    </section>
  );
};

export default SolutionSection;
