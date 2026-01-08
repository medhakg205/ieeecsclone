import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Sections.css";

const sectionsData = [
  {
    number: "01",
    image: "/img1.png",
    strips: ["Activation"]
  },
  {
    number: "02",
    image: "/img2.png",
    strips: ["Activation", "Personalization"]
  },
  {
    number: "03",
    image: "/img3.png",
    strips: ["Activation", "Personalization", "Interaction"]
  },
  {
    number: "04",
    image: "/img4.png",
    strips: ["Activation", "Personalization", "Interaction", "Summary"]
  },
];

export default function Section() {
  return (
    <div className="sections">
      {sectionsData.map((section, idx) => (
        <SectionPart key={idx} data={section} />
      ))}
    </div>
  );
}

function SectionPart({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="section-part" ref={ref}>
      <div className="section-number">{data.number}</div>
      <div className="section-image">
        <img src={data.image} alt={`section-${data.number}`} />
      </div>
      <div className="section-strips">
        {data.strips.map((strip, i) => (
          <motion.div
            key={i}
            className="strip"
            initial={{ x: i === data.strips.length - 1 ? 100 : 0, opacity: i === data.strips.length - 1 ? 0 : 1 }}
            animate={{ x: inView && i === data.strips.length - 1 ? 0 : 0, opacity: inView && i === data.strips.length - 1 ? 1 : 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {strip}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
