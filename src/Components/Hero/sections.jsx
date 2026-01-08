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

export default function Sections() {
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
  const inView = useInView(ref, { margin: "-20% 0px" }); // animate every time

  return (
    <div className="section-part" ref={ref}>
      <div className="section-number">{data.number}</div>

      <div className="section-image">
        <img src={data.image} alt={`section-${data.number}`} />
      </div>

      <div className="section-strips">
        {data.strips.map((strip, i) => {
          const isLast = i === data.strips.length - 1;

          return (
            <motion.div
              key={i}
              className="strip"
              initial={{ y: isLast ? 100 : 0, opacity: isLast ? 0 : 1 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: isLast ? 100 : 0, opacity: isLast ? 0 : 1 }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }}
            >
              {strip}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
